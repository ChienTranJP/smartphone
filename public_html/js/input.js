/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

window.addEventListener('DOMContentLoaded',function(){
    var subject = document.querySelector('#subject');
    var memo = document.querySelector('#memo');
    var save = document.querySelector('#save');
    var cancel = document.querySelector('#cancel');
    
    
    save.addEventListener('click',function (e) {
        e.preventDefault();
        if(!subject.validity.valid || !memo.validity.validity){
            alert('件名、メモはいずれも必須です');
            
        }
    },false);
    cancel.addEventListener('click',function () {
        location.href = 'index.html';
    },false);
    
}, false);
