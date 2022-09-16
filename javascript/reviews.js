window.onload = function () {
  document.getElementById('slogan').onclick = function () {
    alert('Привет');
  };
}

window.onload = function(){
  $(function () {
    $('.client-about').hide();

    $('.client-slogan').click(function () {
      $(this).next().slideToggle({duration: 300});
    });
  });
};
