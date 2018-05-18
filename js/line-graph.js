/*jshint esversion: 6 */
const getProgress = ({elapsed, total}) =>
  Math.min(elapsed / total, 1);

const easeOut = progress =>
  Math.pow(--progress, 5) + 1;

// Animate path
{
const element = document.querySelector("path");

const dashOffset = 1073;

const time = {
  start: performance.now(),
  total: 1500
};

const tick = now => {
  time.elapsed = now - time.start;
  const progress = getProgress(time);
  const easing = easeOut(progress);
  const position = dashOffset - (easing * dashOffset);
  element.setAttribute("stroke-dashoffset", position);
  
  if (progress < 1) {
    requestAnimationFrame(tick);
  } else {
    showPoints();
}
}
requestAnimationFrame(tick);
}

// Show points
const showPoints = () => {
  const graphPoints = Array.prototype.slice.call(document.querySelectorAll("#graphPoints > g"));

  let offset = 0;
      graphPoints.forEach(function(point) {
      
      setTimeout(function(){
        const currClass = point.getAttribute("class");
      point.setAttribute("class", currClass + " " + "visible");
      }, offset);
      offset += 50;
      
});
}
                                     
        