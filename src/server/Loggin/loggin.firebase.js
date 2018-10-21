var exports = module.exports = {};

exports.createUser = function (app, firebase) {
    app.get('/newUser/:user/:pass', (req, res) => {
        firebase.auth().createUserWithEmailAndPassword(req.params.user, req.params.pass).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
        res.send('hola');
        res.end();
    })
}
