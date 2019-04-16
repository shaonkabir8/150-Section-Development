// For Changing the active status of Tab List
$(document).ready(function(){
    $(".tab-list ul li").on('click', function(){
        $(".tab-list ul li.active").removeClass('active');
        $(this).addClass('active');
    });
});