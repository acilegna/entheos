$(document).ready(main);

var contador = 1;

function main() {
  $('.menu_bar').click(function () {
    // $('nav').toggle();

    if (contador == 1) {
      $('nav').animate({
        left: '0',
      });
      contador = 0;
    } else {
      contador = 1;
      $('nav').animate({
        left: '-100%',
      });
    }
  });
}

$(function () {
  $('#op-no').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('#nosotros').offset().top - 85,
      },
      2000
    );
  });
});

$(function () {
  $('#op-se').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('#services').offset().top - 84,
      },
      2000
    );
  });
});

$(function () {
  $('#op-po').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('.filtros').offset().top - 80,
      },
      2000
    );
  });
});

$(function () {
  $('#op-co').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('#contacto').offset().top - 50,
      },
      2000
    );
  });
});

$(function () {
  $('#op-ca').click(function (e) {
    e.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $('.cabina').offset().top - 80,
      },
      2000
    );
  });
});
