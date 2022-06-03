import CatSound from '../components/sounds/cat.mp3'
export const change = async() =>{

    const audio = new Audio(CatSound);
    audio.play();

    const cats = await fetch('https://api.thecatapi.com/v1/images/search');
    const catJson = await cats.json();
    const catUrl =  catJson[0].url;
    return catUrl;
}

