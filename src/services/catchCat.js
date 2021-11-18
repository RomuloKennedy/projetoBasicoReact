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
        case 1: img.src = img1; break;
        case 2: img.src = img2; break;
        case 3: img.src = img3; break;
        case 4: img.src = img4; break;
        case 5: img.src = img5; break;
        case 6: img.src = img6; break;
        case 7: img.src = img7; break;
        case 8: img.src = img8; break;
        case 9: img.src = img9; break;
        case 10: img.src = img10; break;
        case 11: img.src = img11; break;
        case 12: img.src = img12; break;
        case 13: img.src = img13; break;
        case 14: img.src = img14; break;
        case 15: img.src = img15; break;
        case 16: img.src = img16; break;    
        case 17: img.src = img17; break;
        case 18: img.src = img18; break;
        case 19: img.src = img19; break;
        default: break;
    }

}

