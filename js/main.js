;(function(){
    
    const mainSlider = new Swiper('.catalog__slider-container', {
        loop: true,
        slidePerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        breakpoints: {
            // when window width is >= 320px
            768: {
              slidesPerView: 2,
              autoHeight: true,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      
    })


    const popupBtn = document.querySelectorAll('.popup-call');
    const popupWindow = document.querySelector('.popup');
    const modal = document.querySelector('.modal');


    popupBtn.forEach(function(item){
      item.addEventListener('click', () => {
        modal.classList.add('active');
        popupWindow.classList.add('active');
      })
    })

    function closePopup(){
      popupWindow.classList.remove('active');
      modal.classList.remove('active');
    }

    modal.addEventListener('click', closePopup);
    
    document.addEventListener('keydown', function(e){
      if(e.keyCode == 27) {
        closePopup();
      }
    })

    window.addEventListener("DOMContentLoaded", function() {
      [].forEach.call( document.querySelectorAll('.tel'), function(input) {
      var keyCode;
      function mask(event) {
          event.keyCode && (keyCode = event.keyCode);
          var pos = this.selectionStart;
          if (pos < 3) event.preventDefault();
          var matrix = "+7 (___) ___ __-__",
              i = 0,
              def = matrix.replace(/\D/g, ""),
              val = this.value.replace(/\D/g, ""),
              new_value = matrix.replace(/[_\d]/g, function(a) {
                  return i < val.length ? val.charAt(i++) || def.charAt(i) : a
              });
          i = new_value.indexOf("_");
          if (i != -1) {
              i < 5 && (i = 3);
              new_value = new_value.slice(0, i)
          }
          var reg = matrix.substr(0, this.value.length).replace(/_+/g,
              function(a) {
                  return "\\d{1," + a.length + "}"
              }).replace(/[+()]/g, "\\$&");
          reg = new RegExp("^" + reg + "$");
          if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
          if (event.type == "blur" && this.value.length < 5)  this.value = ""
      }
  
      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false)
  
    });
  
  });
})();