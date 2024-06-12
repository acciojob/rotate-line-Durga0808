//your JS code here. If required.
let angle = 0;

function rotateLine() {
    angle = (angle + 2) % 360; // Increase angle by 2 degrees, keep within 0-359
    document.getElementById('line').style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    requestAnimationFrame(rotateLine);
}

rotateLine();