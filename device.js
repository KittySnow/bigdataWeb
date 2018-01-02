var fontSize;
(function(){function getClientWidth(){
    var cw=document.documentElement.clientWidth;;
    fontSize = cw/1920;
    document.documentElement.style.setProperty("font-size",cw/38.4+"px")}
    var Timer=null;window.addEventListener("resize",function(){clearTimeout(Timer),Timer=setTimeout(getClientWidth,300)},false);getClientWidth()})(window);

