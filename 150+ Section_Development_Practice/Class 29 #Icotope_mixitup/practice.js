$('.project-item').isotope();




// Filter Process 
$(".project-title li").on('click', function () {

    $(".project-title li").removeClass("active");
    $(this).addClass("active");


    var selector = $(this).attr('data-filter');
    $(".project-item").isotope({
        filter: selector
    });


});
