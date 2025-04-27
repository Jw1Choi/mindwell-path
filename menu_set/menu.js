const template = document.getElementById('headerTemplate');
template.innerHTML = `
<header>
<nav class="top">
    <a class="logo"  target="_self" href="../index.html">
      <!-- <p class="logo-font">J A M C L A S S</p> -->
      <img alt="" src="./menu_set/jamclass-logo.png" >
    
    </a>
    <div class="menu-btn">
        <!-- <button class="Event_Menu">Event</button> -->
        <button class="total_menu" style="border:0;background:transparent;"><img src="./menu_set/hamburger.svg" style="width:17px;"></button>
    </div>
</nav>


<div class="ham-con" data-depth="1"><!-- 메뉴 -->
    <div class="bg"></div>
    <div class="container-box">

        <div class="top">
            <div>
                <button class="back">
                    <svg fill="none" viewBox="0 0 24 24" preserveAspectRatio="xMinYMid" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-db _SN-od"><path d="M5 9l7 7 7 -7" stroke="currentColor" data-autoid="chevron:90" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1"></path></svg>
                </button>
                
                <p class="txt-cg">학생</p>
                
                <a class="logo"  target="_self" href="">
                  <!-- <p>J A M C L A S S</p>   -->
                  <img alt="" src="./menu_set/jamclass-logo.png" >
                </a>
                <p class="close-btn ham-close-btn"><svg viewBox="0 0 24 24" class="_SN-cw _SN-cx _SN-cy _SN-cz _SN-da _SN-db"><path stroke="currentColor" d="M4.222 4.222l15.556 15.556M4.222 19.778L19.778 4.222"></path></svg></p>
            </div>
        </div>

        <div class="wrap">
            <div class="menu con-01"><!-- 메뉴 1depth-->

              
                <div class="middle">
                    <ul class="left">
                        <li><p><a target="_self" href="./index.html">HOME</a></p></li>
                        <li class="tab02" data-rel="menu-01" data-tit="학생 상담"><p>학생 상담</p><img width="24" height="24" src="./menu_set/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <li class="tab02" data-rel="menu-02" data-tit="성인 상담"><p>성인 상담(곧 출시)</p><img width="24" height="24" src="./menu_set/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        <!-- <li><p><a target="_self"href="">심리, 감정 검사</a></p></li> -->
                        <li class="tab02" data-rel="menu-04" data-tit="팀원 소개"><p>팀원 소개</p><img width="24" height="24" src="./menu_set/navigation.svg#light-primary" role="presentation" alt="" class="_SN-cu _SN-cv"></li>
                        
                    </ul>
                </div>
                <!-- <div class="bottom">
                  
                  
                </div> -->
            </div>
            <div class="menu02"><!-- 메뉴 2depth-->
                <div class="menu-01">
                    <div class="set-con">
                        <p>진로 선택</p>
                        <ul class="top">
                            <li><a target="_self" href="./type-test.html">문 / 이과 선택</a></li>
                            <li><a target="_self" href="./major-test.html">대학 전공 선택</a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                        <p>재능 및 적성 탐색</p>
                        <ul class="bottom">
                            <li><a target="_self" href="./potential-test.html">흥미 및 적성 검사</a></li>
                        </ul>
                    </div>
                    <div class="set-con">
                      <p>학습법</p>
                      <ul class="bottom">
                          <li><a target="_self" href="./howtostudy.html">나만의 학습법 찾기</a></li>
                          <li><a target="_self" href="./burnout-test.html">공부 번아웃 검사</a></li>
                      </ul>
                  </div>
                </div>
                <div class="menu-02">
                    <div class="set-con">
                        <p>진로 선택</p>
                        <ul class="bottom">
                            <li><a target="_self" href="">직업 선택 상담</a></li>
                            <li><a target="_self"href="">직업 적성 검사</a></li>
                            <li><a target="_self"href="">재능 탐색 검사</a></li>
                        </ul>
                    
                        
                    </div>
                
                </div>
                
                <div class="menu-04">
                    <div class="set-con pad">
                        <ul class="bottom">
                          <p style="padding: 30px 25px 10px;
                          letter-spacing: 0.02em;
                          line-height: 1.66667;
                          font-size: 12px;
                          font-weight: 500;
                          color: #707070;">전문 상담사 소개</p>
                          <li><a target="_self" href="./team-prof.html">이헌주 연세대 연구교수</a></li>
                          <li><a target="_self" href="./team-kjs.html">김정수 전문 상담사</a></li>
                          <li><a target="_self" href="./team-kje.html">김조은 전문 상담사</a></li>
                          <li><a target="_self" href="./team-kjh.html">김종현 전문 상담사</a></li>
                          <li><a target="_self" href="./team-bsj.html">방수진 전문 상담사</a></li>
                          <li><a target="_self" href="./team-syi.html">송영인 전문 상담사</a></li>
                          
                        </ul>
                    </div>
                </div>
              
            </div>
        
        </div>
    </div>
</div>

</header>
`;

document.body.appendChild(template.content);

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};


    $('.total_menu').click(function(){//메뉴열기//
        $('.ham-con').show();
		$('body').css('overflow-y','hidden');	
        setTimeout(function() {
            $('header .ham-con').addClass("on")
        }, 100);
    })
    
    $('.ham-close-btn').click(function(){ //메뉴 닫기// 
        $('.wrap').stop().animate({'margin-left' : '0%'})
        $('header .ham-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.bg').click(function(){//메뉴 컨텐츠 외 클릭시 닫힘
        $('.wrap').stop().animate({'margin-left' : '0%'})
		$('body').css('overflow-y','scroll');	
        $('header .ham-con .container-box > .top').removeClass('on')
        $('header .ham-con').removeClass("on");
        setTimeout(function() {
            $('.ham-con').hide();
        }, 300); 
    })

    $('.min-show .title').on('click',function(){ //모바일에서만 보이는 메뉴
        $(this).next('.min-con').slideToggle()
        $(this).toggleClass("on")
        // $(this).parents().find('header .ham-con .menu').toggleClass("on");
        // if($('.min-show .title').hasClass('on') == length < 1){
        //     $('.min-show .car-box,.bottom li,.middle ul li').addClass('on')
        // }else if($('.min-show .title').hasClass('on') == length < 0) {
        //     $('.min-show .car-box,.bottom li,.middle ul li').removeClass('on')
        // }
    })

    $('.Event_Menu').click(function(){//메뉴 열기//
        $('.our-con').slideToggle(400);
        $('.our-con').toggleClass("on");
		var our_con_check = $('.our-con').hasClass('on');
		if(our_con_check == true){
			$('body').css('overflow-y','hidden');	
		}else{
			$('body').css('overflow-y','scroll');						
		}

    })

    $('.out-close-btn').click(function(){//메뉴 닫기//
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
    })

    $('.bg02').click(function(){//our-con 컨텐츠 외 클릭시 닫힘
        $('.our-con').slideUp(400);
        $('.our-con').removeClass("on");
		$('body').css('overflow-y','scroll');	
    })
    
    $('.left li').on('click',function(){ //메뉴 1depth//
        var data = $(this).attr('data-rel');
        var $content = $('.' + data);
        $(this).addClass("on").siblings().removeClass("on")
        $content.show().siblings().hide()
    })

    $(".tab02").on('click',function(){//메뉴 2depth// 
        var title = $(this).data('tit'); 
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-100%'})
        $('header .ham-con .container-box > .top').addClass("on");
        $('.ham-con').attr("data-depth", 2);
    })

    $(".tab03").on('click',function(){ //메뉴 3depth//
        var title = $(this).data('tit');
        $(".txt-cg").text(title);
        $(this).parents('.wrap').stop().animate({'margin-left' : '-200%'})
        $('.ham-con').attr("data-depth", 3);
    })

    $(".back").on('click',function(){ //메뉴 돌아가기//
        var depth = Number($('.ham-con').attr("data-depth"));
        var left = (depth - 2) * -100;
        $('.wrap').stop().animate({'margin-left' : left+'%'})
        if (0 == left) {
            $('header .ham-con .container-box > .top').removeClass("on");
        }

        $('.ham-con').attr("data-depth", (depth - 1)); 
    })