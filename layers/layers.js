var wms_layers = [];


        var lyr_GoogleMapSatellite_0 = new ol.layer.Tile({
            'title': 'Google Map Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lim_Municipal_1 = new ol.format.GeoJSON();
var features_Lim_Municipal_1 = format_Lim_Municipal_1.readFeatures(json_Lim_Municipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lim_Municipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lim_Municipal_1.addFeatures(features_Lim_Municipal_1);
var lyr_Lim_Municipal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lim_Municipal_1, 
                style: style_Lim_Municipal_1,
                interactive: true,
    title: 'Lim_Municipal<br />\
    <img src="styles/legend/Lim_Municipal_1_0.png" /> 0<br />\
    <img src="styles/legend/Lim_Municipal_1_1.png" /> 1<br />\
    <img src="styles/legend/Lim_Municipal_1_2.png" /> 2<br />\
    <img src="styles/legend/Lim_Municipal_1_3.png" /> 3<br />\
    <img src="styles/legend/Lim_Municipal_1_4.png" /> 4<br />'
        });
var format_Lim_Departamental_2 = new ol.format.GeoJSON();
var features_Lim_Departamental_2 = format_Lim_Departamental_2.readFeatures(json_Lim_Departamental_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lim_Departamental_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lim_Departamental_2.addFeatures(features_Lim_Departamental_2);
var lyr_Lim_Departamental_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lim_Departamental_2, 
                style: style_Lim_Departamental_2,
                interactive: false,
                title: '<img src="styles/legend/Lim_Departamental_2.png" /> Lim_Departamental'
            });

lyr_GoogleMapSatellite_0.setVisible(true);lyr_Lim_Municipal_1.setVisible(true);lyr_Lim_Departamental_2.setVisible(true);
var layersList = [lyr_GoogleMapSatellite_0,lyr_Lim_Municipal_1,lyr_Lim_Departamental_2];
lyr_Lim_Municipal_1.set('fieldAliases', {'NA2': 'NA2', 'PPL': 'PPL', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', 'COVID_19_CASOS': 'COVID_19_CASOS', });
lyr_Lim_Departamental_2.set('fieldAliases', {'FCODE': 'FCODE', 'UID': 'UID', 'ASD': 'ASD', 'COD': 'COD', 'IC5': 'IC5', 'NA2': 'NA2', 'NA3': 'NA3', 'NAM': 'NAM', 'ACC': 'ACC', 'CCN': 'CCN', 'SDV': 'SDV', 'SDP': 'SDP', 'SRT': 'SRT', 'TXT': 'TXT', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_Lim_Municipal_1.set('fieldImages', {'NA2': 'TextEdit', 'PPL': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', 'COVID_19_CASOS': 'Range', });
lyr_Lim_Departamental_2.set('fieldImages', {'FCODE': 'TextEdit', 'UID': 'TextEdit', 'ASD': 'Range', 'COD': 'Range', 'IC5': 'Range', 'NA2': 'TextEdit', 'NA3': 'TextEdit', 'NAM': 'TextEdit', 'ACC': 'Range', 'CCN': 'TextEdit', 'SDV': 'TextEdit', 'SDP': 'TextEdit', 'SRT': 'Range', 'TXT': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_Lim_Municipal_1.set('fieldLabels', {'NA2': 'header label', 'PPL': 'header label', 'AREA_KM': 'header label', 'PERIMETRO': 'header label', 'COVID_19_CASOS': 'header label', });
lyr_Lim_Departamental_2.set('fieldLabels', {'FCODE': 'no label', 'UID': 'no label', 'ASD': 'no label', 'COD': 'no label', 'IC5': 'no label', 'NA2': 'no label', 'NA3': 'no label', 'NAM': 'no label', 'ACC': 'no label', 'CCN': 'no label', 'SDV': 'no label', 'SDP': 'no label', 'SRT': 'no label', 'TXT': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_Lim_Departamental_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});