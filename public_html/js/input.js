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
        if(subject.validity.valid === false || memo.validity.validity === false){
            alert('件名、メモはいずれも必須です');
            return;
        }
        
        //page 124, 125
        if(localStorage){
            var cpos_latitude = sessionStorage.getItem('cpos_latitude');
            var cpos_longitude = sessionStorage.getItem('cpos_longitude');
            if (cpos_latitude ===null || cpos_longitude === null){
                alert('トップページからアクセスし直してください');
                location.href = 'index.html';
            }
            
            var list = localStorage.getItem('memolist');
            if (list === null){
                list = [];
            }else{
                list = JSON.parse(list);
            }
            list.push({
                latitude: cpos_latitude,
                longitude: cpos_longitude,
                subject: subject.value,
                memo: memo.value,
                update: new Date()
            });
            list = JSON.stringify(list);
            localStorage.setItem('memolist', list);
            location.href = 'index.html';
          
            
        }
    },false);
    cancel.addEventListener('click',function () {
        location.href = 'index.html';
    },false);
    
}, false);
