/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

window.addEventListener('DOMContentLoaded', function () {
    var result = document.querySelector('#result');
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
                function(pos){
                    msg = '緯度:' + pos.coords.latitude + '<br/>' +
                    '軽度:'+ pos.coords.longitude + '<br/>'+ 
                    '方角:' + pos.coords.heading; 
                    result.innerHTML= msg;
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
