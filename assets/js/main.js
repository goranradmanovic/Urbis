$(function() {
    addNavLinkActiveClass();

    owlCarouselInit();

    setControllsThumbnailImg();
});

// Add/remove active class from navigation
addNavLinkActiveClass = () => {
  $('.navbar-nav .nav-item').click(function() {
      $('.navbar-nav .nav-item').removeClass('active');
      $(this).addClass('active');
  });
}

owlCarouselInit = () => {

  $(".owl-carousel").owlCarousel({
  	loop:true,
  	items:1,
  	margin:0,
  	stagePadding: 0,
  	autoplay:false
  });

  dotcount = 1;

  jQuery('.owl-dot').each(function() {
  	jQuery( this ).addClass( 'dotnumber' + dotcount);
  	jQuery( this ).attr('data-info', dotcount);
  	dotcount=dotcount+1;
  });

  slidecount = 1;

  jQuery('.owl-item').not('.cloned').each(function() {
  	jQuery( this ).addClass( 'slidenumber' + slidecount);
  	slidecount=slidecount+1;
  });

  jQuery('.owl-dot').each(function() {
  	grab = jQuery(this).data('info');
  	slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
  	jQuery(this).css("background-image", "url("+slidegrab+")");
  	jQuery(this).attr("data-image", slidegrab);
  });

  /*amount = $('.owl-dot').length;
  gotowidth = 100/amount;
  jQuery('.owl-dot').css("height", gotowidth+"%");*/
}

setControllsThumbnailImg = () => {

  //First initial image
  $('.owl-item.active > div > img').each(function() {
    $('.designe__controlls--img').attr('src', this.src);
  });

  //Cheange image on click
  $('.owl-dot').click((event) => {
    $('.designe__controlls--img').attr('src', event.target.dataset.image);
  })
}
