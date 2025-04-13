import './index.css';
import planetGif from './assets/planetFullyHacks.gif';

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

// Func to update days
window.updatedays = function()
{
    const daySelect = document.getElementById("day");
    const monthSelect = document.getElementById("month");
    const month = parseInt(monthSelect.value);

    daySlect.innerHTML = '<option value = ""> SELECT DAY</option>';

    const daysInMonth = 
    {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    };

    if (month)
    {
        const days = daysInMonth[month];
        for (let i = 1; i <= days; i++)
        {   
            const option = documnet.createElement("option");
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    }

}