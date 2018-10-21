var exports = module.exports = {};

exports.users = function (app, db) {
    app.get('/users', (req, res) => {
        ref.on("value", function (snapshot) {
            console.log(snapshot.val());
        }, function (errorObject) {
            console.log("The read failed: " + errorObject.code);
        });
    })
}


exports.test = function (app) {
    app.get("/test", function (req, res) {
        res.send("Firebase");
        res.end();
    });
} 