navigator.geolocation.getCurrentPosition(function(position){
    coords = position.coords;
    console.log(coords);
    let latitude = position.coords.latitude; // широта
    let longitude = position.coords.longitude; // долгота
    let link = document.querySelector('.link')
    let path = 'https://www.openstreetmap.org/#map=18/'+latitude +'/'+ longitude;


        let map = new ol.Map({
        target:'map',
        layers : [
            new ol.layer.Tile({
                source:new ol.source.OSM()
            })
        ],
        view : new ol.View({
            center :ol.proj.fromLonLat([37.41,8.82]),
            zoom:10
        })
    });
});
