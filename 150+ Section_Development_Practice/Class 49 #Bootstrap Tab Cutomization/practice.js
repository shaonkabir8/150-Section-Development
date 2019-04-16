$(document).ready(function() {
    
    $(".tab-header li").on('click', function() {
        $(".tab-header li.active").removeClass('active');
        $(this).addClass('active');
    });
    
});


