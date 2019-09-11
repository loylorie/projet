/*var demo = document.getElementById('demo')
if(demo.textContent){
    demo.textContent = "salut"
}else{
    demo.innerText = "salut"
}*/
/*var p = document.querySelector('.paragraph')
window.setInterval(function(){
    p.classList.toggle('bleue')
}, 1000)*/
/*var ps = document.querySelectorAll('p')
for(var i =0; i < ps.length; i++){
    var p = ps[i]
    var rougit = function (){
        p.classList.toggle('red')
    }
}

p.addEventListener('click', rougit)*/
const express = require('express');
const bodyparser = require('body-parser');
const User = require('./Routes/user.route');
const app = express();
app.use('/Users', User);
let port = 1234;
app.listen(port, () =>
{
    console.log('server is up and running on port numner ' + port);
});
