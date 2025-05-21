$(function () {
  var targetDate = new Date("2025-05-20T23:59:00+09:00"); // 마감 시각
  var today      = new Date("2025-05-20T23:59:00+09:00");
  var year  = today.getFullYear();
  var month = today.getMonth() + 1;
  var day   = today.getDate();

  targetDate.setDate(targetDate.getDate() + 1);  // 0시 기준 카운트다운
  targetDate.setHours(0, 0, 0, 0);
  var countDownDate = targetDate.getTime();

  var x = setInterval(function () {
    var now      = new Date().getTime();
    var distance = countDownDate - now;

    /* 남은 시간 계산 */
    var days    = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours   = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                  .toString().padStart(2,"0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                  .toString().padStart(2,"0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
                  .toString().padStart(2,"0");

    /* 카운트다운 출력 */
    $("#day, #day1").text(`${year}. ${month}. ${day}`);
    $("#countdown, #countdown1")
      .text(`${days}일 ${hours}시 ${minutes}분 ${seconds}초 남음`);

    /* ────────── 마감 UI 처리 ────────── */
    if (distance < 0) {
      clearInterval(x);

      // 1) 날짜·카운트다운 영역 변경
      $("#day, #day1").empty();
      $("#countdown, #countdown1")
        .text("마감되었습니다. 현장 결제로 진행해주세요.")
        .css({ color:"#ff3b30", fontWeight:"700" });

      // 2) FAQ 카드 제어 : 1번·3번 숨김, 2번(현장결제)은 표시
      $("#choice .faq-card").eq(0).hide(); // 1번
      $("#choice .faq-card").eq(2).hide(); // 3번
      $("#choice .faq-card").eq(1).show(); // 현장 결제

      // 3) 설명 문구 교체
      $("#choice .faq-subtext").html("신청이 마감되어 현장결제만 가능합니다.");

      return; // 이후 계산·출력 중단
    }
  }, 1000);

  /* ▾ 기존 티커 슬라이드 유지 */
  function upslide() {
    var h     = $("#ticker").find("tbody > tr").outerHeight();
    var item  = $("#ticker").find("tbody > tr:first-child");
    var clone = item.clone();
    $("#ticker > tbody").append(clone);

    $("#ticker_wrap").css({ top: 0 })
      .animate({ top: "-" + h + "px" }, function () {
        $("#ticker_wrap").css({ top: 0 });
        item.remove();
      });
  }
  setInterval(upslide, 1700);
});