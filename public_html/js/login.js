/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

window.addEventListener('DOMContentLoaded', function () {
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');
    var submit = document.querySelector('#submit');
    var reset = document.querySelector('#reset');
    var cancel = document.querySelector('#cancel');

       
    cancel.addEventListener('click', function () {
        if (username !== null || password !== null){
            location.href = "index.html";
        }else{
            r = confirm('goback');
            if(r){
                location.href = "index.html";      
            }
        }
    }, false);
    
},false);

