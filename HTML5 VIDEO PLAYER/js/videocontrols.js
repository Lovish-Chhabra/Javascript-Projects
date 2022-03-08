var myVideo = document.getElementById("video1");
function playpause() {
  if (myvideo.paused) myvideo.play();
  else myvideo.pause();
}
function muteunmute() {
  if (myvideo.muted === false) {    
    myvideo.muted = true;
}
else {
    myvideo.muted = false;
};
}
function makesmall() {
  myvideo.width = 320;
}
function makenormal() {
  myvideo.width = 420;
}
function enableLoop(){
  myvideo.loop=true;
  myvideo.load();
}
function disableLoop(){
  myvideo.loop=false;
  myvideo.load();
}
function checkLoop(){
  alert(myvideo.loop);
}
