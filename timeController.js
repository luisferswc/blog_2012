/************
* TimeControler
*
**************/

var TIME_MAX_SESSION = 3000;  //en ms

exports.timeController = function(req, res, next){
    if (req.session.user) {
        var timeSession = new Date().getTime();
        console.log("saved session timeSession:" + timeSession);
        if (req.session.user.timeSession && req.session.user.timeSession + TIME_MAX_SESSION < timeSession) {
            console.log("session expired");
                delete req.session.user;
                //req.flash('info', 'La sesión ha se ha cerrado, ha excedido el tiempo maximo');
               res.redirect('/');
        } else {
            req.session.user.timeSession = timeSession;
        }
    }
   	 next();
};
