$(function () {
   
       
          
        $.ajax({
    
            
            url:"https://script.googleusercontent.com/macros/echo?user_content_key=x4UJgRPgUxrvQID8A7gjtDBSC1mt0mkaUafQR7t_4aaf2Z_MPGmSRnHsg03RkVouO5NXp1TohX9QFPJsXwY9U52yPTP7q4cWOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa5V7SzAZj2xBfFDRtNxpfsmuqfjnOYLBpWrI3G8IWJh29l4LSossvEa_fiNHZ0znxEBErwHi9mmiEPVQb2CWB2OPwzaYP1xbIZJfBCVU5sMVgTZPTN7UC3rQnuU7In4iOKwnDNCV1KSJU4oShtwtnF81yQ_L-lNrO3wbXz-eVqkeIE5VCeoIVZvQDDmPCF_Tzw&lib=M7OO09pfGNQD9igEAo4bouJoiE_6Oxspk",
            type:"get",
            datatype:"json",
            success:function(json){
             
                    $.each(json, function(index, item) {  
                        let str = JSON.stringify(json);
                       
                        //0 <= random <= 420
                        do{

                        const rd_num = Math.floor(Math.random() * json.records.length+1);
                        
                        var num = json.records[rd_num].쿠폰;
                        
                        }while(num =="");    
                   
                
                        var ss = $("#result").append(num);
                        var cpcp = $("#result").text();
                      
                       $("#coupon_input").attr("value", cpcp);   
                        
                    })

            },
        });
    

   

    })