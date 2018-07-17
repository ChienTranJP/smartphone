/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */

window.addEventListener('DOMContentLoaded', function () {
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');
    var submit = document.querySelector('#submit');
    var reset = document.querySelector('#reset');
    var goback = document.querySelector('#goback');

       
    goback.addEventListener('click', function () {
        if (username !== null || password !== null){
            location.href = "index.html";
        }else{
            r = confirm('goback');
            if(r){
                location.href = "index.html";      
            }
        }
    }, false);
	
	submit.addEventListener('click',function (e) {
		e.preventDefault();
		if(username.validity.valid === false){
			alert('出席番号は大文字英字１文字と数字３文字');
		}

		if(password.validity.valid === false){
			alert('パスワードは6文字以上、半角英数字で入力してください。\n 文字と数字が必要です');
		}
	},false);
    
},false);

