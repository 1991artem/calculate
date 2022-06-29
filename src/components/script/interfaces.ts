export interface ISpase {
    BODY: HTMLElement | undefined;
    SPACE_CALC: HTMLElement | undefined;
    OUTPUT_RES: HTMLElement | undefined;
    NUM_SPACE: HTMLElement | undefined;
    KEY_ARRAY: Array<IKey>;
    addCalcSpace(): void;
    addNumSpace(): void;
}
export interface IKey {
    keyName: string;
    src: string;
    numCode: string;
}
export interface IEventEmitter {
    addEventListener(type: string, listener: (ev: 1) => any): void;
}