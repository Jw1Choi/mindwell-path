	function checkdll(){
    var filter = "win16|win32|win64|macintel|mac|"; 
if(navigator.platform){
	if( filter.indexOf(navigator.platform.toLowerCase())<0 ) { 
		
	}
	else{
		alert("PC 접속은 불가능합니다.");
		back();
 
	}
	
		}
        }


function back(){
		window.history.back();
        window.close();
	}

        	$(function(){
                checkdll();
            })