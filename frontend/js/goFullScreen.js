// This requests full screen mode is cross browser compatible,
// but the 'webkit'-prefix is needed in Safari
function goFullScreen() {
  let method = document.body.requestFullscreen ?
    'requestFullscreen' : 'webkitRequestFullScreen';
  document.body[method]();
}