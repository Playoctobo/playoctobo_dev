let current = null;

$(document).ready(function() {
  // Tabs
  $('.tab-content > .tab-panel').hide();
  current = $('.tab-content > .tab-panel:first-of-type').show();

  $('.feature-tabs a').click(function(e) {
    e.preventDefault();

    var $this = $(this),
        tabContent = '#'+$this.parents('.tab-content').data('.tab-panel'),
        link = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');

    if (current) {
      current.hide();
    }

    current = $(target);

    //link.removeClass('active');
    $this.addClass('active');
    $(tabContent).children('.tab-panel').hide();
    $(target).show();
  });

  $('.feature-tabs li').click(function() {
    $(this).addClass('active')
           .siblings('.active').removeClass('active');
  });
});