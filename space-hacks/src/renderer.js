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

    daySelect.innerHTML = '<option value = "">SELECT DAY</option>';

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
            const option = document.createElement("option");
            option.value = i;
            option.text = i;
            daySelect.appendChild(option);
        }
    }

    function getZodiac(month, day){
        const range = month * 100 + parseInt(day);
        let zodiac = "Invalid Birthday";
        if (range >= 321 && range <= 419) {
            zodiac = "Aries";
            description = ""
          } else if (range >= 420 && range <= 520) {
            zodiac = "Taurus";
          } else if (range >= 521 && range <= 620) {
            zodiac = "Gemini";
          } else if (range >= 621 && range <= 722) {
            zodiac = "Cancer";
          } else if (range >= 723 && range <= 822) {
            zodiac = "Leo";
          } else if (range >= 823 && range <= 922) {
            zodiac = "Virgo";
          } else if (range >= 923 && range <= 1023) {
            zodiac = "Libra";
          } else if (range >= 1024 && range <= 1121) {
            zodiac = "Scorpio";
          } else if (range >= 1122 && range <= 1221) {
            zodiac = "Sagittarius";
          } else if ((range >= 1222 && range <= 1231) || (range >= 101 && range <= 119)) {
            zodiac = "Capricorn";
          } else if (range >= 120 && range <= 218) {
            zodiac = "Aquarius";
          } else if (range >= 219 && range <= 320) {
            zodiac = "Pisces";
          }
        
          return zodiac;

    }

    function getDescription(zodiac){
        let description = " ";
        if (zodiac == "Aries") {
            description = "You are a sheep ";
          } else if (zodiac == "Taurus") {
            description = "You are a bull ";
          } else if (zodiac == "Gemini") {
            description = "You have an evil twin ";
          } else if (zodiac == "Cancer") {
            description = "You are a crab ";
          } else if (zodiac == "Leo") {
            description = "You are a narcicist ";
          } else if (zodiac == "Virgo") {
            description = "You are a masochist ";
          } else if (zodiac == "Libra") {
            description = "You are judgemental af ";
          } else if (zodiac == "Scorpio") {
            description = "Two faced soab ";
          } else if (zodiac == "Sagittarius") {
            description = "nah u good";
          } else if (zodiac == "Capricorn") {
            description = "You are a goat, not the GOAT ";
          } else if (zodiac == "Aquarius") {
            description = "Cry baby ";
          } else if (zodiac == "Pisces") {
            description = "you are the evil twin ";
          }
          return description;
    }

    document.getElementById('goButton').addEventListener('click', () => {
        const monthSelect = document.getElementById('month');
        const daySelect = document.getElementById('day');
    
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);
    
        const zodiac = getZodiac(month, day);
        const zodiac_message = getDescription(zodiac);

        const container = document.getElementById('centeranimation');
        container.innerHTML = ''; // Clear previous output
    
        const message = document.createElement('p');
        message.textContent = `Your Zodiac sign is: ${zodiac}`;
        message.style.fontSize = '24px';
        message.style.fontWeight = 'bold';
        message.style.textAlign = 'center';
        message.style.marginTop = '20px';
    
        container.appendChild(message);

        const description = document.createElement('p');
        description.textContent = zodiac_message;
        description.style.fontSize = '30px';
        description.style.fontStyle = 'italic';
        description.style.textAlign = 'center';
        description.style.marginTop = '10px';
        description.style.padding = '0 20px';
        
        container.appendChild(description);
      });
}