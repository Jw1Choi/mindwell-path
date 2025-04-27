$(function(){
    $(".privacyBtn").click(function(){
       $("#privacy").fadeIn(350);
   });

   // 팝업닫기
   $("#privacy .closeBtn").click(function(){
       $("#privacy").fadeOut(350);
   });
})

function toggleBlurFlow() {
    let popup = document.querySelector('#privacy');
    popup.classList.toggle('blur');
    
    
    let stopscroll = document.querySelector('body');
    stopscroll.classList.toggle('overflow')
    }