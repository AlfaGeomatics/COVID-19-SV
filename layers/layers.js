var wms_layers = [];


        var lyr_GoogleMapSatellite_0 = new ol.layer.Tile({
            'title': 'Google Map Satellite',
            'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                interactive: true,
    title: 'Municipios<br />\
    <img src="styles/legend/Municipios_1_0.png" /> 0<br />\
    <img src="styles/legend/Municipios_1_1.png" /> 1<br />\
    <img src="styles/legend/Municipios_1_2.png" /> 2<br />\
    <img src="styles/legend/Municipios_1_3.png" /> 3<br />\
    <img src="styles/legend/Municipios_1_4.png" /> 4<br />\
    <img src="styles/legend/Municipios_1_5.png" /> 5<br />\
    <img src="styles/legend/Municipios_1_6.png" /> 7<br />\
    <img src="styles/legend/Municipios_1_7.png" /> 9<br />\
    <img src="styles/legend/Municipios_1_8.png" /> 24<br />'
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: false,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });

lyr_GoogleMapSatellite_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_Departamentos_2.setVisible(true);
var layersList = [lyr_GoogleMapSatellite_0,lyr_Municipios_1,lyr_Departamentos_2];
lyr_Municipios_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'POBLACIÓN': 'POBLACIÓN', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', 'CASOS 20042020': 'CASOS 20042020', });
lyr_Departamentos_2.set('fieldAliases', {'fid': 'fid', 'NA2': 'NA2', 'NA3': 'NA3', 'NAM': 'NAM', 'AREA_KM': 'AREA_KM', 'PERIMETRO': 'PERIMETRO', });
lyr_Municipios_1.set('fieldImages', {'fid': '', 'id': '', 'CODIGO': '', 'NOMBRE': '', 'POBLACIÓN': '', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', 'CASOS 20042020': 'Range', });
lyr_Departamentos_2.set('fieldImages', {'fid': '', 'NA2': 'TextEdit', 'NA3': 'TextEdit', 'NAM': 'TextEdit', 'AREA_KM': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'fid': 'inline label', 'id': 'inline label', 'CODIGO': 'inline label', 'NOMBRE': 'inline label', 'POBLACIÓN': 'inline label', 'AREA_KM': 'inline label', 'PERIMETRO': 'inline label', 'CASOS 20042020': 'inline label', });
lyr_Departamentos_2.set('fieldLabels', {'fid': 'no label', 'NA2': 'no label', 'NA3': 'no label', 'NAM': 'no label', 'AREA_KM': 'no label', 'PERIMETRO': 'no label', });
lyr_Departamentos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});