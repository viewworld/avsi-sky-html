
    var youths = new L.LayerGroup();
    var businesses = new L.LayerGroup();
    var institutions = new L.LayerGroup();

    var greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    var orangeIcon = new L.Icon({
      iconUrl: 'imgpsh_fullsize.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    //Western
    L.marker([0.53832, 31.0578], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);
    L.marker([0.30762, 30.70624], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);

    L.marker([-0.01099, 31.14569], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);
    L.marker([0, 30.45355], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);

    L.marker([1.31824, 31.20062]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);
    L.marker([0.65917, 30.27777]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);

    //Central
    L.marker([1.53, 32.21], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);
    L.marker([0.99971, 32.76068], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);

    L.marker([1.01069, 32.15643], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);
    L.marker([0.72508, 32.92548], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);

    L.marker([0.72508, 32.28827]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);
    L.marker([0.58227, 32.9035]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);

    //Eastern
    L.marker([1.57085, 34.41962], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);
    L.marker([1.24136, 34.40863], {
      icon: greenIcon
    }).bindPopup("<b>Youth</b><br>I am a popup.").addTo(youths);

    L.marker([0.92281, 34.22186], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);
    L.marker([0.8569, 33.90326], {
      icon: orangeIcon
    }).bindPopup("<b>Business</b><br>I am a popup.").addTo(businesses);

    L.marker([0.58227, 34.02411]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);
    L.marker([0.36255, 33.93622]).bindPopup("<b>Institution</b><br>I am a popup.").addTo(institutions);


    //Baselayer
    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

    var grayscale = L.tileLayer(mbUrl, {
      id: 'mapbox.light'
    });


    //Map properties
    var mymap = L.map('mapid', {
      center: [1.53, 32.21],
      zoom: 7,
      layers: [grayscale, youths, businesses, institutions]
    });

    mymap.scrollWheelZoom.disable();

    //Layer switcher
    var overlayMaps = {
      "Youths": youths,
      "Businesses": businesses,
      "Institutions": institutions
    };


    L.control.layers(null, overlayMaps, {
      collapsed: false
    }).addTo(mymap);
