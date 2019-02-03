var map;
var myCollection;	
ymaps.ready(function () {
	map = new ymaps.Map('ymap', {
		center: [ 55.767818, 37.631442 ],
		zoom: 18
	});
    myPlacemark = new ymaps.Placemark(map.getCenter(), {
            balloonContent: 'г. Москва ул. Сретенка, 9',
            iconCaption: ''
    }, {
         preset: 'islands#redDotIcon'
    }),
	map.behaviors.disable('scrollZoom'); 
	map.geoObjects.add(myPlacemark);
	map.events.add('click', function onMapClick(e) {
		if(map.behaviors.isEnabled('scrollZoom')) {
			map.events.remove('click', onMapClick);
		} else {
			map.behaviors.enable(['scrollZoom']);
		}
	});
})