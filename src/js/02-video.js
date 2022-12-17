import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STOR_KEY = "videoplayer-current-time";
const VOLUME = "video-volume";

const player = new Player("vimeo-player", {
    id: 59777392,
    width: 640
});

player.on('timeupdate', throttle(onPlay, 1000));
player.on('volumechange', throttle(onPlayVolume, 1000));

playOnPause()


function onPlay(data) {
    localStorage.setItem(STOR_KEY, JSON.stringify(data))
};
function onPlayVolume(data) {
    localStorage.setItem(VOLUME, JSON.stringify(data))
};

function playOnPause(){
    const pause = JSON.parse(localStorage.getItem(STOR_KEY))
    const soung = JSON.parse(localStorage.getItem(VOLUME))

    player.setCurrentTime(pause.seconds)
    player.setVolume(soung.volume)

}
