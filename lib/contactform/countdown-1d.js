$(function () {
  var targetDate = new Date("2025-05-20T23:59:00+09:00"); // 마감 시각
  var today      = new Date("2025-05-20T23:59:00+09:00");
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  targetDate.setDate(targetDate.getDate() + 1);  // 0시 기준 카운트다운
  targetDate.setHours(0, 0, 0, 0);

  var countDownDate = targetDate.getTime();

  /* 매초 업데이트 */
  var x = setInterval(function () {
    var now       = new Date().getTime();
    var distance  = countDownDate - now;

    /* 남은 시간 계산 */
    var days    = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                  .toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                  .toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
                  .toString().padStart(2, "0");

    /* 화면 출력 */
    $("#day, #day1").text(`${year}. ${month}. ${day}`);
    $("#countdown, #countdown1")
      .text(`${days}일 ${hours}시 ${minutes}분 ${seconds}초 남음`);

    /* ── 마감 처리 ── */
    if (distance < 0) {
      clearInterval(x);                                 // 타이머 정지
      $("#day, #day1").empty();                         // 날짜 숨김(원하면 삭제)
      $("#countdown, #countdown1").text(               
        "마감되었습니다. 현장 결제로 진행해주세요."
      ).css({color:"#ff3b30", fontWeight:"700"});       // 강조 스타일(선택)
    }
  }, 1000);

  /* (아래는 티커 슬라이드 함수 그대로) */
  function upslide() {
    var h = $('#ticker').find('tbody > tr').outerHeight();
    var item = $('#ticker').find('tbody > tr:first-child');
    var clone = item.clone();
    $('#ticker > tbody').append(clone);

    $('#ticker_wrap').css({ top: 0 })
      .animate({ top: '-' + h + 'px' }, function () {
        $('#ticker_wrap').css({ top: 0 });
        item.remove();
      });
  }
  setInterval(upslide, 1700);
});
