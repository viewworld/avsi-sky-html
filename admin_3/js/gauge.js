
  $.fn.gauge = function(opts) {
    this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.gauge) {
        data.gauge.stop();
        delete data.gauge;
      }
      if (opts !== false) {
        data.gauge = new Donut(this).setOptions(opts);
        data.gauge.setTextField($(this).siblings(".textfield").get());
      }
    });
    return this;
  };
  
  var opts = {
    lines: 12, // The number of lines to draw
    angle: 0.5, // The length of each line
    lineWidth: 0.1, // The line thickness
    limitMax: 'false', // If true, the pointer will not go past the end of the gauge
    colorStart: '#1e407c', // Colors
    colorStop: '#1e407c', // just experiment with them
    strokeColor: '#EEEEEE', // to see which ones work best for you
    generateGradient: true
  };
  var gauge = $('.knob1, .knob2, .knob3, .knob4').gauge(opts); // your canvas element
  $(".knob1, .knob2, .knob3, .knob4").each(function() {
    $(this).data().gauge.maxValue = 100;
  });
  //$(".knob1").data().gauge.set(100)
  $(".knob2").data().gauge.set(78)
  $(".knob3").data().gauge.set(33)
  $(".knob4").data().gauge.set(50)