ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([46.415818, 24.271795, 47.066010, 24.887002]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_____10__831_2 = new ol.format.GeoJSON();
var features_____10__831_2 = format_____10__831_2.readFeatures(json_____10__831_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_____10__831_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____10__831_2.addFeatures(features_____10__831_2);
var lyr_____10__831_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____10__831_2, 
                style: style_____10__831_2,
                popuplayertitle: 'جودة_البيانات_والتدقيق_حتي_10_شهر_8 (3)1',
                interactive: true,
                title: '<img src="styles/legend/____10__831_2.png" /> جودة_البيانات_والتدقيق_حتي_10_شهر_8 (3)1'
            });
var format_Dis_Riyadh_SPL_3 = new ol.format.GeoJSON();
var features_Dis_Riyadh_SPL_3 = format_Dis_Riyadh_SPL_3.readFeatures(json_Dis_Riyadh_SPL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Dis_Riyadh_SPL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dis_Riyadh_SPL_3.addFeatures(features_Dis_Riyadh_SPL_3);
var lyr_Dis_Riyadh_SPL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dis_Riyadh_SPL_3, 
                style: style_Dis_Riyadh_SPL_3,
                popuplayertitle: 'Dis_Riyadh_SPL',
                interactive: false,
                title: '<img src="styles/legend/Dis_Riyadh_SPL_3.png" /> Dis_Riyadh_SPL'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'الاحياء الاعلى طلبات',
                interactive: false,
    title: 'الاحياء الاعلى طلبات<br />\
    <img src="styles/legend/_4_0.png" /> 1<br />\
    <img src="styles/legend/_4_1.png" /> 2<br />\
    <img src="styles/legend/_4_2.png" /> 3<br />\
    <img src="styles/legend/_4_3.png" /> 4<br />\
    <img src="styles/legend/_4_4.png" /> 5<br />\
    <img src="styles/legend/_4_5.png" /> 6<br />\
    <img src="styles/legend/_4_6.png" /> 7<br />\
    <img src="styles/legend/_4_7.png" /> منخفضة <br />\
    <img src="styles/legend/_4_8.png" /> اقل من المتوسط <br />\
    <img src="styles/legend/_4_9.png" /> متوسطة<br />\
    <img src="styles/legend/_4_10.png" /> اعلي من المتوسط <br />\
    <img src="styles/legend/_4_11.png" /> اقل من المرتفع <br />\
    <img src="styles/legend/_4_12.png" /> مرتفعة <br />' });
var format_____13_14__16_17__8____5 = new ol.format.GeoJSON();
var features_____13_14__16_17__8____5 = format_____13_14__16_17__8____5.readFeatures(json_____13_14__16_17__8____5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_____13_14__16_17__8____5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_____13_14__16_17__8____5.addFeatures(features_____13_14__16_17__8____5);
var lyr_____13_14__16_17__8____5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_____13_14__16_17__8____5, 
                style: style_____13_14__16_17__8____5,
                popuplayertitle: 'الطلبات_التم_تنفيذها_يوم_13_و14_و_16و_17_شهر_8_بالمواقع_لاكن_غير',
                interactive: true,
                title: '<img src="styles/legend/____13_14__16_17__8____5.png" /> الطلبات_التم_تنفيذها_يوم_13_و14_و_16و_17_شهر_8_بالمواقع_لاكن_غير'
            });
var format_17161413_6 = new ol.format.GeoJSON();
var features_17161413_6 = format_17161413_6.readFeatures(json_17161413_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_17161413_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17161413_6.addFeatures(features_17161413_6);
var lyr_17161413_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_17161413_6, 
                style: style_17161413_6,
                popuplayertitle: 'يوم17و16و14ز13',
                interactive: true,
                title: '<img src="styles/legend/17161413_6.png" /> يوم17و16و14ز13'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_____10__831_2.setVisible(true);lyr_Dis_Riyadh_SPL_3.setVisible(false);lyr__4.setVisible(false);lyr_____13_14__16_17__8____5.setVisible(true);lyr_17161413_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_____10__831_2,lyr_Dis_Riyadh_SPL_3,lyr__4,lyr_____13_14__16_17__8____5,lyr_17161413_6];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_____10__831_2.set('fieldAliases', {'رقم البلاغ/الطلب': 'رقم البلاغ/الطلب', 'رقم المنزل': 'رقم المنزل', 'الحي': 'الحي', 'خط الطول': 'خط الطول', 'خط العرض': 'خط العرض', 'اخصائي الاستكشاف': 'اخصائي الاستكشاف', 'التاريخ': 'التاريخ', 'حالة الطلب': 'حالة الطلب', 'الملاحظات': 'الملاحظات', 'البلدية': 'البلدية', 'رقم الهاتف': 'رقم الهاتف', 'مقدم الطلب': 'مقدم الطلب', 'نوع الحشرات': 'نوع الحشرات', 'الشارع': 'الشارع', 'السنة الهجرية': 'السنة الهجرية', 'تاريخ تقديم الطلب': 'تاريخ تقديم الطلب', 'نوع المبني': 'نوع المبني', });
lyr_Dis_Riyadh_SPL_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'التكر': 'التكر', });
lyr_____13_14__16_17__8____5.set('fieldAliases', {'حالة الطلب': 'حالة الطلب', 'رقم الطلب': 'رقم الطلب', 'خط الطول': 'خط الطول', 'دوائر العرض': 'دوائر العرض', 'تاريخ تنفيذ الطلب': 'تاريخ تنفيذ الطلب', 'اسم الاخصائي': 'اسم الاخصائي', 'سنة الطلب': 'سنة الطلب', 'تاريخ الطلب': 'تاريخ الطلب', 'اسم مقدم الطلب': 'اسم مقدم الطلب', 'رقم مقدم الطلب': 'رقم مقدم الطلب', 'البلدية': 'البلدية', 'الحي': 'الحي', 'الشارع': 'الشارع', 'نوع الحشرة': 'نوع الحشرة', 'نوع المبني': 'نوع المبني', 'ملاحظات': 'ملاحظات', 'عمود': 'عمود', 'التكرار': 'التكرار', });
lyr_17161413_6.set('fieldAliases', {'حالة �': 'حالة �', 'رقم ا�': 'رقم ا�', 'خط ال�': 'خط ال�', 'دوائر': 'دوائر', 'تاريخ': 'تاريخ', 'اسم ا�': 'اسم ا�', 'سنة ا�': 'سنة ا�', 'تاري_1': 'تاري_1', 'اسم م�': 'اسم م�', 'رقم م�': 'رقم م�', 'البلد': 'البلد', 'الحي': 'الحي', 'الشار': 'الشار', 'نوع ا�': 'نوع ا�', 'نوع �_1': 'نوع �_1', 'ملاحظ': 'ملاحظ', 'عمود': 'عمود', 'التكر': 'التكر', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'name': '', 'amenity': '', 'brand': '', 'wheelchair': '', });
lyr_____10__831_2.set('fieldImages', {'رقم البلاغ/الطلب': 'TextEdit', 'رقم المنزل': 'Range', 'الحي': 'TextEdit', 'خط الطول': 'TextEdit', 'خط العرض': 'TextEdit', 'اخصائي الاستكشاف': 'TextEdit', 'التاريخ': 'TextEdit', 'حالة الطلب': 'TextEdit', 'الملاحظات': 'TextEdit', 'البلدية': 'TextEdit', 'رقم الهاتف': 'Range', 'مقدم الطلب': 'TextEdit', 'نوع الحشرات': 'TextEdit', 'الشارع': 'TextEdit', 'السنة الهجرية': 'Range', 'تاريخ تقديم الطلب': 'TextEdit', 'نوع المبني': 'TextEdit', });
lyr_Dis_Riyadh_SPL_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr__4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'التكر': 'Range', });
lyr_____13_14__16_17__8____5.set('fieldImages', {'حالة الطلب': 'TextEdit', 'رقم الطلب': 'TextEdit', 'خط الطول': 'TextEdit', 'دوائر العرض': 'TextEdit', 'تاريخ تنفيذ الطلب': 'TextEdit', 'اسم الاخصائي': 'TextEdit', 'سنة الطلب': 'Range', 'تاريخ الطلب': 'DateTime', 'اسم مقدم الطلب': 'TextEdit', 'رقم مقدم الطلب': 'Range', 'البلدية': 'TextEdit', 'الحي': 'TextEdit', 'الشارع': 'TextEdit', 'نوع الحشرة': 'TextEdit', 'نوع المبني': 'TextEdit', 'ملاحظات': 'TextEdit', 'عمود': 'TextEdit', 'التكرار': 'CheckBox', });
lyr_17161413_6.set('fieldImages', {'حالة �': 'TextEdit', 'رقم ا�': 'TextEdit', 'خط ال�': 'TextEdit', 'دوائر': 'TextEdit', 'تاريخ': 'TextEdit', 'اسم ا�': 'TextEdit', 'سنة ا�': 'TextEdit', 'تاري_1': 'DateTime', 'اسم م�': 'TextEdit', 'رقم م�': 'TextEdit', 'البلد': 'TextEdit', 'الحي': 'TextEdit', 'الشار': 'TextEdit', 'نوع ا�': 'TextEdit', 'نوع �_1': 'TextEdit', 'ملاحظ': 'TextEdit', 'عمود': 'TextEdit', 'التكر': 'CheckBox', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_____10__831_2.set('fieldLabels', {'رقم البلاغ/الطلب': 'no label', 'رقم المنزل': 'no label', 'الحي': 'no label', 'خط الطول': 'no label', 'خط العرض': 'no label', 'اخصائي الاستكشاف': 'no label', 'التاريخ': 'no label', 'حالة الطلب': 'no label', 'الملاحظات': 'no label', 'البلدية': 'no label', 'رقم الهاتف': 'no label', 'مقدم الطلب': 'no label', 'نوع الحشرات': 'no label', 'الشارع': 'no label', 'السنة الهجرية': 'no label', 'تاريخ تقديم الطلب': 'no label', 'نوع المبني': 'no label', });
lyr_Dis_Riyadh_SPL_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'التكر': 'no label', });
lyr_____13_14__16_17__8____5.set('fieldLabels', {'حالة الطلب': 'no label', 'رقم الطلب': 'no label', 'خط الطول': 'no label', 'دوائر العرض': 'no label', 'تاريخ تنفيذ الطلب': 'no label', 'اسم الاخصائي': 'no label', 'سنة الطلب': 'no label', 'تاريخ الطلب': 'no label', 'اسم مقدم الطلب': 'no label', 'رقم مقدم الطلب': 'no label', 'البلدية': 'no label', 'الحي': 'no label', 'الشارع': 'no label', 'نوع الحشرة': 'no label', 'نوع المبني': 'no label', 'ملاحظات': 'no label', 'عمود': 'no label', 'التكرار': 'no label', });
lyr_17161413_6.set('fieldLabels', {'حالة �': 'no label', 'رقم ا�': 'no label', 'خط ال�': 'no label', 'دوائر': 'no label', 'تاريخ': 'no label', 'اسم ا�': 'no label', 'سنة ا�': 'no label', 'تاري_1': 'no label', 'اسم م�': 'no label', 'رقم م�': 'no label', 'البلد': 'no label', 'الحي': 'no label', 'الشار': 'no label', 'نوع ا�': 'no label', 'نوع �_1': 'no label', 'ملاحظ': 'no label', 'عمود': 'no label', 'التكر': 'no label', });
lyr_17161413_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});