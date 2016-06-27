$('.barchart2').highcharts({
    chart: {
      type: 'bar'
    },

    title: {
      text: ''
    },

    xAxis: {
      categories: ['Unemployed', 'Employed', 'Self Employed'],
      title: {
        text: null
      }
    },

    yAxis: {
      min: 0,
      title: {
        text: 'Number'
      }
    },

    series: [{
      "name": "Male",
      "data": [3, 3, 4]
    }, {
      "name": "Female",
      "data": [8, 4, 4]
    }],
    credits: {
      enabled: false
    }
  });