new Swiper('.main-card-swiper', {
    loop: true,
    speed: 700,
    spaceBetween: 10,

    // If we need pagination  
    pagination: {
        el: '#main-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows  
    navigation: {
        nextEl: '#main-next',
        prevEl: '#main-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
const modalSwiper = new Swiper('.modal-card-swiper', {
    loop: true,
    speed: 700,
    spaceBetween: 10,

    // If we need pagination  
    pagination: {
        el: '#modal-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows  
    navigation: {
        nextEl: '#modal-next',
        prevEl: '#modal-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});






if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => console.log("Service Worker registered."))
        .catch(err => console.error("SW registration failed:", err));
}

const video = document.getElementById('video');
const menu = document.getElementById('menu');
const container = document.getElementById('video-container');
const closeBtn = document.getElementById('close-button');

function playVideo(file) {
    menu.style.display = 'none';
    container.style.display = 'flex';
    setTimeout(() => container.classList.add('show'), 10);
    container.classList.remove('shrink');
    closeBtn.classList.remove('center');
    video.src = file;
    video.play();
    video.disablePictureInPicture = true;
    video.controlsList = 'nodownload nofullscreen noremoteplayback';
    video.onplay = () => {
        closeBtn.classList.remove('center');
        video.style.opacity = 1;
    };
    video.onended = () => {
        closeBtn.classList.add('center');
        video.style.opacity = 0.9;
    };
    video.onpause = () => {
        // Only show center close button if not at the end or if manually paused
        if (!video.ended) {
            closeBtn.classList.add('center');
            video.style.opacity = 0.9;
        }
    };
}

function shrinkVideoContainer() {
    closeBtn.classList.remove('center');
    video.pause();
    video.src = '';
    container.classList.remove('show');
    setTimeout(() => {
        container.style.display = 'none';
        menu.style.display = 'grid';
    }, 300);
}