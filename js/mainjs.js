$(function () {
    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos/1',
        crossDomain: true,
        crossOrigin: true,
        success: function (result) {
            var html = '';
            var display = 'none';

            $.each(result, function (idx, item) {
                console.log(item);
                if (item.promotion != 0) {
                    display = 'show'
                } else
                    display = 'none';
                html += `
                <div class="col-12 col-sm-6 col-md-3 p-2">
                	<div class="container-fullwidth" style="position: absolute;z-index: 99;`+ `display:` + display + `">
                		<div class="pr-1"
                			style="background: red;border-left: 1px solid black;border-top: 1px solid black">
                        <span class="text-light" style="font-size: 20px;">
                            <strong>${item.promotion}%</strong>
                        </span>
                    </div>
                </div>
                <div class="card" style="border: 1px solid black;">
                    <img id="proImg"class="img-fluid" src="${item.urlImage}"
                        alt="Card image cap">
                    <div class="card-body p-0 bg-light"
                        style="text-align: center;border-top: 2px solid black;">
                        <h6 class="card-title m-0 " style="color: black">${item.name}</h6>
                        <span class="card-text font-weight-bold price-font"
                            style="color: red">${item.price}</span>
                        <span style="color: red">₫</span>
                        <a href="/abc" class="stretched-link"></a>
                    </div>
                </div>
            </div>
                `;
            });

            $('#products').html(html);
        }
    });

    $(document).on('click', '.infoproduct', function(){
    	var linkto='';
    	linkto = $(this).attr('href');
        alert("success",linkto);
    	$.ajax({
    		type: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/1',
            crossDomain:true,
            crossOrigin:true,
            success: function(result) {
            	$(document).load("product_info.html");
            }
    	})
        
    });
})