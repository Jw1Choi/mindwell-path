$(document).ready(function(){

    // function hasSubmitted() {
    //     return document.cookie.includes("submitted=true");
    // }

    // Check if user has already submitted upon page load
    // if (hasSubmitted()) {
    //     alert("이벤트 참여 이력이 있습니다.\n 15일 이후에 이벤트 신청해주세요.\n 감사합니다.");
    //     $("#fm-box").hide();

        // 이미 참여한 사용자에 대한 처리 (예: 다른 메시지, 리디렉션 등)
        // 예: window.location.href = './already_participated.html';
    // }

    $('#3send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        var position = $('#3position').val();
        var id = $('#3id-number').val();
        var name = $('#3name').val();
        var email = $('#3email').val();
        var phone = $('#3phone').val();
        var message = $('#3message').val();
        var selectedOption = $('#3selectedOption').val();
        var selectedOption1 = $('#3selectedOption1').val();
        var option = $('[name="option"]').val();
        var option1 = $('[name="option1"]').val();
   
        var agree = $('#3agree11').is(":checked");
        
        
        $('#3name,#phone,#problem1,#agree11,#position,#email, #selectedOption, #selectedOption1').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
        //  if(!regex1.test(name) || name.length<0 ){
        //     var error = true;
        //     $('#3name').addClass("error_input");
        //    alert("이름 입력을 확인하세요.");
        // }else{
        //     $('#3name').removeClass("error_input");
        // }

        // if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
        //     $('#3phone').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#3phone').addClass("error_input");
        //     alert("휴대폰 번호 입력을 확인하세요.");
        // }

        // if(id>=24 && id<=55 && regex.test(id) ){
            
        //     $('#3id-number').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#3id-number').addClass("error_input");
        //     alert("24 ~ 55세까지 신청가능합니다.");
        // }

        // if(position == null ){
        //     var error = true;
        //     $('#3position').addClass("error_input");
        //    alert("통화 가능 시간을 선택해주세요.");
        // }else{
        //     $('#3position').removeClass("error_input");
        // }

     


        if (agree == false){
            var error = true;
            $('#3agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#3agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#3form_e11').prop("action", "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfj3nf7V2Qk99ggWaPL23jhxAlWsykioa6cUnHNR-w5GTnPkA/formResponse");
           $('#3send_message').attr({'disabled' : 'true', 'value' : '잠시만 기다려주세요.' });
           
$('#3send_message').css({
    transition: "1s",
    background: "#222222",
    color: "#fff"
  });
  
  // 2초 후 → 텍스트 변경
  setTimeout(function () {
    $('#3send_message').val("3초 후 구매 안내 페이지로 이동합니다.");
  }, 800);

        //    setSubmittedCookie();
     $('#3send_message').prop("disabled", false);
    $('#3send_message').css({transition:"1s"});
    $('#3send_message').css({background:"#222222"});
    $('#3send_message').css({color:"#fff"});
    // $('[name="fm"]').submit();
    $('#3hidden_iframe11').attr("onload", "hoa3();");
    // $('#3hidden_iframe12').attr("onload", "hoa();");
   
        }
    });    

 

    // Function to set a cookie to indicate submission (expires in 15 days)
    // function setSubmittedCookie() {
    //     var expiryDate = new Date();
    //     expiryDate.setDate(expiryDate.getDate() + 15); // Set expiry for 15 days from now
    //     document.cookie = "submitted=true; expires=" + expiryDate.toUTCString() + "; path=/";
    // }

    // Check if user has already submitted upon page load
    // if (hasSubmitted()) {
    //     alert("이미 참여하신 이력이 있습니다.");
    // }
   

});


function dll(){
    // var f = document.fm;
    // f.submit();
    // $('[name="fm"],[name="fm1"]').submit();

}
 
function maxLengthCheck(object){
  if (object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength);
  }    
}
 
 function hoa3(){
    setTimeout( function(){
        alert("참여 신청 감사합니다. 결제 안내 페이지로 이동합니다.\n\n마음건강 길");
        // $(window).scrollTop(0);
        // window.location.reload();
        // window.location.href='https://event-us.kr/mindgil21/event/103555';
        window.location.assign('https://event-us.kr/mindgil21/event/106043');
       },1200);

 }
 
 function site1111(){
  //$('#3mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form3_check(){

    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^[가-힣]+$/;
    const regex3 = /^[가-힣|0-9|]+$/;
    const regex = /^[|0-9|]+$/;
    var problem1 = $('#3problem1').val();
    var problem2 = $('#3problem2').val();
    var problem3 = $('#3problem3').val();
    var hope1 = $('#3hope1').val();
    var hope2 = $('#3hope2').val();
    var hope3 = $('#3hope3').val();
    var question3 = $('#3question3').val();
    var question4 = $('#3question4').val();
    // var license = $('#3license').val();
    // var id = $('#3id-number').val();
    var name = $('#3name').val();
    var age = $('#3age').val();
    var dropdown = $('#3dropdown').val();
    var radioChecked = $('input[name="radio1"]:checked').val();
    var email = $('#3email').val();
    var ph = $('#3phone').val();
    // var message = $('#3message').val();
    var agree = $('#3agree11').is(":checked");
    var selectedOption = $('#3selectedOption').val();
    var selectedOption1 = $('#3selectedOption1').val();
    var option = $('[name="option"]').val();
    var option1 = $('[name="option1"]').val();

   



    // if (option.length > 1 /*&& regex3.test(problem1)*/)
    // {
        // if (problem2.length > 1 /*&& regex3.test(problem2)*/)
        // {

                // if (problem3.length > 1 /*&& regex3.test(problem3)*/)
                //     {
                            //  if (option1.length > 1 /*&& regex3.test(hope1)*/)
                            // {
                                // if (hope2.length > 1 /*&& regex3.test(hope2)*/)
                                //     {
                        
                                //         if (hope3.length > 1 /*&& regex3.test(hope3)*/)
                                //             {
                                                
                                                // if (question3.length > 1 /*&& regex3.test(question3)*/)
                                                //     {
                                                        
                                                  
                                                        // if (question4.length > 1 /*&& regex3.test(question4)*/)
                                                        //     {

                                                  
                                                                if( name.length > 1 )
                                                                {

                                                                    if( regex.test(age) && age.length == 2 && age >=20 && age <99 )
                                                                    {
                                                                            
                                                                        if( $('.gender-radio:checked').length > 0 )
                                                                        {
                                                                         
                                                                                        //  if(email.match(regExp) != null)
                                                                                        // {

                                                                
                                                                                                if(ph.substr(0, 3) == "010" && ph.length ==11 && regex.test(ph))
                                                                                                {
                                                                                                
                                                                                                            // if(regex.test(id) && id.length == 2 && id >=23 && id <56)
                                                                                                            // {
                                                                                                            
                                                                                                            //             if( position != null )
                                                                                                            //             {
                                                                                                                    
                                                                                                                                    if (agree == true)
                                                                                                                                    {
                                                                                                                                        $('#3send_message').css({transition:"1s"});
                                                                                                                                    $('#3send_message').prop("disabled", false);
                                                                                                                                    $('#3send_message').prop("value", "컨퍼런스 신청하기");
                                                                                                                                    $('#3send_message').css({background:"#0e3b64"});
                                                                                                                                    $('#3send_message').css({cursor:"pointer"});
                                                                                                                                    }
                                                                                                                                    else
                                                                                                                                    {
                                                                                                                                        $('#3send_message').css({transition:"1s"});
                                                                                                                                        $('#3send_message').prop("disabled", true);
                                                                                                                                        $('#3send_message').prop("value", "개인정보 동의를 해주세요");
                                                                                                                                        $('#3send_message').css({background:"#595959"});
                                                                                                                                        $('#3send_message').css({cursor:"default"});     
                                                                                                                                    }
                                                                                                                                    
                                                                                                            //                     }
                                                                                                            //                     else
                                                                                                            //                     {
                                                                                                            //                         $('#3send_message').css({transition:"1s"});
                                                                                                            //                         $('#3send_message').prop("disabled", true);
                                                                                                            //                         $('#3send_message').prop("value", "통화 시간을 선택하세요.");
                                                                                                            //                         $('#3send_message').css({background:"#595959"});
                                                                                                            //                         $('#3send_message').css({cursor:"default"});     
                                                                                                            //                     }
                                                                                                
                                                                                                        // }
                                                                                                        // else if(id.length==0)
                                                                                                        // {
                                                                                                        // $('#3send_message').css({transition:"1s"});
                                                                                                        // $('#3send_message').prop("disabled", true);
                                                                                                        // $('#3send_message').prop("value", "나이를 입력하세요.");
                                                                                                        // $('#3send_message').css({background:"#595959"});
                                                                                                        // $('#3send_message').css({cursor:"default"});     
                                                                                                        // }
                                                                                                        // else 
                                                                                                        // {
                                                                                                        // $('#3send_message').css({transition:"1s"});
                                                                                                        // $('#3send_message').prop("disabled", true);
                                                                                                        // $('#3send_message').prop("value", "23 ~ 55세까지 가능합니다.");
                                                                                                        // $('#3send_message').css({background:"#595959"});
                                                                                                        // $('#3send_message').css({cursor:"default"});     
                                                                                                        // }
                                                                                        // }
                                                                                        // else if(email.length>0)
                                                                                        // {
                                                                                        //     $('#3send_message').css({transition:"1s"});
                                                                                        //     $('#3send_message').prop("disabled", true);
                                                                                        //     $('#3send_message').prop("value", "이메일 주소 입력을 확인하세요.");
                                                                                        //     $('#3send_message').css({background:"#595959"});
                                                                                        //     $('#3send_message').css({cursor:"default"});     
                                                                                        // }
                                                                                        // else
                                                                                        // {
                                                                                        //     $('#3send_message').css({transition:"1s"});
                                                                                        //     $('#3send_message').prop("disabled", true);
                                                                                        //     $('#3send_message').prop("value", "이메일을 입력하세요.");
                                                                                        //     $('#3send_message').css({background:"#595959"});
                                                                                        //     $('#3send_message').css({cursor:"default"});     
                                                                                        // }
                                                                                                }
                                                                                                else if(ph.length>0)
                                                                                                {
                                                                                                    $('#3send_message').css({transition:"1s"});
                                                                                                    $('#3send_message').prop("disabled", true);
                                                                                                    $('#3send_message').prop("value", "전화번호 입력을 확인하세요.");
                                                                                                    $('#3send_message').css({background:"#595959"});
                                                                                                    $('#3send_message').css({cursor:"default"});     
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    $('#3send_message').css({transition:"1s"});
                                                                                                    $('#3send_message').prop("disabled", true);
                                                                                                    $('#3send_message').prop("value", "전화번호를 입력하세요.");
                                                                                                    $('#3send_message').css({background:"#595959"});
                                                                                                    $('#3send_message').css({cursor:"default"});     
                                                                                                }

                                                                                      
                                                                        }
                                                                        else
                                                                        {
                                                                            $('#3send_message').css({transition:"1s"});
                                                                            $('#3send_message').prop("disabled", true);
                                                                            $('#3send_message').prop("value", "성별을 선택하세요.");
                                                                            $('#3send_message').css({background:"#595959"});
                                                                            $('#3send_message').css({cursor:"default"});     
                                                                        }

                                                                    }
                                                                    else if(age.length>0)
                                                                    {
                                                                        $('#3send_message').css({transition:"1s"});
                                                                        $('#3send_message').prop("disabled", true);
                                                                        $('#3send_message').prop("value", "나이 입력을 확인하세요.");
                                                                        $('#3send_message').css({background:"#595959"});
                                                                        $('#3send_message').css({cursor:"default"});     
                                                                    }
                                                                    else
                                                                    {
                                                                        $('#3send_message').css({transition:"1s"});
                                                                        $('#3send_message').prop("disabled", true);
                                                                        $('#3send_message').prop("value", "나이를 입력하세요.");
                                                                        $('#3send_message').css({background:"#595959"});
                                                                        $('#3send_message').css({cursor:"default"});     
                                                                    }
                                
                                                            }
                                                            else if(name.length>0)
                                                            {
                                                                $('#3send_message').css({transition:"1s"});
                                                                $('#3send_message').prop("disabled", true);
                                                                $('#3send_message').prop("value", "성함 입력을 확인하세요.");
                                                                $('#3send_message').css({background:"#595959"});
                                                                $('#3send_message').css({cursor:"default"});     
                                                            }
                                                            else
                                                            {
                                                                $('#3send_message').css({transition:"1s"});
                                                                $('#3send_message').prop("disabled", true);
                                                                $('#3send_message').prop("value", "성함을 입력하세요.");
                                                                $('#3send_message').css({background:"#595959"});
                                                                $('#3send_message').css({cursor:"default"});     
                                                            }
                                                        }


                                                        // }
                                                        // else
                                                        // {
                                                        //     $('#3send_message').css({transition:"1s"});
                                                        //     $('#3send_message').prop("disabled", true);
                                                        //     $('#3send_message').prop("value", "4번 문항 입력을 확인하세요.");
                                                        //     $('#3send_message').css({background:"#595959"});
                                                        //     $('#3send_message').css({cursor:"default"});        
                                                        // }
                                    
                                                    // }
                                                    // else
                                                    // {
                                                    //     $('#3send_message').css({transition:"1s"});
                                                    //     $('#3send_message').prop("disabled", true);
                                                    //     $('#3send_message').prop("value", "강의 내용 입력을 확인하세요.");
                                                    //     $('#3send_message').css({background:"#595959"});
                                                    //     $('#3send_message').css({cursor:"default"});        
                                                    // }
                                        //         }
                                        //         else
                                        //         {
                                        //             $('#3send_message').css({transition:"1s"});
                                        //             $('#3send_message').prop("disabled", true);
                                        //             $('#3send_message').prop("value", "3순위 소망 입력을 확인하세요.");
                                        //             $('#3send_message').css({background:"#595959"});
                                        //             $('#3send_message').css({cursor:"default"});        
                                        //         }
                            
                                        // }
                                        // else
                                        // {
                                        //     $('#3send_message').css({transition:"1s"});
                                        //     $('#3send_message').prop("disabled", true);
                                        //     $('#3send_message').prop("value", "2순위 소망 입력을 확인하세요.");
                                        //     $('#3send_message').css({background:"#595959"});
                                        //     $('#3send_message').css({cursor:"default"});        
                                        // }
                                // }
                                // else
                                // {
                                //     $('#3send_message').css({transition:"1s"});
                                //     $('#3send_message').prop("disabled", true);
                                //     $('#3send_message').prop("value", "소망 선택을 확인하세요.");
                                //     $('#3send_message').css({background:"#595959"});
                                //     $('#3send_message').css({cursor:"default"});        
                                // }                               

                    // }
                    // else
                    // {
                    //     $('#3send_message').css({transition:"1s"});
                    //     $('#3send_message').prop("disabled", true);
                    //     $('#3send_message').prop("value", "3순위 고민 입력을 확인하세요.");
                    //     $('#3send_message').css({background:"#595959"});
                    //     $('#3send_message').css({cursor:"default"});        
                    // }

        // }
        // else
        // {
        //     $('#3send_message').css({transition:"1s"});
        //     $('#3send_message').prop("disabled", true);
        //     $('#3send_message').prop("value", "2순위 고민 입력을 확인하세요.");
        //     $('#3send_message').css({background:"#595959"});
        //     $('#3send_message').css({cursor:"default"});        
        // }
//     }
//     else
//     {
//         $('#3send_message').css({transition:"1s"});
//         $('#3send_message').prop("disabled", true);
//         $('#3send_message').prop("value", "고민 선택을 확인하세요.");
//         $('#3send_message').css({background:"#595959"});
//         $('#3send_message').css({cursor:"default"});        
//     }
//  }
  
//  function lic_pick(){
//     var lic = $('#3license').val();
    
//     if(lic === "손해평가사")
//         {
//         $('#3form1').attr("name", "fm");
//         // alert($('#3form1').attr("name"));
//         }
//         else
//         {
//         $('#3form1').attr("name", "");
//         }

//     if(lic === "도로교통사고감정사")
//     {
//         $('#3form2').attr("name", "fm");
//         // alert($('#3form1').attr("name"));
//         }
//         else
//         {
//         $('#3form2').attr("name", "");
//         }
//     if(lic === "농산물품질관리사")
//     {
//         $('#3form3').attr("name", "fm");
//         // alert($('#3form1').attr("name"));
//         }
//         else
//         {
//         $('#3form3').attr("name", "");
//         }
//     if(lic === "반려견스타일리스트")
//         {
//         $('#3form4').attr("name", "fm");
//         // alert($('#3form1').attr("name"));
//         }
//         else
//         {
//         $('#3form4').attr("name", "");
//         }
//     if(lic === "맞춤형화장품제조관리사")
//     {
//         $('#3form5').attr("name", "fm");
//         // alert($('#3form5').attr("name"));
//         }
//         else
//         {
//         $('#3form5').attr("name", "");
//     }

// }

    // function form_check1(){
    //     var name =$('#3name').val();
    //     var id = $('#3id-number').val();
    //     var ph =$('#3phone').val();
    //     var time = $('#3position').val();
    //     var message = $('#3message').val();
    
    //     $('[name="user_name"]').val(name);
    //     $('[name="나이"]').val(id);
    
    //     $('[name="휴대폰번호1"]').val('010');
    //      $('[name="휴대폰번호2"]').val(ph.substr(3,4));
    //      $('[name="휴대폰번호3"]').val(ph.substr(7,4));
    //      $('[name="통화가능시간"]').val(time);
    //      $('[name="상담가능시간"]').val(time); 
    //      $('[name="문의사항"]').val(message);
    //     }




$(function(){
 $('#3name,#3phone,#problem1,#problem2,#problem3,#hope1,#hope2,#hope3,#3agree11,#3question3,#3question4,#3age, #3dropdown, #3email, #ph, #3selectedOption, #3selectedOption1, .option, .option1, .gender-radio').bind("keyup click change",form3_check);
 $('#3name,#3phone,#problem1,#problem2,#problem3,#hope1,#hope2,#hope3,#3agree11,#3question3,#3question4,#3age, #3dropdown, #3email, #3selectedOption, #3selectedOption1, .option, .option1, .gender-radio').bind("keyup click change",form_check1);
//  $('#3license').bind("keyup click change",lic_pick);
})
