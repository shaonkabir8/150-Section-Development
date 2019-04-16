// Activate Isotope 
$('.project-list').isotope();


// Filter Process 
$(".project li").on('click', function() {
                   var selector =$(this).attr('data-filter');
                        $(".project-list").isotope({
                            filter: selector
                        });
                    
                    
                    });

