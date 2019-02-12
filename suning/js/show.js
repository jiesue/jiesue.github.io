
$(function () {
    // $('.category-nav-level-1').hover(function () {
    //     $('.category-nav-item-1-wrap').css('display','block')
    // },function () {
    //     $('.category-nav-item-1-wrap').css('display','none')
    // });
    $('.category-nav-item-1').hover(function () {
        $(this).find('.detailed').css('display','block')
    },function () {
        $(this).find('.detailed').css('display','none')
    })
}); 