var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_mergePA_1 = new ol.format.GeoJSON();
var features_mergePA_1 = format_mergePA_1.readFeatures(json_mergePA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mergePA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mergePA_1.addFeatures(features_mergePA_1);
var lyr_mergePA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mergePA_1, 
                style: style_mergePA_1,
                popuplayertitle: 'mergePA',
                interactive: true,
                title: '<img src="styles/legend/mergePA_1.png" /> mergePA'
            });
var format_MergeTANDASEMPADAN_2 = new ol.format.GeoJSON();
var features_MergeTANDASEMPADAN_2 = format_MergeTANDASEMPADAN_2.readFeatures(json_MergeTANDASEMPADAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergeTANDASEMPADAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergeTANDASEMPADAN_2.addFeatures(features_MergeTANDASEMPADAN_2);
var lyr_MergeTANDASEMPADAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MergeTANDASEMPADAN_2, 
                style: style_MergeTANDASEMPADAN_2,
                popuplayertitle: 'MergeTANDASEMPADAN',
                interactive: true,
                title: '<img src="styles/legend/MergeTANDASEMPADAN_2.png" /> MergeTANDASEMPADAN'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_mergePA_1.setVisible(true);lyr_MergeTANDASEMPADAN_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_mergePA_1,lyr_MergeTANDASEMPADAN_2];
lyr_mergePA_1.set('fieldAliases', {'FID': 'FID', 'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'tsp — hakm': 'tsp — hakm', 'tsp — ha_1': 'tsp — ha_1', 'tsp — pemi': 'tsp — pemi', 'layer': 'layer', 'path': 'path', });
lyr_MergeTANDASEMPADAN_2.set('fieldAliases', {'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'distance': 'distance', 'angle': 'angle', 'FID': 'FID', 'vertex_p_2': 'vertex_p_2', 'path': 'path', });
lyr_mergePA_1.set('fieldImages', {'FID': '', 'NO_LOT': '', 'AREA': '', 'tsp — hakm': '', 'tsp — ha_1': '', 'tsp — pemi': '', 'layer': '', 'path': '', });
lyr_MergeTANDASEMPADAN_2.set('fieldImages', {'Layer': '', 'PaperSpace': '', 'SubClasses': '', 'Linetype': '', 'EntityHand': '', 'Text': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'distance': '', 'angle': '', 'FID': '', 'vertex_p_2': '', 'path': '', });
lyr_mergePA_1.set('fieldLabels', {'FID': 'no label', 'NO_LOT': 'no label', 'AREA': 'no label', 'tsp — hakm': 'no label', 'tsp — ha_1': 'no label', 'tsp — pemi': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MergeTANDASEMPADAN_2.set('fieldLabels', {'Layer': 'header label - visible with data', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHand': 'no label', 'Text': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'distance': 'no label', 'angle': 'no label', 'FID': 'no label', 'vertex_p_2': 'no label', 'path': 'no label', });
lyr_MergeTANDASEMPADAN_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});