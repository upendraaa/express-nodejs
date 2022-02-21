const routes = (app) =>{
    app.route('/user')
       .get((req,res)=>
        res.send('GET User request successful!'))

        .post((req,res)=>{
            res.send('POST user data successfully!');
        })

        app.route('/user/:userID')
           .put((req,res)=>
           res.send("PUT request for userID successfully!"))

           .delete((req,res)=>{
               res.send('DELETE request sucessfully!')
           })
}

export default routes;