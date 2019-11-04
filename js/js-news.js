$(function () {
    console.log($('.pa').text());
    var c = 0;
    var arr = [];
    c = $('.pa').text().split("\\n").length;

    arr = $('.pa').text().split("\\n");
    console.log(arr);

    for(var i =0;i<arr.size;i++){
        if(arr[i]!='\\n')
            console.log(arr[i]);
    }

})