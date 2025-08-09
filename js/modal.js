// $(document).ready(function() {
//   $.getJSON('imgcountjson.json', function(data) {
//     // your code to process data
//     console.log(data);
    
//   });
// });

$(document).ready(function () {
    $('.content').click(function () {

        let imgId = $(this).find('.button-img').attr('id'); // e.g. "doc1_img1"
        let folderName = imgId; // if folder matches id exactly
        let numImages = 7;

        let $swiperWrapper = $('.modal-card-swiper .swiper-wrapper');
        $swiperWrapper.empty(); // clear old slides

        for (let i = 1; i <= numImages; i++) {
            let imgSrc = `./images/${folderName}/img (${i}).png`;
            let slide = `<li class="card-item swiper-slide modal-li">
                        <img src="${imgSrc}">
                     </li>`;
            $swiperWrapper.append(slide);
        }

        modalSwiper.update();
        $('body').addClass('modal-active');
        $('.modal-card-swiper').show();

        var card_wrapperId = imgId.split('img')[1];
        var buttonId = $(this).attr('id');
        $('#modal-container').removeAttr('class').addClass(buttonId);
        $('.submenu').css('display', 'none');
        $('body').addClass('modal-active');
        $('#slide' + card_wrapperId).css('display', 'block');

        $('.close').css('visibility', 'visible');

        $('#prev_btn').css('visibility', 'hidden');
        $('#next_btn').css('visibility', 'hidden');
        $('#left-menu').css('visibility', 'hidden');
        $('#right-menu').css('visibility', 'hidden');
        $('#menu').css('visibility', 'hidden');
        $('.close').click(function () {
            $('#modal-container').addClass('out');
            $('.submenu').css('display', 'block');
            $('.close').css('visibility', 'hidden');

            // $('#menu').append(submenuBackup);
            $('#slide' + card_wrapperId).css('display', 'none');
            $('body').removeClass('modal-active');

            $('#prev_btn').css('visibility', 'visible');
            $('#next_btn').css('visibility', 'visible');
            $('#left-menu').css('visibility', 'visible');
            $('#right-menu').css('visibility', 'visible');
            $('#menu').css('visibility', 'visible');
        });

    })
});