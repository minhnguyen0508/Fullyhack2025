import './index.css';
import planetGif from './assets/saturnFullyHacks.png';

const img = document.createElement('img');
img.src = planetGif;
img.classList.add('centeranimation');
img.width = 500;
img.height = 500;

const container = document.getElementById('centeranimation');
if (container) {
    container.appendChild(img);
} else {
    console.error('No #centeranimation found!');
}

document.getElementById('centeranimation').appendChild(img);
console.log('👋 This message is being logged by "renderer.js", included via webpack'); 