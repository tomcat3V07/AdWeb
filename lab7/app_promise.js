const p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let sid = 'B6100124';
        if(sid) {
            resolve({id: sid, name: 'Aditep'});
        }else{
            reject(new Error('Error 404 Bad Request'));
        }
    }, 1000);
})

p.then(result => {
    console.log(result);
})
.catch(function(err) {
    console.error(err);
})