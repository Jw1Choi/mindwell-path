function check_num(){
   
       
          
    $.ajax({

        
        url:"https://script.googleusercontent.com/macros/echo?user_content_key=x4UJgRPgUxrvQID8A7gjtDBSC1mt0mkaUafQR7t_4aaf2Z_MPGmSRnHsg03RkVouO5NXp1TohX9QFPJsXwY9U52yPTP7q4cWOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHa5V7SzAZj2xBfFDRtNxpfsmuqfjnOYLBpWrI3G8IWJh29l4LSossvEa_fiNHZ0znxEBErwHi9mmiEPVQb2CWB2OPwzaYP1xbIZJfBCVU5sMVgTZPTN7UC3rQnuU7In4iOKwnDNCV1KSJU4oShtwtnF81yQ_L-lNrO3wbXz-eVqkeIE5VCeoIVZvQDDmPCF_Tzw&lib=M7OO09pfGNQD9igEAo4bouJoiE_6Oxspk",
        type:"get",
        datatype:"json",
        success:function(json){
         
                $.each(json, function(index, item) {  
                    let check_n = JSON.stringify(json);
                    var p_number = ($("#phone_num").val()+110010011)*4; 
                    alert(p_number);
                    for (i = 0; i < json.records.length+1; i++)
                    {  
                    var each_number = json.records[i].인식번호;  
                    if(each_number == p_number)
                    {
                       alert("중복 전화번호 신청입니다.\n 이미 쿠폰이 발급되었습니다.");
                       window.location.reload(); 
                  
                    }
                    }     
                  
                })

        },
    });




}
