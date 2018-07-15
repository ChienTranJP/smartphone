/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

/* global google */

window.addEventListener('DOMContentLoaded', function () {
    var w_id, gmap, c_point;
    var result = document.querySelector('#result');
    var stopwatch = document.querySelector('#stopwatch');
    
    stopwatch.addEventListener('click', function (e) {
        navigator.geolocation.clearWatch(w_id);
    }, false);
    
    if (navigator.geolocation){
        w_id = navigator.geolocation.watchPosition(
                function(pos){
                    msg = '緯度:' + pos.coords.latitude + '<br/>' +
                    '軽度:'+ pos.coords.longitude + '<br/>'+ 
                    '方角:' + pos.coords.heading; 
                    result.innerHTML= msg;
                    
                    c_point = new google.maps.LatLng(pos.coords.latitude, 
                    pos.coords.longtitude);
                    
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


},false);
