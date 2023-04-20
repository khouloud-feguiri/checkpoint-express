const verify = (req ,res ,next) => {

    var today = new Date();
    var day = today.getDay();
    var time = today.getHours();




 if(time < 9 && time >= 17 || day ==0 || day ==2){  //Change the day to test Sunday = 0 
     res.redirect('/heure')
 } else {
     next();
 }

}
module.exports = verify;