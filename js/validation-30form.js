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

    $('#1send_message').click(function(){
        
          //Stop form submission & check the validation
        // e.preventDefault();
        
        // Variable declaration
        var error = false;
        const regex1 = /^[|가-힣a-zA-Z\s+]+$/;
        const regex = /^[|0-9|]+$/;
        var position = $('#1position').val();
        var id = $('#1id-number').val();
        var name = $('#1name').val();
        var email = $('#1email').val();
        var phone = $('#1phone').val();
        var message = $('#1message').val();
        var selectedOption = $('#1selectedOption').val();
        var selectedOption1 = $('#1selectedOption1').val();
        var option = $('[name="option"]').val();
        var option1 = $('[name="option1"]').val();
   
        var agree = $('#1agree11').is(":checked");
        
        
        $('#1name,#1phone,#1problem1,#1agree11,#1position,#1email, #1selectedOption, #1selectedOption1').click(function(){
            $(this).removeClass("error_input");
        });
        


         // Form field validation
        //  if(!regex1.test(name) || name.length<0 ){
        //     var error = true;
        //     $('#1name').addClass("error_input");
        //    alert("이름 입력을 확인하세요.");
        // }else{
        //     $('#1name').removeClass("error_input");
        // }

        // if(phone.substr(0, 3) == "010" && phone.length ==11 && regex.test(phone) ){
            
        //     $('#1phone').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#1phone').addClass("error_input");
        //     alert("휴대폰 번호 입력을 확인하세요.");
        // }

        // if(id>=24 && id<=55 && regex.test(id) ){
            
        //     $('#1id-number').removeClass("error_input");
        // }else{
        //     var error = true;
        //     $('#1id-number').addClass("error_input");
        //     alert("24 ~ 55세까지 신청가능합니다.");
        // }

        // if(position == null ){
        //     var error = true;
        //     $('#1position').addClass("error_input");
        //    alert("통화 가능 시간을 선택해주세요.");
        // }else{
        //     $('#1position').removeClass("error_input");
        // }

     


        if (agree == false){
            var error = true;
            $('#1agree11').addClass("error_input");
            alert("개인정보동의를 체크해주세요.");
        }else{
            $('#1agree11').removeClass("error_input");
        }
        
        
        // If there is no validation error, next to process the mail function
        if(error == false){
           // Disable submit button just after the form processed 1st time successfully.
          
           $('#1form_e11').prop("action", "  https://docs.google.com/forms/u/0/d/e/1FAIpQLScv5_-nTW1kY-e6Ukx3XB9jCjMqMy0t1fN0IuzeYH4FiAn-KQ/formResponse");
           $('#1send_message').attr({'disabled' : 'true', 'value' : '잠시만 기다려주세요.' });
           
$('#1send_message').css({
    transition: "1s",
    background: "#222222",
    color: "#fff"
  });
  
  // 2초 후 → 텍스트 변경
  setTimeout(function () {
    $('#1send_message').val("전송 중입니다.");
  }, 800);

        //    setSubmittedCookie();
     $('#1send_message').prop("disabled", false);
    $('#1send_message').css({transition:"1s"});
    $('#1send_message').css({background:"#222222"});
    $('#1send_message').css({color:"#fff"});
    // $('[name="fm"]').submit();
    $('#1hidden_iframe11').attr("onload", "hoa1();");
    // $('#1hidden_iframe12').attr("onload", "hoa();");
   
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
 
 function hoa1(){
    setTimeout( function(){
        alert("신청 감사합니다. 행사 소식 및 다양한 혜택 전해드리겠습니다.\n\n마음건강 길");
        $(window).scrollTop(0);
        window.location.reload();
        // window.location.href='https://event-us.kr/mindgil21/event/103555';
        // window.location.assign('https://event-us.kr/mindgil21/event/103555');
       },1200);

 }
 
 function site1111(){
  //$('#1mc-embedded-subscribe').click();
  

  window.location.reload();
 }


 function form1_check(){

    var regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regex2 = /^[가-힣]+$/;
    const regex3 = /^[가-힣|0-9|]+$/;
    const regex = /^[|0-9|]+$/;
    var problem1 = $('#1problem1').val();
    var problem2 = $('#1problem2').val();
    var problem3 = $('#1problem3').val();
    var hope1 = $('#1hope1').val();
    var hope2 = $('#1hope2').val();
    var hope3 = $('#1hope3').val();
    var question = $('#1question').val();
    var question4 = $('#1question4').val();
    // var license = $('#1license').val();
    // var id = $('#1id-number').val();
    var name = $('#1name').val();
    var age = $('#1age').val();
    var dropdown = $('#1dropdown').val();
    var radioChecked = $('input[name="radio1"]:checked').val();
    var email = $('#1email').val();
    var ph = $('#1phone').val();
    // var message = $('#1message').val();
    var agree = $('#1agree11').is(":checked");
    var selectedOption = $('#1selectedOption').val();
    var selectedOption1 = $('#1selectedOption1').val();
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

                                                                    // if( regex.test(age) && age.length == 2 && age >=20 && age <99 )
                                                                    // {
                                                                            
                                                                        // if( $('.gender-radio:checked').length > 0 )
                                                                        // {
                                                                         
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
                                                                                                                                        $('#1send_message').css({transition:"1s"});
                                                                                                                                    $('#1send_message').prop("disabled", false);
                                                                                                                                    $('#1send_message').prop("value", "소식, 혜택 받기");
                                                                                                                                    $('#1send_message').css({background:"#0e3b64"});
                                                                                                                                    $('#1send_message').css({cursor:"pointer"});
                                                                                                                                    }
                                                                                                                                    else
                                                                                                                                    {
                                                                                                                                        $('#1send_message').css({transition:"1s"});
                                                                                                                                        $('#1send_message').prop("disabled", true);
                                                                                                                                        $('#1send_message').prop("value", "개인정보 동의를 해주세요");
                                                                                                                                        $('#1send_message').css({background:"#595959"});
                                                                                                                                        $('#1send_message').css({cursor:"default"});     
                                                                                                                                    }
                                                                                                                                    
                                                                                                            //                     }
                                                                                                            //                     else
                                                                                                            //                     {
                                                                                                            //                         $('#1send_message').css({transition:"1s"});
                                                                                                            //                         $('#1send_message').prop("disabled", true);
                                                                                                            //                         $('#1send_message').prop("value", "통화 시간을 선택하세요.");
                                                                                                            //                         $('#1send_message').css({background:"#595959"});
                                                                                                            //                         $('#1send_message').css({cursor:"default"});     
                                                                                                            //                     }
                                                                                                
                                                                                                        // }
                                                                                                        // else if(id.length==0)
                                                                                                        // {
                                                                                                        // $('#1send_message').css({transition:"1s"});
                                                                                                        // $('#1send_message').prop("disabled", true);
                                                                                                        // $('#1send_message').prop("value", "나이를 입력하세요.");
                                                                                                        // $('#1send_message').css({background:"#595959"});
                                                                                                        // $('#1send_message').css({cursor:"default"});     
                                                                                                        // }
                                                                                                        // else 
                                                                                                        // {
                                                                                                        // $('#1send_message').css({transition:"1s"});
                                                                                                        // $('#1send_message').prop("disabled", true);
                                                                                                        // $('#1send_message').prop("value", "23 ~ 55세까지 가능합니다.");
                                                                                                        // $('#1send_message').css({background:"#595959"});
                                                                                                        // $('#1send_message').css({cursor:"default"});     
                                                                                                        // }
                                                                                        // }
                                                                                        // else if(email.length>0)
                                                                                        // {
                                                                                        //     $('#1send_message').css({transition:"1s"});
                                                                                        //     $('#1send_message').prop("disabled", true);
                                                                                        //     $('#1send_message').prop("value", "이메일 주소 입력을 확인하세요.");
                                                                                        //     $('#1send_message').css({background:"#595959"});
                                                                                        //     $('#1send_message').css({cursor:"default"});     
                                                                                        // }
                                                                                        // else
                                                                                        // {
                                                                                        //     $('#1send_message').css({transition:"1s"});
                                                                                        //     $('#1send_message').prop("disabled", true);
                                                                                        //     $('#1send_message').prop("value", "이메일을 입력하세요.");
                                                                                        //     $('#1send_message').css({background:"#595959"});
                                                                                        //     $('#1send_message').css({cursor:"default"});     
                                                                                        // }
                                                                                                }
                                                                                                else if(ph.length>0)
                                                                                                {
                                                                                                    $('#1send_message').css({transition:"1s"});
                                                                                                    $('#1send_message').prop("disabled", true);
                                                                                                    $('#1send_message').prop("value", "전화번호 입력을 확인하세요.");
                                                                                                    $('#1send_message').css({background:"#595959"});
                                                                                                    $('#1send_message').css({cursor:"default"});     
                                                                                                }
                                                                                                else
                                                                                                {
                                                                                                    $('#1send_message').css({transition:"1s"});
                                                                                                    $('#1send_message').prop("disabled", true);
                                                                                                    $('#1send_message').prop("value", "전화번호를 입력하세요.");
                                                                                                    $('#1send_message').css({background:"#595959"});
                                                                                                    $('#1send_message').css({cursor:"default"});     
                                                                                                }

                                                                                      
                                                                    //     }
                                                                    //     else
                                                                    //     {
                                                                    //         $('#1send_message').css({transition:"1s"});
                                                                    //         $('#1send_message').prop("disabled", true);
                                                                    //         $('#1send_message').prop("value", "성별을 선택하세요.");
                                                                    //         $('#1send_message').css({background:"#595959"});
                                                                    //         $('#1send_message').css({cursor:"default"});     
                                                                    //     }

                                                                    // }
                                                                    // else if(age.length>0)
                                                                    // {
                                                                    //     $('#1send_message').css({transition:"1s"});
                                                                    //     $('#1send_message').prop("disabled", true);
                                                                    //     $('#1send_message').prop("value", "나이 입력을 확인하세요.");
                                                                    //     $('#1send_message').css({background:"#595959"});
                                                                    //     $('#1send_message').css({cursor:"default"});     
                                                                    // }
                                                                    // else
                                                                    // {
                                                                    //     $('#1send_message').css({transition:"1s"});
                                                                    //     $('#1send_message').prop("disabled", true);
                                                                    //     $('#1send_message').prop("value", "나이를 입력하세요.");
                                                                    //     $('#1send_message').css({background:"#595959"});
                                                                    //     $('#1send_message').css({cursor:"default"});     
                                                                    // }
                                
                                                            }
                                                            else if(name.length>0)
                                                            {
                                                                $('#1send_message').css({transition:"1s"});
                                                                $('#1send_message').prop("disabled", true);
                                                                $('#1send_message').prop("value", "성함 입력을 확인하세요.");
                                                                $('#1send_message').css({background:"#595959"});
                                                                $('#1send_message').css({cursor:"default"});     
                                                            }
                                                            else
                                                            {
                                                                $('#1send_message').css({transition:"1s"});
                                                                $('#1send_message').prop("disabled", true);
                                                                $('#1send_message').prop("value", "성함을 입력하세요.");
                                                                $('#1send_message').css({background:"#595959"});
                                                                $('#1send_message').css({cursor:"default"});     
                                                            }
                                                        }


                                                        // }
                                                        // else
                                                        // {
                                                        //     $('#1send_message').css({transition:"1s"});
                                                        //     $('#1send_message').prop("disabled", true);
                                                        //     $('#1send_message').prop("value", "4번 문항 입력을 확인하세요.");
                                                        //     $('#1send_message').css({background:"#595959"});
                                                        //     $('#1send_message').css({cursor:"default"});        
                                                        // }
                                    
                                                    // }
                                                    // else
                                                    // {
                                                    //     $('#1send_message').css({transition:"1s"});
                                                    //     $('#1send_message').prop("disabled", true);
                                                    //     $('#1send_message').prop("value", "강의 내용 입력을 확인하세요.");
                                                    //     $('#1send_message').css({background:"#595959"});
                                                    //     $('#1send_message').css({cursor:"default"});        
                                                    // }
                                        //         }
                                        //         else
                                        //         {
                                        //             $('#1send_message').css({transition:"1s"});
                                        //             $('#1send_message').prop("disabled", true);
                                        //             $('#1send_message').prop("value", "3순위 소망 입력을 확인하세요.");
                                        //             $('#1send_message').css({background:"#595959"});
                                        //             $('#1send_message').css({cursor:"default"});        
                                        //         }
                            
                                        // }
                                        // else
                                        // {
                                        //     $('#1send_message').css({transition:"1s"});
                                        //     $('#1send_message').prop("disabled", true);
                                        //     $('#1send_message').prop("value", "2순위 소망 입력을 확인하세요.");
                                        //     $('#1send_message').css({background:"#595959"});
                                        //     $('#1send_message').css({cursor:"default"});        
                                        // }
                                // }
                                // else
                                // {
                                //     $('#1send_message').css({transition:"1s"});
                                //     $('#1send_message').prop("disabled", true);
                                //     $('#1send_message').prop("value", "소망 선택을 확인하세요.");
                                //     $('#1send_message').css({background:"#595959"});
                                //     $('#1send_message').css({cursor:"default"});        
                                // }                               

                    // }
                    // else
                    // {
                    //     $('#1send_message').css({transition:"1s"});
                    //     $('#1send_message').prop("disabled", true);
                    //     $('#1send_message').prop("value", "3순위 고민 입력을 확인하세요.");
                    //     $('#1send_message').css({background:"#595959"});
                    //     $('#1send_message').css({cursor:"default"});        
                    // }

        // }
        // else
        // {
        //     $('#1send_message').css({transition:"1s"});
        //     $('#1send_message').prop("disabled", true);
        //     $('#1send_message').prop("value", "2순위 고민 입력을 확인하세요.");
        //     $('#1send_message').css({background:"#595959"});
        //     $('#1send_message').css({cursor:"default"});        
        // }
//     }
//     else
//     {
//         $('#1send_message').css({transition:"1s"});
//         $('#1send_message').prop("disabled", true);
//         $('#1send_message').prop("value", "고민 선택을 확인하세요.");
//         $('#1send_message').css({background:"#595959"});
//         $('#1send_message').css({cursor:"default"});        
//     }
//  }
  
//  function lic_pick(){
//     var lic = $('#1license').val();
    
//     if(lic === "손해평가사")
//         {
//         $('#1form1').attr("name", "fm");
//         // alert($('#1form1').attr("name"));
//         }
//         else
//         {
//         $('#1form1').attr("name", "");
//         }

//     if(lic === "도로교통사고감정사")
//     {
//         $('#1form2').attr("name", "fm");
//         // alert($('#1form1').attr("name"));
//         }
//         else
//         {
//         $('#1form2').attr("name", "");
//         }
//     if(lic === "농산물품질관리사")
//     {
//         $('#1form3').attr("name", "fm");
//         // alert($('#1form1').attr("name"));
//         }
//         else
//         {
//         $('#1form3').attr("name", "");
//         }
//     if(lic === "반려견스타일리스트")
//         {
//         $('#1form4').attr("name", "fm");
//         // alert($('#1form1').attr("name"));
//         }
//         else
//         {
//         $('#1form4').attr("name", "");
//         }
//     if(lic === "맞춤형화장품제조관리사")
//     {
//         $('#1form5').attr("name", "fm");
//         // alert($('#1form5').attr("name"));
//         }
//         else
//         {
//         $('#1form5').attr("name", "");
//     }

// }

    // function form_check1(){
    //     var name =$('#1name').val();
    //     var id = $('#1id-number').val();
    //     var ph =$('#1phone').val();
    //     var time = $('#1position').val();
    //     var message = $('#1message').val();
    
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
 $('#1name,#1phone,#problem1,#problem2,#problem3,#hope1,#hope2,#hope3,#1agree11,#1question,#question4,#age, #dropdown, #email, #1ph, #selectedOption, #selectedOption1, .option, .option1, .gender-radio').bind("keyup click change",form1_check);
 $('#1name,#1phone,#problem1,#problem2,#problem3,#hope1,#hope2,#hope3,#1agree11,#1question,#question4,#age, #dropdown, #email, #selectedOption, #selectedOption1, .option, .option1, .gender-radio').bind("keyup click change",form_check1);
//  $('#1license').bind("keyup click change",lic_pick);
})
