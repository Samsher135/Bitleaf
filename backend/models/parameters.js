const jwt = require("jsonwebtoken");
const mongooose = require("mongoose");
const bcrypt = require("bcryptjs");

const parameterSchema = new mongooose.Schema({
    parameter_name: {
        type: String
    },
    value: {
        type: Number
    }
});

// we need to know create the colletction in our database..
const Parameters = mongooose.model('PARAMETER', parameterSchema);

module.exports = Parameters;

