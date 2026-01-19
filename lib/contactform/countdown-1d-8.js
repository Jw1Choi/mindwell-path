$(function () {
  var eventDate = new Date("2026-2-28T14:00:00+09:00"); // 7/15 오후 3시
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();

  var countDownDate = new Date("2026-2-28T14:00:00+09:00").getTime(); // 7/15 자정 기준

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var nowDate = new Date();

    // 기본 날짜 출력
    $("#day, #day1").text(`${year}. ${month}. ${day}`);

    // ────────── 7월 15일 오후 3시 이후 ──────────
    if (nowDate >= eventDate) {
      clearInterval(x);
      $("#day, #day1").empty();
      $("#countdown, #countdown1")
        .text("모든 행사가 종료되었습니다.")
        .css({ color: "#ff3b30", fontWeight: "700" });

      $("#choice .faq-card").hide(); // 모든 FAQ 숨김
      $("#choice .faq-subtext").html("모든 프로그램이 종료되었습니다.");
      return;
    }

    // ────────── 7월 15일 당일 오전~오후 3시 사이 ──────────
    if (
      nowDate.getFullYear() === 2025 &&
      nowDate.getMonth() === 10 && // 7월 → 6 (0부터 시작)
      nowDate.getDate() === 22 &&
      nowDate < eventDate
    ) {
      clearInterval(x);
      $("#day, #day1").empty();
      $("#countdown, #countdown1")
        .text("현장 참가만 가능합니다.")
        .css({ color: "#ff3b30", fontWeight: "700" });

      $("#choice .faq-card").eq(0).hide(); // 온라인 사전신청
      $("#choice .faq-card").eq(2).hide(); // 기타
      $("#choice .faq-card").eq(1).show(); // 현장 결제
      $("#onlineTab").hide(); // 온라인 사전신청
      
      $("#choice .faq-subtext").html("온라인 신청은 마감되었으며,\n\n현장 참가만 가능합니다.");
      return;
    }

    // ────────── 기본 카운트다운 상태 ──────────
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString().padStart(2, "0");
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString().padStart(2, "0");
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
      .toString().padStart(2, "0");

    $("#countdown, #countdown1")
      .text(`${days}일 ${hours}시 ${minutes}분 ${seconds}초 남음`);
  }, 1000);

  // ▾ 기존 티커 슬라이드 유지
  function upslide() {
    var h = $("#ticker").find("tbody > tr").outerHeight();
    var item = $("#ticker").find("tbody > tr:first-child");
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
