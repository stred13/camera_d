$(function () {
    $.ajax({
        contentType: 'application/json; charset=utf-8',
        type: 'GET',
        url: '/posting/all',
        traditional: true,
        data:jsondata,
        success: function(result) {
            
        }
    });
})