import { calc } from "../../index";

export class ActiveButton {
    downButton(){
        const LISTENING_AREA: Element|null = document.querySelector('.space_calc');
        if (LISTENING_AREA){
            LISTENING_AREA.addEventListener('mousedown', this.eventListener);
        }
    }
    eventListener(e:Event){
        ( e.target as HTMLElement).classList.toggle('key_toch');

    }
    upButton(){
        const LISTENING_AREA: Element|null = document.querySelector('.space_calc');
        if (LISTENING_AREA){
            LISTENING_AREA.addEventListener('mouseup', this.eventListener);
        }
    }
    clickButton(){
        const LISTENING_AREA: Element|null = document.querySelector('.space_calc');
        if (LISTENING_AREA){
            LISTENING_AREA.addEventListener('mousedown', (e:Event)=>{
                let value = (e.target as HTMLElement);
                let trackUrl = (( e.target as HTMLElement).lastChild as HTMLElement).getAttribute('src');
                if (trackUrl){
                let playAudio: HTMLAudioElement = new Audio(trackUrl);
                playAudio.play();
                playAudio.played;
                }
                if ((value.firstChild as HTMLElement).innerHTML) calc.addResult((value.firstChild as HTMLElement).innerHTML);
            });
        }
    }
}

