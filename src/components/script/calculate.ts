export class Calc {
    VALUE: string | undefined;
    PLUS: boolean;
    MINUS: boolean;
    MULTIPLY: boolean;
    DIVIDE: boolean;
    RESET: boolean;
    RESULT: string | undefined;
    constructor(){
        this.VALUE = '';
        this.PLUS = false;
        this.MINUS = false;
        this.MULTIPLY = false;
        this.DIVIDE = false;
        this.RESULT = '0';
        this.RESET = false;
    }

    addResult(value:string){
        const LISTENING_TEXT_AREA: HTMLTextAreaElement|null = document.querySelector('.output_res');
        if (LISTENING_TEXT_AREA) {
        switch (value){
            case '*' : {
                if (value){
                this.flagReset();
                this.MULTIPLY = true;
                this.calculate();
                LISTENING_TEXT_AREA.value = '';
                }
                break;
            };
            case '-' : {
                if (value){
                this.flagReset();
                this.MINUS = true;
                this.calculate();
                LISTENING_TEXT_AREA.value = '';
                }
                break;
            };
            case '+' : {
                if (value){
                this.flagReset();
                this.PLUS = true;
                this.calculate();
                LISTENING_TEXT_AREA.value = '';
                }
                break;
            };
            case '/' : {
                if (value){
                    this.flagReset();
                    this.DIVIDE = true;
                    this.calculate();
                    LISTENING_TEXT_AREA.value = '';
                }
                break;
            };
            case '=': {
                if (this.RESULT) {
                    this.calculate();
                    LISTENING_TEXT_AREA.value = this.RESULT;
                    this.flagReset();
                    this.RESET = true;
                };
                break;
            }
            case 'RESET': {
                LISTENING_TEXT_AREA.value = '';
                this.flagReset();
                this.RESULT = '0';
                break;
            }
            default: {
                console.log(this.RESULT);
                if(this.RESET) {
                    LISTENING_TEXT_AREA.value = '';
                    this.RESULT = '0';
                    this.flagReset();
            };
                LISTENING_TEXT_AREA.value += value;
                this.VALUE = LISTENING_TEXT_AREA.value;
            }
        }
        }
    }
    flagReset(){
        this.PLUS = false;
        this.MINUS = false;
        this.MULTIPLY = false;
        this.DIVIDE = false;
        this.RESET = false;
    }
    calculate (){
        if (this.RESULT && this.RESULT !== '0'){
            if (this.MULTIPLY) this.RESULT = (Number(this.RESULT) * Number(this.VALUE)).toString();
            if (this.MINUS) this.RESULT = (Number(this.RESULT) - Number(this.VALUE)).toString();
            if (this.PLUS) this.RESULT = (Number(this.RESULT) + Number(this.VALUE)).toString();
            if (this.DIVIDE) this.RESULT = (Number(this.RESULT) / Number(this.VALUE)).toString();
        } else this.RESULT = this.VALUE;
    }
}