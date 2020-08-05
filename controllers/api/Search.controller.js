const File_model = require('../../models/File.model');
const Validation = require('../../validation');

const seach_File = async (req, res, next) =>
{
    console.log(req.body);
    console.log(req.body.file_name);
    console.log('Seach_file');
    const { error } = Validation.FileValidation(req);
    console.log(error);
    if(error)
    {
        console.log('if(error == null) ran.')
        const error_Details = error.details[0].message;
        const comment = [{status: error_Details , error: 1}];
        //const comment = { status: error_Details }
        console.log(comment);
        console.log(comment[0].status);
        console.log('if(error == null) ended.')
        return res.status(400).send(comment);
    }
    console.log('??? 1');
    // ******** I LEFT OFF HERE ******************
    let string = req.body.extention;
    console.log(string);
    let string_example = 'string example';
    console.log(string_example);
    const sendingExample = {FileName: req.body.file_name, Extention: req.body.extention};
    const search = await File_model.find( sendingExample ); 
    console.log('??? 2');
    console.log(search);
    console.log('??? 3');

    if(search.length == 0)
    {
        return res.status(404).send('That file with that extention does not exist');
    }
    console.log('search_File_demo ended');
    res.status(200).send('File Exist')
}

exports.seach_File = seach_File;