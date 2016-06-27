
    var data = [
      ["Male", 187],
      ["Female", 256]
    ];
    $('.piechart1').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        style: {
          fontFamily: 'Open Sans'
        }
      },
      title: {
        // text: 'Total: 453'
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f} %</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            distance: -60,
            verticalAlign: 'top',
            format: '<b>{point.name}</b>: {point.y}',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
              fontSize: '14px'
            }
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Total Count',
        colorByPoint: true,
        data: data
      }]
    });