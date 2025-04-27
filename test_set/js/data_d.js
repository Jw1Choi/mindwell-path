$(function () {
    if(!localStorage.getItem('coupon'))
                {  
                   
        $.ajax({
    
            
            url:"https://script.googleusercontent.com/macros/echo?user_content_key=WUHjzYjRp8DNkV0-_9JUitjyirusA2_wmOE_ujT-wplSei0Nd4B1CDxpsXWxIX_9qpalwquhkroxmDxKLYu8uPfiEUY-ZzXaOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa5V7SzAZj2xBfFDRtNxpfsmuqfjnOYLBpWrI3G8IWJh29l4LSossvEa_fiNHZ0znxEBErwHi9mmiEPVQb2CWB2OPwzaYP1xbIZJfBCVU5sMVgTZPTN7UC3rQnuU7In4iOKwnDNCV1KSJU4oShtwtnF81yQ_L-lNrO3wbXz-eVqkeIE5VCeoIVZvQDDmPCF_Tzw&lib=M7OO09pfGNQD9igEAo4bouJoiE_6Oxspk",
            type:"get",
            datatype:"json",
            success:function(json){
             
              
                    $.each(json, function(index, item) {  
                        let str = JSON.stringify(json);
                        const num = json.records[0].쿠폰번호;
                    
               
                        /*setTimeout(function(){*/
                        $("#demo"+[1]).text("2만원 네이버 할인 쿠폰");
                        $("#demo"+[0]).text("");
                        $("#demo"+[0]).append(json.records[0].쿠폰번호);  
                        var coupon =$("#demo0").text(); 
                        localStorage.setItem("coupon", JSON.stringify(coupon));       
                        /*},1000);*/    
                        
                 

                   
                        
                    })

            },
        });
    
    } 
   

    })