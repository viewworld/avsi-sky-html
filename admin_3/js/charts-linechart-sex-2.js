
  var categories = ['Start', '6 months', '12 months', '18 months'];
  $('.linechart-sex-2').highcharts({
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
      plotOptions: {
          line: {
              marker: {
                  radius: 3,
                  symbol: 'circle'
              }
          }
      },
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      name: 'Male',
      data: [105, 135, 150, 220]
    }, {
      name: 'Female',
      data: [360, 410, 550, 690]
    }, {
      name: 'All',
      data: [540, 615, 760, 980]
    }, {
      name: 'Overall target',
      data: [750, 750, 750, 750]
    }],
    credits: {
      enabled: false
    }
  });