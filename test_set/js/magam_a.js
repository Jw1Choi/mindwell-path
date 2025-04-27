 $(function (){
      
      function check_for(){
        var tl= $('.total').length+1;
        for(i=1;i<tl;i++)
        { 
         if( $("#demo"+[i]).text() == "남은 인원 : 마감")
         {
            
            $("#quest10_"+[i]).prop("disabled", true);
           $("#l_quest10_"+[i]).removeClass("label_button").addClass("end_h");
           $("#ch"+[i]).text("오늘 마감");
           $("#demo"+[i]).css({display:"none"});
         }
          else
          {
               $("#quest10_"+[i]).prop("disabled", false);
            $("#demo"+[i]).css({display:"inline"});
            $("#ch"+[i]).text("선택하기");
            $("#l_quest10_"+[i]).removeClass("end_h").addClass("label_button");
          }
        }
        }
   setInterval(check_for,1000);
  
    })