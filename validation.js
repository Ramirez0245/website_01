const Joi = require('joi');

const FileValidation = req =>
{
    const schema = Joi.object
    ({
        file_name: Joi.string().min(4).max(26).required(),
        extention: Joi.string().min(1).max(12).required()
    }); 
    return schema.validate(req.body)
};

exports.StringFileExtractor = (string) =>
{
    console.log('Hello? exports.const.StringFileExtractor');
};

module.exports.FileValidation = FileValidation;