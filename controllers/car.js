var car = require('../models/car');
// List of all cars

 //res.send('NOT IMPLEMENTED: car list');
 // List of all cars
exports.car_list = async function(req, res) {
    try{
    thecars = await car.find();
    res.send(thecars);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   



// for a specific car.
exports.car_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: car detail: ' + req.params.id);
};
// Handle car create on POST.
//res.send('NOT IMPLEMENTED: car create POST');
 // Handle car create on POST.
exports.car_create_post = async function(req, res) {
 console.log(req.body)
 let document = new car();
 // We are looking for a body, since POST does not have query parameters.
 // Even though bodies can be in many different formats, we will be picky
 // and require that it be a json object
 // {"manufacturer":"goat", "price":12, "price":"large"}
 document.manufacturer = req.body.manufacturer;
 document.price = req.body.price;
 document.model = req.body.model;
 try{
 let result = await document.save();
 res.send(result);
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};

// Handle car delete form on DELETE.
exports.car_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: car update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function(req, res) {
 try{
 thecars = await car.find();
 res.render('car', { title: 'car Search Results', results: thecars });
 }
 catch(err){
 res.status(500);
 res.send(`{"error": ${err}}`);
 } 
};


// for a specific car.
exports.car_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await car.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle car update form on PUT.
exports.car_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await car.findById( req.params.id)
// Do updates of properties
if(req.body.manufacturer)
toUpdate.manufacturer = req.body.manufacturer;
if(req.body.model) toUpdate.model = req.body.model;
if(req.body.price) toUpdate.price = req.body.price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

