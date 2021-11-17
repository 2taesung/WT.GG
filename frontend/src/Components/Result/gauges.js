import $ from 'jquery';
window.$ = $;

$(document).ready(function () {
  gauges();
}); // END Document Ready

function gauges() {
  $(".gauge").each(function (index) {
    var val = $(this).data("value");
    var ceil = $(this).data("ceil");
    var d = 0;

    if (val > ceil) {
      d = 180;
    } else {
      d = Math.round((val * 180) / ceil);
    }

    var $elem = $(this).find(".gauge-indicator");
    var $counter = $(this).find(".gauge-cnt");
    var $ceil_indicator = $(this).find(".gauge-ceil");
    $ceil_indicator.text("∞ " + ceil);

    $({ deg: -180 }).animate(
      { deg: d - 180 },
      {
        duration: 2000,
        step: function (now) {
          $elem.css({ transform: "rotate(" + now + "deg)" });
        }
      }
    );

    $({ vis: 0 }).animate(
      { vis: val },
      {
        duration: 2000,
        step: function (vis_now) {
          $counter.text(Math.round(vis_now));
        }
      }
    );
  });
} //gauges
