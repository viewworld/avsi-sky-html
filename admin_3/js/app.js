$(document).ready(function() {
  $('#nav').onePageNav();
  $('#secondnav').onePageNav();
  $(".page-header-menu").sticky({
    topSpacing: 0
  });
});

$('body').on('click', 'a', function(event) {
  $(event.target).blur();
})


Highcharts.theme = {
  colors: ['#1e407c', '#f58125', '#8AB4FF', '#119a5f', '#000000'],
};
Highcharts.setOptions(Highcharts.theme);

$("#a_reg").click(function(e) {
  e.preventDefault();
  $("#a_gend").find("i").addClass("hidden");
  $("#a_reg").find("i").removeClass("hidden");
  $("#a_label").html("Region <i class='fa fa-angle-down'></i>");
  HC([
    ["Western", 24.38],
    ["Central", 36.33],
    ["Eastern", 24.03]
  ]);
})
$("#a_gend").click(function(e) {
  e.preventDefault();
  $("#a_reg").find("i").addClass("hidden");
  $("#a_gend").find("i").removeClass("hidden");
  $("#a_label").html("Gender <i class='fa fa-angle-down'></i>");
  HC([
    ["Male", 187],
    ["Female", 256]
  ]);
})


$('.mfp-video').magnificPopup({
  gallery: {
    enabled: true
  },
  type: 'iframe' // this is default type
});

$('.gallery').magnificPopup({
  delegate: 'a',
  gallery: {
    enabled: true
  },
  type: 'image' // this is default type
});

$('.carousel-videos > div').bxSlider({
  auto: false,
  pager: false,
  controls: true,
  touchEnabled: true,
  nextText: '',
  prevText: '',
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 600,
  slideMargin: 30,
});

$('.flickr-image .bx').bxSlider({
  auto: true,
  pager: false,
  controls: true,
  touchEnabled: true,
  captions: true,
  nextText: '',
  prevText: ''
});

$("#tour").click(function(){
  // Instance the tour
  var tour = new Tour({
    backdrop: true,
    storage: false,
    debug: true,
    steps: [{
      element: ".map-portlet",
      title: "This is a map",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat metus at enim fermentum ultricies. Praesent dictum orci nec pretium tincidunt."
    },{
      element: "#step2",
      title: "This is chart #1",
      content: "Duis ut nibh est. Duis fringilla congue nulla, eu pharetra ipsum mollis quis. Donec rhoncus mi eu hendrerit congue. Integer aliquam quam ut aliquet ultrices."
    },{
      element: "#step3",
      title: "This is chart #2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat metus at enim fermentum ultricies. Praesent dictum orci nec pretium tincidunt."
    },{
      element: "#step4",
      title: "This is chart #3",
      content: "Duis ut nibh est. Duis fringilla congue nulla, eu pharetra ipsum mollis quis. Donec rhoncus mi eu hendrerit congue. Integer aliquam quam ut aliquet ultrices."
    },{
      element: "#step5",
      title: "This is chart #4",
      content: "Duis ut nibh est. Duis fringilla congue nulla, eu pharetra ipsum mollis quis. Donec rhoncus mi eu hendrerit congue. Integer aliquam quam ut aliquet ultrices."
    },
  ]});

    tour.init();
    tour.start();
})



$('.readmore').each(function(){
  $(this).qtip({
    style: { classes: 'readmore-qtip' },
    position: {
      my: $(this).data("position") || 'bottom center',
      at: $(this).data("parent") || 'left center'
    }
  });
})


$('.dashboard-report-range-1').each(function(){
    var that = this;
    $(this).daterangepicker({
        "ranges": {
            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')],
            'Last 3 Months': [moment().subtract('month', 3).startOf('month'), moment().subtract('month', 1).endOf('month')],
            'Last 9 Month': [moment().subtract('month', 9).startOf('month'), moment().subtract('month', 1).endOf('month')],
            'Last Year': [moment().subtract('month', 12).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
        "locale": {
            "format": "MM/DD/YYYY",
            "separator": " - ",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "daysOfWeek": [
                "Su",
                "Mo",
                "Tu",
                "We",
                "Th",
                "Fr",
                "Sa"
            ],
            "monthNames": [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "Sept",
                "October",
                "November",
                "December"
            ],
            "firstDay": 1
        },
        //"startDate": "11/08/2015",
        //"endDate": "11/14/2015",
        opens: (App.isRTL() ? 'right' : 'left'),
        //buttonClasses: 'hidden',
        autoApply: true,
        alwaysShowCalendars: $(this).data("alwaysShowCalendars"),
    }, function(start, end, label) {
        $(that).find('span').html(start.format('MMM D, YYYY') + ' - ' + end.format('MMM D, YYYY'));
    }).on("show.daterangepicker", function(ev, picker) {
        $(picker.container).css("min-width", ( Number($(picker.element).width()) + 23 ) )
    });

    $(that).find('span').html(moment().subtract('days', 29).format('MMM D, YYYY') + ' - ' + moment().format('MMM D, YYYY'));
    $(that).show();
})