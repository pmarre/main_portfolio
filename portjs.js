$(document).ready(function () {
  addCard(projects);
  // More Info Slider
  $(document).click(function (e) {
    let target = e.target;
    if (target.className === 'more_link') {
      e.preventDefault();
      for (let i = 0; i < 15; i++) {
        console.log(target.id);
        if (target.id === 'sideBar-' + [i]) {
          console.log(true);
          $('#moreInfo-' + [i]).slideDown(300);
        }
      }
    } else if (target.className !== 'moreInfo') {
      $('.moreInfo').slideUp(300);
    }
  });

  $('.close').click(function () {
    $('.moreInfo').slideUp(300);
  });

  // Mobile Menu Animations

  $('.menu-stack').click(function () {
    $('.mobile-overlay').css('display', 'block');
  });

  $('.mobile-close').click(function () {
    $('.mobile-overlay').css('display', 'none');
  });

  $('.mobile-navItem').click(function () {
    $('.mobile-overlay').css('display', 'none');
  });
});
