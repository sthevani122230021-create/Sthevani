var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_PESISIRBARAT_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PESISIR BARAT<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PESISIRBARAT_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11531563.631721, -662859.739639, 11651353.631721, -532514.757137]
        })
    });
var format_BATAS_ADMINISTRASI_2 = new ol.format.GeoJSON();
var features_BATAS_ADMINISTRASI_2 = format_BATAS_ADMINISTRASI_2.readFeatures(json_BATAS_ADMINISTRASI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATAS_ADMINISTRASI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATAS_ADMINISTRASI_2.addFeatures(features_BATAS_ADMINISTRASI_2);
var lyr_BATAS_ADMINISTRASI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATAS_ADMINISTRASI_2, 
                style: style_BATAS_ADMINISTRASI_2,
                popuplayertitle: 'BATAS_ADMINISTRASI',
                interactive: true,
                title: '<img src="styles/legend/BATAS_ADMINISTRASI_2.png" /> BATAS_ADMINISTRASI'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PESISIRBARAT_1.setVisible(true);lyr_BATAS_ADMINISTRASI_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PESISIRBARAT_1,lyr_BATAS_ADMINISTRASI_2];
lyr_BATAS_ADMINISTRASI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATAS_ADMINISTRASI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATAS_ADMINISTRASI_2.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'KDBBPS': 'inline label - visible with data', 'KDCBPS': 'inline label - visible with data', 'KDCPUM': 'inline label - visible with data', 'KDEBPS': 'inline label - visible with data', 'KDEPUM': 'inline label - visible with data', 'KDPBPS': 'inline label - visible with data', 'KDPKAB': 'inline label - visible with data', 'KDPPUM': 'inline label - visible with data', 'LUASWH': 'inline label - visible with data', 'TIPADM': 'inline label - visible with data', 'WADMKC': 'inline label - visible with data', 'WADMKD': 'inline label - visible with data', 'WADMKK': 'inline label - visible with data', 'WADMPR': 'inline label - visible with data', 'WIADKC': 'inline label - visible with data', 'WIADKK': 'inline label - visible with data', 'WIADPR': 'inline label - visible with data', 'WIADKD': 'inline label - visible with data', 'UUPP': 'inline label - visible with data', 'LUAS': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_BATAS_ADMINISTRASI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});