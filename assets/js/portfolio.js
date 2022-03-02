
// Particle Onload
particlesJS.load('', './assets/json/particlesjs-config.json', function () {
    console.log('particles.json loaded..');
});

let touchstartY = 0
let touchendY = 0

const slider = document.getElementById('panel')
const history = document.getElementById('history')

function handleGesture() {
    distance = touchstartY - touchendY
if (Math. abs(distance) > 200 ){
    if (touchendY < touchstartY) {
        history.scrollIntoView();
        console.log("down")
      }
      if (touchendY > touchstartY) {
        history.scrollIntoView();
        console.log("up")
      }
}
  
}
slider.ontouchstart = (e) => {
  touchstartY = e.changedTouches[0].screenY

}

slider.ontouchend =(e) => {
  touchendY = e.changedTouches[0].screenY
    handleGesture()
}

