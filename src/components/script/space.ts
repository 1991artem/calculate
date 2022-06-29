import { keyArray } from "./keyArray";
import { ISpase, IKey } from './interfaces';
import '../styles/index.css';



export class Space implements ISpase {
    BODY: HTMLElement | undefined;
    SPACE_CALC: HTMLElement | undefined;
    OUTPUT_RES: HTMLTextAreaElement | undefined;
    NUM_SPACE: HTMLElement | undefined;
    RESET_BUTTON: HTMLElement | undefined;
    KEY_ARRAY: Array<IKey> = keyArray;

    addCalcSpace():void{
        this.BODY = document.getElementsByTagName('body')[0];
        if (this.BODY){
            this.BODY.classList.add('body');
            this.SPACE_CALC = document.createElement('div');
            this.SPACE_CALC.classList.add('space_calc');
            this.BODY.append(this.SPACE_CALC);
        }

    };
    addNumSpace():void{
        this.OUTPUT_RES = document.createElement('textarea');
        this.NUM_SPACE = document.createElement('div');
        this.RESET_BUTTON = document.createElement('div');
        let reset_button_text = document.createElement('p');
        if (this.SPACE_CALC) {
            if (this.OUTPUT_RES){
                this.OUTPUT_RES.classList.add('output_res');
                this.SPACE_CALC.append(this.OUTPUT_RES);
            }
            if (this.NUM_SPACE){
            this.NUM_SPACE.classList.add('num_space');
            this.SPACE_CALC.append(this.NUM_SPACE);
            }
            if (this.RESET_BUTTON){
                this.RESET_BUTTON.classList.add('reset_button');
                this.SPACE_CALC.append(this.RESET_BUTTON);
                this.RESET_BUTTON.append(reset_button_text);
                reset_button_text.innerHTML = 'RESET';
                reset_button_text.setAttribute('src', './sound/click.mp3');
            }
            this.KEY_ARRAY.forEach(elem => {
                let key: HTMLElement = document.createElement('div');
                let textKey: HTMLElement = document.createElement('p');
                let sound: HTMLAudioElement = document.createElement('audio');
                key.classList.add('key_area');
                textKey.classList.add('key_text');
                sound.classList.add('key_sound');
                if (this.NUM_SPACE) {
                    this.NUM_SPACE.append(key);
                }
                key.append(textKey);
                key.append(sound);
                textKey.innerHTML = elem.keyName;
                textKey.setAttribute('numCode', elem.numCode);
                sound.setAttribute('src', elem.src);
            });
        }

    };

}
