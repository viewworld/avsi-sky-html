
  $('.barchart3').highcharts({
    chart: {
      type: 'column'
    },

    title: {
      text: ''
    },

    xAxis: {
      categories: ['Start', '6 months', '12 months']
    },

    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: 'Number'
      },
      startOnTick: true,
      endOnTick: true,
      minPadding: 0,
      maxPadding: 0,
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
      "data": [23, 33, 43]
    }, {
      "name": "Female",
      "data": [33, 34, 36]
    }, {
      "name": "Overall target",
      type: "line",
      color: "#119a5f",
      "data": [80, 80, 80]
    }],
    credits: {
      enabled: false
    }
  });