import './index.css';
import planetGif from './assets/planetFullyHacks.gif';
import obama from './assets/obama.jpg';
import aquariusImg from './assets/aquarius.jpg';
import ariesImg from './assets/aries.jpg';
import cancerImg from './assets/cancer.jpg';
import capricornImg from './assets/capricorn.jpg';
import geminiImg from './assets/gemini.jpg';
import leoImg from './assets/leo.jpg';
import libraImg from './assets/libra.png';
import piscesImg from './assets/pisces.jpg';
import sagittariusImg from './assets/sagittarius.jpg';
import scorpioImg from './assets/scorpio.jpg';
import taurusImg from './assets/taurus.jpg';
import virgoImg from './assets/virgo.jpg';

const img = document.createElement('img');
img.src = planetGif;
img.classList.add('centeranimation');
img.id = 'planetGif';

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
            description = "In Greek mythology, the ram carried Athamas's son Phrixux and daughter Helle to Colchis to escape Ino. When the ram reached Colchis, Phrixux sacrificed the ram and hung its fleece in the Grove or Ares. This fleece turned to gold and later was the quest of Jason and the Argonauts.";
          } else if (zodiac == "Taurus") {
            description = "Babylonian constellation. \n Jupiter turns into bull to carry off Europa - daughter of King of Crete.\nIt is also said that Zeus brought the ram to try and win the heart of Europa.";
          } else if (zodiac == "Gemini") {
            description = "The two bright stars - Castor and Pollux - are also the brothers' names. They were the brothers of Helen of Troy.";
          } else if (zodiac == "Cancer") {
            description = "Juno sent a crab to defeat Hercules while fighting Hydra. The crab was crushed by Hercules.";
          } else if (zodiac == "Leo") {
            description = "In Greek mythology, Leo represents the Nemean Lion which was killed by Hercules.";
          } else if (zodiac == "Virgo") {
            description = "Goddess of farms and harvest. Virgo could also represent Ishtar, Isis, Demeter, Cybele, and Athena.";
          } else if (zodiac == "Libra") {
            description = "Romans chopped claws from Scorpio during Autumn Equinox to make Libra.";
          } else if (zodiac == "Scorpio") {
            description = "Sent by Gaia to kill Orion when he said he would kill all animals.";
          } else if (zodiac == "Sagittarius") {
            description = "A Chiron, half-man half-horse, sent to kill the scorpion (Scorpio).";
          } else if (zodiac == "Capricorn") {
            description = "The word \"cornucopia\" comes from the broken horn of Capricorn - or the \"horn of plenty.\"";
          } else if (zodiac == "Aquarius") {
            description = "In Greek mythology, Aquarius (also known as Ganymede in Roman myth) was a beautiful young boy whom Zeus brought to Olympus to be the cup bearer of the Gods. It is suggested that Zeus fell in love with Aquarius. ";
          } else if (zodiac == "Pisces") {
            description = "Venus and her son Cupid escaped Typhon as two fish tied together. In Greek mythology, they are Aphrodite and Eros.";
          }
          return description;
    }

    const zodiacImages = {
        Aries: ariesImg,
        Taurus: taurusImg,
        Gemini: geminiImg,
        Cancer: cancerImg,
        Leo: leoImg,
        Virgo: virgoImg,
        Libra: libraImg,
        Scorpio: scorpioImg,
        Sagittarius: sagittariusImg,
        Capricorn: capricornImg,
        Aquarius: aquariusImg,
        Pisces: piscesImg,
      };

    document.getElementById('goButton').addEventListener('click', () => {
        const monthSelect = document.getElementById('month');
        const daySelect = document.getElementById('day');
        const month = parseInt(monthSelect.value);
        const day = parseInt(daySelect.value);
    
        const zodiac = getZodiac(month, day);
        const zodiac_message = getDescription(zodiac);
        const imageSrc = zodiacImages[zodiac];
        
        if (month && day)
            {
             const zodiac = getZodiac(month, day);
             const description = getDescription(zodiac);
             const imageSrc = zodiacImages[zodiac];
             const planetImg = document.getElementById('planetGif');

             document.getElementById('zodiac').innerText = `Your Zodiac Sign Is: ${zodiac}`;
             document.getElementById('description').innerText = description;
             const zodiacImg = document.getElementById('zodiacImages');
             zodiacImg.src = imageSrc; 
             zodiacImg.alt = zodiac;
             zodiacImg.width = 500;
             zodiacImg.height = 500;
             zodiacImg.style.display = 'block';
             zodiacImg.style.margin = '0 auto';
             zodiacImg.style.padding = '10px';

            
             if(planetImg)
             {
                planetImg.remove();
             }
             document.querySelector('h2').innerHTML = '';
             document.getElementById('month').style.display = 'none'; // Hide the month dropdown
             document.getElementById('day').style.display = 'none'; // Hide the day dropdown
             document.getElementById('goButton').style.display = 'none'; // Hide the GO button
            }

            else 
            {
                alert("Please Enter Both a Day and Month Please!!!");
            }
      });
}
