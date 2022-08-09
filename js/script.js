let openedPopup;

function openPopup(popup, event) {
  event.stopPropagation();
  openedPopup = popup;
  /* Open popup and make accessible screen readers */
  $(popup).show().attr("aria-hidden", "false");
  /* Focus on element to guide screen readers to popup */
  $("#closePopup").focus();
}

function closePopup(popup) {
  /* Close popup and hide from screen readers */
  $(popup).hide().attr("aria-hidden", "true");
  /* Focus screen readers back to button */
  openedPopup = undefined;
}

function showSubmitPopup(popup) {
  $(popup).hide().attr("aria-hidden", "true");
  $('#myPopup-5').show().attr("aria-hidden", "false");
}

$(document).ready(function() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  if (params.showSubmitPopup) {
    showSubmitPopup();
    openedPopup = '#myPopup-5';
    history.pushState(null, "", location.href.split("?")[0]);

    setTimeout(() => closePopup(openedPopup), 5000)
  }


  $('.popup-window').click(function(e){
    e.stopPropagation();
  });

  $("body").click(function(){
    closePopup(openedPopup)
  });

  $(".popups__close").click(function(){
    closePopup(openedPopup)
  }); 
   
});

$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#headerScroll").addClass("small")
    } else {
        $("#headerScroll").removeClass("small")
    }
});

$(document) .ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header') .toggleClass('active');   
    });
  });
