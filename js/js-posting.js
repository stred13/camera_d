$(function () {

    $('.filechosen').change(function(){
       console.log($('.filechosen')[0].files[0].name);
    });

    $(document).on('click', '#btnMedia', function (e) {
        e.preventDefault();
        var comp = '';
        comp = `<div class="col-sm-4">
        <label class="font-weight-bold mb-0 mt-2" style="font-size: 1.1em;"
            for="paragraphh">Đoạn</label>
        <input type="number" class="form-control paragraph" placeholder="Đoạn">
     </div>
     <div class="col-sm-8">
        <label class="font-weight-bold mt-2" style="font-size: 1.1em;"
            for="filechosen">Chọn hình</label>
        <input type="file" class="form-control-file filechosen">
     </div>`;
        $('#me').prepend(comp);
    });

    $(document).on('click', '#btnsub', function (e) {
        e.preventDefault();

        var title = '';
        var intro = '';
        var body = '';
        var numpara = $('.paragraph').length;
        var numfile = $('.filechosen').length;
        var jsonnm = {};

        title = $('#titlenew').val();
        intro = $('#intro').val();
        body = $('#body').val();

        jsonnm.news = {};
        jsonnm.news.title = title;
        jsonnm.news.intro = intro;
        jsonnm.news.body = body;

        jsonnm.media = [];
        var jsondata = JSON.stringify(jsonnm);
        

        console.log(jsondata);
        /*$.ajax({
            contentType: 'application/json; charset=utf-8',
            type: 'GET',
            url: '/admin/posting',
            traditional: true,
            data:jsondata,
            success: function(result) {
            }
        });*/
    });
})