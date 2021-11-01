const expressFunction = require('express');
const expressApp = expressFunction();

const students = [
                {stdid: 'B6100124', name: 'Aditep Poonsawat'},
                {stdid: 'B9999999', name: 'Lalisa Manoban'},
                ];

expressApp.get('/api/resource/students/:stdid', function(req, res){
    const stdid = req.params.stdid;
    if(stdid == 'B6100124'){
        res.status(200).send(students[0]);
    }else if(stdid == 'B9999999'){
        res.status(200).send(students[1]);
    }else {
        res.status(404).send('Error 404 not found');
    }
});

expressApp.listen(3000, function() {
    console.log('Listening on port 3000');
});