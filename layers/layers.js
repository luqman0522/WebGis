var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LOT_1 = new ol.format.GeoJSON();
var features_LOT_1 = format_LOT_1.readFeatures(json_LOT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT_1.addFeatures(features_LOT_1);
var lyr_LOT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT_1, 
                style: style_LOT_1,
                popuplayertitle: 'LOT',
                interactive: true,
                title: '<img src="styles/legend/LOT_1.png" /> LOT'
            });
var format_TANDA_SEMPADAN_2 = new ol.format.GeoJSON();
var features_TANDA_SEMPADAN_2 = format_TANDA_SEMPADAN_2.readFeatures(json_TANDA_SEMPADAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANDA_SEMPADAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANDA_SEMPADAN_2.addFeatures(features_TANDA_SEMPADAN_2);
var lyr_TANDA_SEMPADAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANDA_SEMPADAN_2, 
                style: style_TANDA_SEMPADAN_2,
                popuplayertitle: 'TANDA_SEMPADAN',
                interactive: true,
                title: '<img src="styles/legend/TANDA_SEMPADAN_2.png" /> TANDA_SEMPADAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LOT_1.setVisible(true);lyr_TANDA_SEMPADAN_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LOT_1,lyr_TANDA_SEMPADAN_2];
lyr_LOT_1.set('fieldAliases', {'AREA': 'AREA', 'NO_LOT': 'NO_LOT', 'layer': 'layer', 'path': 'path', });
lyr_TANDA_SEMPADAN_2.set('fieldAliases', {'FID': 'FID', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'distance': 'distance', 'angle': 'angle', 'x': 'x', 'y': 'y', 'layer': 'layer', 'path': 'path', });
lyr_LOT_1.set('fieldImages', {'AREA': '', 'NO_LOT': '', 'layer': '', 'path': '', });
lyr_TANDA_SEMPADAN_2.set('fieldImages', {'FID': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'distance': '', 'angle': '', 'x': '', 'y': '', 'layer': '', 'path': '', });
lyr_LOT_1.set('fieldLabels', {'AREA': 'header label - visible with data', 'NO_LOT': 'header label - visible with data', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_TANDA_SEMPADAN_2.set('fieldLabels', {'FID': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'distance': 'no label', 'angle': 'no label', 'x': 'no label', 'y': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TANDA_SEMPADAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});