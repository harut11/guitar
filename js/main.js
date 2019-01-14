$(document).ready(function() {
	$('#top-slider .owl-carousel').owlCarousel({
    loop:false,
    dots: true,
    dotsContainer:'#top-slider-control .dots',
    dotsClass:'.dot',
    margin:0,
    nav:true,
    navContainer:'#top-slider-control',
    navText:[$('#top-slider-control .prev'),$('#top-slider-control .next')],
    items:1
})

	$('#projects .forx .owl-carousel').owlCarousel({
    loop:false,
    dots: true,
    dotsContainer:'#projects-slider-control .dots',
    dotsClass:'#projects-slider-control .dots .dot',
    margin:0,
    nav:true,
    navContainer:'#projects-slider-control',
    navText:[$('#projects-slider-control .prev'),$('#projects-slider-control .next')],
    items:1
})

	$('#project-categories .owl-carousel').owlCarousel({
    loop:false,
    dots: false,
    margin:0,
    nav:true,
    navContainer:'#project-categories .pagination',
    navText:[$('#project-categories .pagination .left'),$('#project-categories .pagination .right')],
    items:1
})

	$('#articles .owl-carousel').owlCarousel({
    loop:false,
    dots: true,
    dotsContainer:'#article-slider-control .dots',
    dotsClass:'.dot',
    margin:0,
    nav:true,
    navContainer:'#article-slider-control',
    navText:[$('#article-slider-control .prev'),$('#article-slider-control .next')],
    items:1
})

    $('#testimonials .owl-carousel').owlCarousel({
        loop:true,
        dots: false,
        margin:0,
        nav:true,
        navText:[$('#testimonials .main .left'),$('#testimonials .main .right')],
        items:1
    })

});