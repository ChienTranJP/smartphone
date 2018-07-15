/* 
 * ChienTranJP © Sundai Denshi
 * Project powered by html5 css and javascripts
 */
//page 141
var h = function(str){
    if (str !== null){
        str = str.toString();
        str = str.replace(/&/g, '&amp;');
        str = str.replace(/</g, '&lt;');
        str = str.replace(/>/g, '&gt;');
        
    }else{
        str='';
    }
    return str;
};

var printf = function(format){
    for (var i =1; i < arguments.length; i++){
        var pattern = new RegExp('\\{'+(i-1)+'\\}', 'g');
        format = format.replace(pattern, h(arguments[i]));
    }
    return format;
};
