(function(window, document) {

  var inactiveElements = [
    document.querySelector('.logo'),
    document.querySelector('header'),
  ];


  window.onload = function() {
    inactiveElements.forEach(function(elem) { 
      elem.classList.remove('inactive');
    });
  }

})(window, document);
