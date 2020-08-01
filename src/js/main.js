$(document).ready(function () {

//маска телефона
  $('input[name="tel"]').mask("+7(999) 999-9999");
  
  $('.material').on('click', '.material__title', function (){
    $(this).next('.material__content').fadeToggle();
    $(this).toggleClass('active');
  });

  const tabsSwitcher = (tabsContainer, tabLink, tabPanel) => {


    $(tabsContainer).on('click', `${tabLink}:not(.active)`, function (){
      const activeTab = $(tabsContainer).find(`${tabLink}.active`);
      const activePanel = $(tabsContainer).find(`${tabPanel}.active`);


      const thisData =  $(this).data('tab');

      activeTab.removeClass('active');
      $(this).addClass('active');

      activePanel.removeClass('active');
      $(`[data-tabContent=${thisData}]`).addClass('active');

    });
  };


  tabsSwitcher('.materials__wrap', '.materials__tab', '.material');














});