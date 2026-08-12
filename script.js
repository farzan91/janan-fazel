// عناصر صوتی و دکمه‌ها
const audio = document.getElementById('bg-music');
const stopBtn = document.getElementById('stop-playing');
const playAgainBtn = document.getElementById('playing-again');

// قطع آهنگ
stopBtn.addEventListener('click', function() {
    audio.pause();
});

// پخش مجدد (از ابتدا)
playAgainBtn.addEventListener('click', function() {
    audio.currentTime = 0;  // رفتن به ابتدای فایل
    audio.play();           // پخش مجدد
});