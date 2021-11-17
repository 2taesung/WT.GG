import $ from 'jquery';
window.$ = $;

$(document).ready(function () {
  gauges();
}); // END Document Ready

function gauges() {
  $(".gauge").each(function (index) {
    var val = $(".gauge-cnt").text();
    console.log("val")
    console.log(val)
    var ceil = $(this).data("ceil");
    
    var d = 0;

    var $elem = $(this).find(".gauge-indicator");
    var $counter = $(this).find(".gauge-cnt");
    var $ceil_indicator = $(this).find(".gauge-ceil");
    $ceil_indicator.text("/" + ceil);
    if (val > ceil) {
      d = 180;
    } else {
      d = (val * 180) / ceil;
    }


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
