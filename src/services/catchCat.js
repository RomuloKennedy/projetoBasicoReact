import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.jpg'
import img12 from '../img/12.jpg'
import img13 from '../img/13.jpg'
import img14 from '../img/14.jpg'
import img15 from '../img/15.jpg'
import img16 from '../img/16.jpg'
import img17 from '../img/17.jpg'
import img18 from '../img/18.jpg'
import img19 from '../img/19.jpg'
import catSound from '../components/sounds/cat.mp3'

const audio = new Audio(catSound);

export const change = () =>{
    const img = document.getElementsByTagName('img')[0]

    var number = Math.random() * (20 - 1) + 1;
    audio.play();
    switch(Math.floor(number)){
        case 1: if(img.src.includes(img1)){img.src = img2; break; } img.src = img1; break;
        case 2: if(img.src.includes(img2)){img.src = img3; break; } img.src = img2; break;
        case 3: if(img.src.includes(img3)){img.src = img4; break; } img.src = img3; break;
        case 4: if(img.src.includes(img4)){img.src = img5; break; } img.src = img4; break;
        case 5: if(img.src.includes(img5)){img.src = img6; break; } img.src = img5; break;
        case 6: if(img.src.includes(img6)){img.src = img7; break; } img.src = img6; break;
        case 7: if(img.src.includes(img7)){img.src = img8; break; } img.src = img7; break;
        case 8: if(img.src.includes(img8)){img.src = img9; break; } img.src = img8; break;
        case 9: if(img.src.includes(img9)){img.src = img10; break; } img.src = img9; break;
        case 10: if(img.src.includes(img10)){img.src = img11; break; } img.src = img10; break;
        case 11: if(img.src.includes(img11)){img.src = img12; break; } img.src = img11; break;
        case 12: if(img.src.includes(img12)){img.src = img13; break; } img.src = img12; break;
        case 13: if(img.src.includes(img13)){img.src = img14; break; } img.src = img13; break;
        case 14: if(img.src.includes(img14)){img.src = img15; break; } img.src = img14; break;
        case 15: if(img.src.includes(img15)){img.src = img16; break; } img.src = img15; break;
        case 16: if(img.src.includes(img16)){img.src = img17; break; } img.src = img16; break;    
        case 17: if(img.src.includes(img17)){img.src = img18; break; } img.src = img17; break;
        case 18: if(img.src.includes(img18)){img.src = img19; break; } img.src = img18; break;
        case 19: if(img.src.includes(img19)){img.src = img1; break; } img.src = img19; break;
        default: break;
    }

}

