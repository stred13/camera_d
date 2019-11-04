$(function () {
  var custom_values = [500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000, 4500000, 5000000];
  var f = custom_values.indexOf(500000);
  var t = custom_values.indexOf(5000000);
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    grid: true,
    skin: "big",
    min: 500000,
    max: 5000000,
    from: f,
    to: t,
    step: 500000,
    prettify_enabled: true,
    prettify_separator: ".",
    values: custom_values
  });

  $('#tname').text('asasd');
  $(document).on('click', '#addbtn', function (e) {
    e.preventDefault();

    var name ='';
    var urlImage ='';
    var producer ='';
    var watchviews ='';
    var type = '';    
    var position ='';
    var price ='';
    var promotion =''
    var maintenance ='';
    var note ='';

    var jsproduct ={};

    name = $('#namep').val();
    producer =  $('#slNSX').val();
    type = $('#slType').val();
    var namepro = $('#slNSX option:selected').text().toLowerCase();
    var nametype = $('#slType option:selected').text().toLowerCase();
    position =$('#slpos').val()-1;
    price = $('#fprice').val();
    promotion =$('#fpromo').val();
    maintenance =$('#maint').val();
    note = $('#info').val();
    watchviews = $('#wv').val();
    urlImage = 'image/product/'+ namepro +'/'+nametype+'/'+ $('#fImage')[0].files[0].name;


    jsproduct.name = name;
    jsproduct.urlImage = urlImage;
    jsproduct.producer = producer;
    jsproduct.watchviews = watchviews;
    jsproduct.type = type;
    jsproduct.position = position;
    jsproduct.price = price;
    jsproduct.promotion = promotion;
    jsproduct.maintenance = maintenance;
    jsproduct.note = note;

    var jsdata = JSON.stringify(jsproduct);
    console.log('name: '+jsdata);
  })
})

