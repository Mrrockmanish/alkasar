$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");

  $('.material').on('click', '.material__title', function () {
    $(this).next('.material__content').fadeToggle();
    $(this).toggleClass('active');
  });

  const tabsSwitcher = (tabsContainer, tabLink, tabPanel) => {


    $(tabsContainer).on('click', `${tabLink}:not(.active)`, function () {
      const activeTab = $(tabsContainer).find(`${tabLink}.active`);
      const activePanel = $(tabsContainer).find(`${tabPanel}.active`);
      const thisData = $(this).data('tab');

      activeTab.removeClass('active');
      $(this).addClass('active');

      activePanel.removeClass('active');
      $(`[data-tabContent=${thisData}]`).addClass('active');
    });
  };

  tabsSwitcher('.materials__wrap', '.materials__tab', '.material');

  $('.projects-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.project-slider-arrows'),
    prevArrow: '<div class="project-slider-arrow project-slider-prev bg-light-green flex justify-center items-center"><svg enable-background="new 0 0 551.13 551.13" height="22" viewBox="0 0 551.13 551.13" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m189.451 275.565 223.897-223.897v-51.668l-275.565 275.565 275.565 275.565v-51.668z"/></svg></div>',
    nextArrow: '<div class="project-slider-arrow project-slider-prev bg-light-green flex justify-center items-center"><svg enable-background="new 0 0 551.13 551.13" height="22" viewBox="0 0 551.13 551.13" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="m361.679 275.565-223.896 223.897v51.668l275.565-275.565-275.565-275.565v51.668z"/></svg></div>',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })


});

const showMenu = () => {
  const menu = $('.mobile-menu');
  menu.removeClass('visuallyhidden').addClass('fadeInRight');
  $('body').addClass('overflow-hidden');
};

const hideMenu = () => {
  const menu = $('.mobile-menu');
  menu.addClass('visuallyhidden').removeClass('fadeInRight');
  $('body').removeClass('overflow-hidden')
}

$('.bars').on('click', showMenu);

$('.mobile-menu__close').on('click', hideMenu);
$('.mobile-menu a').on('click', hideMenu);


$('.project-floor__img-wrap').magnificPopup({
  delegate: 'a',
  type: 'image'
});

//заказать звонок в шапке

$('.header-call').on('click', function (){
  $(this).next().show();

  $(document).mouseup(function (e) {
    const clickObject = $('.header-form-block');

    if (!clickObject.is(e.target) && clickObject.has(e.target).length === 0) {
      clickObject.hide();
    }
  });
});

$('.header-form-block__close').on('click', function (){
  $(this).closest('.header-form-block').hide();
});

$(document).on('af_complete', function (event, response) {
  const form = response.form;
  // Если у формы определённый класс
  if (form.hasClass("header-form") && response.success == true) {
    // Скрываем её!
    $('.header-form-block').hide();
  }

  // Иначе печатаем в консоль весь ответ
  else {
    console.log(response);
  }
});