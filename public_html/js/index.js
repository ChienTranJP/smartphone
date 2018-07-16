/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

/* global google */

window.addEventListener('DOMContentLoaded', function () {
    var w_id, gmap, c_point;
    var m_list = new google.maps.MVCArray();
    var result = document.querySelector('#result');
    var stopwatch = document.querySelector('#stopwatch');
    var showcurrent = document.querySelector('#showcurrent');
    var removemarker = function () {
        m_list.forEach(function(marker, index) {marker.setMap(null);});
    };
    
    var showmap = function (e) {
        removemarker();
        if(localStorage){
            var id = e.target.getAttribute('data-id');
            var list = localStorage.getItem('memolist');
            if (list !== null){
                list = JSON.parse(list);
                var item = list[id];
                var point = new google.maps.LatLng(
                        item.latitude, item.longitude);
                var marker = new google.maps.Marker({
                    map: gmap,
                    position: point
                });
                var msg = printf('<strong>{0}</strong><br/>{1}', item.subject,
                    item.memo);
                var info = new google.maps.InfoWindow({
                    content: msg      
                });
                google.maps.event.addListener(marker, 'click', function () {
                    info.open(gmap, marker);
                });
                gmap.setCenter(point);
                m_list.push(marker);
            }
        }
    };
    var removememo = function (e) {
        removemarker();
        if (localStorage){
            var id = e.target.getAttribute('data-id');
            var list = list.filter(function(memo, c_index, ary){
                if (id !== c_index.toString()) return memo;
            });
            localStorage.setItem('memolist', JSON.stringify(list));
            showmemo();
        }
    };
//#page 155
    var showmemo = function () {
        if (localStorage){
            var msg = '';
            var list = localStorage.getItem('memolist');
            if (list !== null){
                list = JSON.parse(list);
                for (var i = 0; i < list.length; i++){
                    msg += printf(
                            '<li><a href="#" class="show" data-id="{0}">{1}</a>'
                            + '<a class="del" href="#" data-id="{0}">X</a></li>'
                            , i, list[i].subject
                            );
                    
                }
                var r_list = document.querySelector('#list');
                r_list.innerHTML = msg;
                var subjects = document.querySelectorAll('#list a.show');
                for (var i = 0; i < subjects.length; i++){
                    subjects.item(i).addEventListener('click', showmap,false);
                }
                
                var deletes = document.querySelectorAll('#list a.del');
                for (var i = 0; i < deletes.length; i++){
                    deletes.item(i).addEventListener('click',removememo, false);
                }
            }
        }else {
            alert('ストレージに対応しているブラウザでアクセスしてください');
        }

    };
    
    stopwatch.addEventListener('click', function (e) {
        navigator.geolocation.clearWatch(w_id);
    }, false);
    
    showcurrent.addEventListener('click', function (e) {
        removemarker();
        gmap.setCenter(c_point);
    },false);
    
    if (navigator.geolocation){
        w_id = navigator.geolocation.watchPosition(
                function(pos){
                    msg = '緯度:' + pos.coords.latitude + '<br/>' +
                    '軽度:'+ pos.coords.longitude + '<br/>'+ 
                    '方角:' + pos.coords.heading; 
                    result.innerHTML= msg;
                    
                    c_point = new google.maps.LatLng(pos.coords.latitude, 
                    pos.coords.longitude);
                    
                    gmap = new google.maps.Map(result,{
                        zoom: 14,
                        center: c_point,
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    }
                                
                    );
                    if(sessionStorage){
                        sessionStorage.setItem('cpos_latitude', 
                        pos.coords.latitude);
                        sessionStorage.setItem('cpos_longitude',
                        pos.coords.longitude);
                    }
                },
                function(err){
                    var msgs = [
                        err.message,
                        'Geolocation の　利用が許可されていません。',
                        '位置情報を取得できません',
                        '位置情報の取得中にタイムアウトしました'
                    ];
                    result.innerHTML = msgs[err.code];
                },
                {
                    timeout: 5000,
                    maximumAge: 0,
                    enableHighAccuracy: true
           
                }
        );
        
    }else {
        alert('Geolocation API に対応しているブラウザでアクセスしてください');
    }
    showmemo();


},false);
