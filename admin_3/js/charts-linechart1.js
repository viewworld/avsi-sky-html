var categories = ['Start', '6 months', '12 months', '18 months'];
    $('.linechart1').highcharts({
      chart: {
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
          text: 'Number'
        },
        min: 0,
        max: 1000,
        plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
        }]
      },
      legend: {
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
        borderWidth: 0
      },
      plotOptions: {
          line: {
              marker: {
                  radius: 3,
                  symbol: 'circle'
              }
          }
      },
      series: [{
        name: 'Male',
        data: [340, 490, 500, 550]
      }, {
        name: 'Female',
        data: [70, 90, 100, 140]
      }, {
        name: 'All',
        data: [600, 690, 810, 850]
      }, {
        name: 'Overall target',
        data: [750, 750, 750, 750]
      }],
      credits: {
        enabled: false
      }
    });