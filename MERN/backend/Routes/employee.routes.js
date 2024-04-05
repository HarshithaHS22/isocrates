const mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router(); // hepls to root the request to appropriate API
let employeeSchema = require("../Models/employee");
//craete employee
router.route("/add-emp").post(async (req, res, next) => {
    await employeeSchema
        .create(req.body)
        .then((result) => {
            res.json({
                data: result,
                message: "New employee added",
                status: 200
            });
        })
        .catch((err) => {
            return next(err);
        })

});
//read employee data stored in the database
router.route("/").get(async (req, res, next) => {
    await employeeSchema
        .find()//fetch details of entire collection
        .then((result) => {
            res.json({
                data: result,
                message: "All Employee details fetched successfully",
                status: 200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});
module.exports = router;

//Read one employee data stored in the database based on ID
router.route("/get-emp/:id").get(async (req, res, next) => {
    await employeeSchema
        .findById(req.params.id)//fetch details of entire collection
        .then((result) => {
            res.json({
                data: result,
                message: "One Employee details fetched successfully",
                status: 200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});

//Update one employee data stored in the database based on ID
router.route("/update-emp/:id").put(async (req, res, next) => {
    await employeeSchema
        .findByIdAndUpdate(req.params.id,{   //fetch details of entire collection
            $set:req.body,
        })  
            
        .then((result) => {
            res.json({
                data: result,
                message: "One Employee details updated successfully",
                status: 200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});

//Delete one employee data stored in the database based on ID
router.route("/delete-emp/:id").delete(async (req, res, next) => {
    await employeeSchema
        .findByIdAndDelete(req.params.id)//fetch details of entire collection
        .then((result) => {
            res.json({
                data: result,
                message: "One Employee details deleted successfully",
                status: 200,
            });
        })
    .catch((err) => {
        return next(err);
    });
});