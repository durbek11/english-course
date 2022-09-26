new WOW().init();

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(`.navbar`).addClass(`sticky`);
        }else{
            $(`.navbar`).removeClass(`sticky`);
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("show");
        }
    });
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
    })
    
    $(`.scroll-btn`).click(function(){
        $('html').animate({scrollTop:0})
    });
    var typed = new Typed('.taping2',{
        strings: ['oson', 'tez', 'sifatli', `6 oyda`],
        typeSpeed: 120,
        backSpeed: 60,
        loop:true
    })
    //toog;r navbar
    $(`.menu-btn`).click(function(){
        $(`.navbar .menu`).toggleClass(`active`);
        $(`.menu-btn i`).toggleClass(`active`);
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive: {
            0:{
                items:1,
                nav: false

            },
            500:{
                items:1,
                nav: false
            },
            700:{
                items:2,
                nav: false

            },
            900:{
                items:2,
                nav: false

            },
            1100:{
                items:3,
                nav: false
            }
        }
    });
});
//number
		var number = document.querySelector('#n1'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 5);
			}
		});
		var number3 = document.querySelector('#n2'),
		numberTop1 = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end1 = +number3.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop1 - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end1) {
						clearInterval(interval);
					}
				}, 5);
			}
		});
		var number2 = document.querySelector('.number3'),
		numberTop2 = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop2 - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
						clearInterval(interval);
					}
				}, 100);
			}
		});
		var number1 = document.querySelector('.number4'),
		numberTop3 = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end3 = +number1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop3 - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end3) {
						clearInterval(interval);
					}
				}, 1);
			}
		});

       




















