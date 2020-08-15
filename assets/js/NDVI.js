mapboxgl.accessToken = 'pk.eyJ1IjoiY2luZHl2dTQiLCJhIjoiY2sydzVleGJ3MGNkNDNpcW1odG1icDEwciJ9._9FHgo3Qa682z450P9Xz_w';

var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [20, 20],
    zoom: 0.78
});

var afterMap = new mapboxgl.Map({
    container: 'after',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [20, 20],
    zoom: 0.78
});

var map = new mapboxgl.Compare(beforeMap, afterMap, {
    // Set this to enable comparing two maps by mouse movement:
    //mousemove: true
});
