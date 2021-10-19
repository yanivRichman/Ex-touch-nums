function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}


function startTimer(rt) {
    if (!isPlay) return
    setTimeout(function () {
        realTime = Date.now() - rt;
        document.querySelector('h3 span').innerText = presentTime(realTime);
        startTimer(rt);
    });
}


function presentTime(time) {
    var msec = parseInt(time);
    var sec = parseInt(time / 1000);
    var min = parseInt(time / 60000);
    if (sec < 10) sec = '0' + sec;
    if (min < 10) min = '0' + min;
    if (msec > 1000) msec = msec % 1000;
    if (sec > 59) {
        sec = sec % 60;
        if (sec < 10) sec = '0' + sec;
    }
    return min + ':' + sec + '.' + msec;
}


