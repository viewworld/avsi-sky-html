
  $('.barchart1').highcharts({
    chart: {
      type: 'column'
    },

    title: {
      text: ''
    },

    xAxis: {
      categories: ['Start', '6 months', '12 months', '18 months']
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      max: 70,
      title: {
        text: 'USD'
      }
    },

    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },

    plotOptions: {
      column: {
        stacking: 'normal'
      },
          line: {
              marker: {
                  radius: 3,
                  symbol: 'circle'
              }
          }
    },
    series: [{
      "name": "Male",
      "data": [20, 24, 25, 30]
    }, {
      "name": "Female",
      "data": [17, 20, 23, 24]
    }, {
      "type": "line",
      "name": "Overall target",
      "data": [60, 60, 60, 60],
      "color": "#119a5f"
    }],
    credits: {
      enabled: false
    }
  });