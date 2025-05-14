function loadVideo(source) {
    const video = document.getElementById('featuredPlayer');

    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
    } else {
        alert('HLS non supporté sur ce navigateur.');
    }
}

window.onload = () => {
    loadVideo('videos/inazuma.m3u8');
};

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const videos = document.querySelectorAll('.video-item');

    videos.forEach(video => {
        const title = video.dataset.title || "";
        if (title.includes(query)) {
            video.style.display = '';
        } else {
            video.style.display = 'none';
        }
    });
});
