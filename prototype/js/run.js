$(document).ready(function () {

	// 플로팅메뉴
	$('.float_menu li a').click(function () {
		// 버튼 hover 이벤트
		return false
		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');
	});

	var sections = $('.target'),
		nav = $('.float_menu'),
		nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').parent().removeClass('active');
				sections.removeClass('active');

				$(this).parent().addClass('active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
			}
		});
	});

	nav.find('a').on('click', function () {
		var $el = $(this),
			id = $el.attr('href');

		$('html, body').animate({
			scrollTop: $(id).offset().top
		}, 500);

		return false;
	});

	// 도움말 버튼
	$('.qm_btn a').click(function(){
		$(this).parent().find('span').toggle()
	})


	var winHeight = window.innerHeight;
	$(window).on('scroll', function () {
		//스크롤의 위치가 상단에서 190보다 크면
		if ($(window).scrollTop() > innerHeight) {
			$('.float_menu').addClass("fixed");
			//위의 if문에 대한 조건 만족시 fixed라는 class를 부여함
		} else {
			$('.float_menu').removeClass("fixed");
			//위의 if문에 대한 조건 아닌경우 fixed라는 class를 삭제함
		}
	});

	$(".imgFill").imgLiquid();


	// 숫자 카운터
	$('.counter').counterUp({
		delay: 10,
		time: 2000
	});
	$('.counter').addClass('animated fadeInn');



	function winScroll() {
		var op = 1 - (window.pageYOffset / slider.offsetHeight);
		slider.style.opacity = op;
	}
	
	//slider
	$('.slider01').slick();
	
	
	// select 체인지 이벤트
	$('.change_ev01').on('change', function() {
		$('.op_text1').text($(this).val());
	});
	
	// 연봉정보 차트 선택
		$('.barChart02').each(function() {
			$(this).find('.bb-bar-0').addClass('active');
		});
		$('.change_ev02').on('change', function() {
			$(this).find(':selected').addClass('selected')
				.siblings('option').removeClass('selected');
			
			$('.op_text2').text($(this).val());
			
			$('.bb-bar').removeClass('active')
			
			if ($('.change_ev02 .op-0').hasClass("selected")) {
				$('.bb-bar-0').addClass('active');
			} else {
			}
			
				if ($('.change_ev02 .op-1').hasClass("selected")) {
				$('.bb-bar-1').addClass('active');
			} else {
			}
			
			if ($('.change_ev02 .op-2').hasClass("selected")) {
				$('.bb-bar-2').addClass('active');
			} else {
			}
			
			if ($('.change_ev02 .op-3').hasClass("selected")) {
				$('.bb-bar-3').addClass('active');
			} else {
			}
			
		});
	



});
