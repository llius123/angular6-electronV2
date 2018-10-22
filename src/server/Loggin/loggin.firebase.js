var exports = module.exports = {};

const modelo = require('../modelo');

exports.createUser = function (app, firebase) {
    app.get('/newUser/:user/:pass', (req, res) => {
        firebase.auth().createUserWithEmailAndPassword(req.params.user, req.params.pass).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            res.end();
        });
    })
}

exports.loggin = function (app, firebase) {
    app.get('/loggin/:user/:pass', async function (req, res) {

        const auth = await firebase.auth().signInWithEmailAndPassword(req.params.user, req.params.pass)
            .catch(function (err) {
                var errorCode = err.code;
                var errorMessage = err.message;
            });
        const check = await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                const userLogged = {
                    email: email,
                    id: uid
                }
                res.send(userLogged);
                res.end();
            } else {
                mensaje = { 'msg': 'No existe el usuario' };
                res.send(mensaje);
                res.end();
            }
        });
    }
    )
}

exports.loggout = function (app, firebase) {
    let mensaje = {
        'msg': null
    }
    app.get('/loggout', function (req, res) {
        firebase.auth().signOut().then(function () {
            mensaje.msg = 'Correcto';
            res.send(mensaje);
        }).catch(function (error) {
            mensaje.msg = 'Incorrecto';
            res.send(mensaje);
        });
        res.end();
    })
}