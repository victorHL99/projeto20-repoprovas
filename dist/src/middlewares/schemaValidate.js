"use strict";
exports.__esModule = true;
function validateSchema(schema) {
    return function (req, res, next) {
        var error = schema.validate(req.body, { abortEarly: false }).error;
        if (error) {
            throw {
                type: 'unprocessable_entity',
                message: error.details.map(function (e) { return e.message; }).join(', ')
            };
        }
        next();
    };
}
exports["default"] = validateSchema;
