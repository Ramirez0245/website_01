const File_Model = require('../models/File.model');
const Validation  = require('../validation.js');

//File Page
const File_get_all  =  (req, res, next) =>
{
    res.render('File_view');
};

//POST
const File_post = async (req, res, next) =>
{
    const { error } = Validation.FileValidation(req); 
    if (error) return res.status(400).send(error.details[0].message);

    const FileNameExist = await File_Model.findOne( {FileName: req.body.file_name});
    if(FileNameExist)
    {
        const fileExtentionExist = await File_Model.findOne( {Extention: req.body.extention});
        if(fileExtentionExist)
        {
            const comment = [{status: 'File name with that extention already exist'}];
            return res.render('File_view',  { comment }  );
        }
        const File = await new File_Model({FileName: req.body.file_name, Extention: req.body.extention});
        const savedFile = await File.save();

        const comment = [{status: 'File with that extention has been created'}];
        return res.render('File_view',  { comment }  );
    }

    const File = await new File_Model({FileName: req.body.file_name, Extention: req.body.extention});
    const savedFile = await File.save();

    const comment = [{status: 'File with that extention has been created'}];
    return res.render('File_view',  { comment }  );
}
exports.File_get_all = File_get_all;
exports.File_post = File_post;