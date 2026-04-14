// 1. የድምፅ ፋይሉን መጥራት
const audio = new Audio('hadith.mp3'); 

// 2. ኤለመንቶችን ከ HTML ማግኘት
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');
const currentTimeDisplay = document.getElementById('currentTime');
const durationTimeDisplay = document.getElementById('durationTime');

// 3. ማጫወቻ ቁልፍ (Play)
playBtn.onclick = () => {
    audio.play();
};

// 4. ማቆሚያ ቁልፍ (Pause)
pauseBtn.onclick = () => {
    audio.pause();
};

// 5. ድምፁ ሲሄድ ሰዓቱን እና መስመሩን ማዘመን
audio.ontimeupdate = () => {
    // መስመሩን ለማንቀሳቀስ
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
    }
    
    // ያለበትን ሰዓት ለማሳየት
    currentTimeDisplay.innerText = formatTime(audio.currentTime);
};

// 6. ድምፁ ሲከፈት አጠቃላይ ርዝመቱን ለማወቅ
audio.onloadedmetadata = () => {
    durationTimeDisplay.innerText = formatTime(audio.duration);
};

// 7. ተጠቃሚው መስመሩን ሲጎትተው ድምፁ እንዲሄድ
progressBar.oninput = () => {
    const time = (progressBar.value * audio.duration) / 100;
    audio.currentTime = time;
};

// 8. ሰከንድን ወደ ደቂቃ መቀየሪያ (ለምሳሌ 02:15 ለማድረግ)
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    if (sec < 10) sec = '0' + sec;
    return min + ':' + sec;
}
