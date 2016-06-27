var categories = ['Start', '6 months', '12 months', '18 months'];
  $('.linechart2').highcharts({
    chart: {
      zoomType: 'x',
      style: {
        fontFamily: 'Open Sans'
      }
    },
    title: {
      text: '',
    },
    xAxis: {
      labels: {
        enabled: true,
        formatter: function() {
          return categories[this.value];
        }
      },
      tickInterval: 1,
      minPadding: 0,
      maxPadding: 0,
      startOnTick: true,
      endOnTick: true
    },
    yAxis: {
      title: {
        text: 'Institutions'
      },
      min: 0,
      max: 20,
      tickInterval: 2,
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: ''
    },
    legend: {
      layout: 'vertical',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    credits: {
      enabled: false
    },
    plotOptions: {
          spline: {
              marker: {
                  radius: 3,
                  symbol: 'circle'
              }
          },
      areaspline: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors[0]],
            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
    series: [{
      type: 'areaspline',
      "name": "Overall target",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, '#119a5f'],
            [1, Highcharts.Color('#119a5f').setOpacity(0).get('rgba')]
          ]
        },
      color: '#119a5f',
      "data": [17, 17, 17, 17]
    }, {
      type: 'areaspline',
      "name": "Progress",
      "data": [7, 9, 14, 10]
    }]
  });