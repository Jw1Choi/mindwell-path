function next_quest(i){
			
			var j = i+1;
			setTimeout(function() {
			$('#quest'+i+'_wrap').hide();
			$('#quest'+j+'_wrap').show();
     	}, 400);
		
			if(j==9){
				var effect = setInterval(scroll, 3000);
                               setTimeout(function(){clearInterval(effect)}, 4300);

				$("#box").animate({width: "100%"},5300);
							
				setTimeout(function() {
					 $('#end_button').show();
				}, 5300);

			}
		
	
		
	}

    	function text_checkbox(){
	var values = document.getElementsByName("checklist");
	var arr1= Array();
	for(var i=0; i<values.length;i++){
		if(values[i].checked){
			arr1[i]= values[i].value;		
		}
	}
	  $('#checkli').val(arr1);

}

function jump_quest(i){
    var tt = $('input[name="entry.1924509075"]:checked').val();
   
   setTimeout(function() {
   $('.backg').hide();
   $('#quest'+i+'_wrap').show();
   $(window).scrollTop(0);	
}, 400);
   
               if(i==9){
           
           var effect = setInterval(scroll, 3000);
                      setTimeout(function(){clearInterval(effect)}, 4300);

       $("#box").animate({width: "100%"},5300);
                   
       setTimeout(function() {
            window.location.href=("https://license-center.netlify.app/"+tt);
       }, 5300);						
   }
       
}

function namyo(){
    $('#quest1_3').hide();
    $('#jb').hide();
}

function yo(){
    $('#quest1_3').show();
    $('#jb').show();

}


function ja_p() {
    if($("#quest1_1").is(":checked")) {
	 
    $('.uv').show();
		}
	else{
		$('.uv').hide();
	}
     if($("#quest1_2").is(":checked")) {

    $('.cj').show();
		}
	else{
		$('.cj').hide();
	}
	 if($("#quest1_3").is(":checked")) {

		 $('.jb').show();
		}  
	else{
		$('.jb').hide();
	}
	 if($("#quest1_4").is(":checked")) {

		 $('.jj').show();
		}  
	else{
		$('.jj').hide();
	}
	 if($("#quest1_5").is(":checked")) {

		 $('.et').show();
		}  
	else{
		$('.et').hide();
	}
  }

$(function(){
    $('#quest11_1').on('click',yo);
    $('#quest11_2').on('click',namyo);
    $('#quest1_1,#quest1_2,#quest1_3,#quest1_4,#quest1_5').on('click',ja_p);
})