var omitformtags=["input", "textarea", "select"]
omitformtags=omitformtags.join("|")
 function disableselect(e){
  if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
   return false
}

function reEnable(){
 return true
}

if (typeof document.onselectstart!="undefined")
 document.onselectstart=new Function ("return false")

else{
 document.onmousedown=disableselect
 document.onmouseup=reEnable

}
document.oncontextmenu = function() {return false;};
document.onselectstart = function() {return false;};
document.ondragstart = function() {return false;};

document.oncontextmenu = function(){return false;}
$(document).bind('keydown', function(e) {
if(e.ctrlKey && (e.which == 83)) {
e.preventDefault();
return false;
}
});
$(window).keypress(function (event) {
if (!(event.which == 115 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) && !(event.which == 19)) return true;
event.preventDefault();
return false;
});

$(document).keydown(function (event) {
 if (event.which == 83 && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) {
    event.preventDefault();
    save(event);
    return false;
 }
});
$(document).ready(function(){
    $(document).bind('keydown',function(e){
        if ( e.keyCode == 123 ) {
            e.preventDefault();
            e.returnValue = false;
        }
    });
});