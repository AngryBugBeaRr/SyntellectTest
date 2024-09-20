import { ChangeEvent } from 'react';
import { action, makeObservable, observable } from 'mobx';

export interface IButton {
    text: string;
    callback: () => void;
}

export class ButtonControlVm {
    @observable controlText: string = '';
    @observable leftButtons: IButton[] | [] = [];
    @observable rightButtons: IButton[] | [] = [];

    constructor(leftButtons?: IButton[], rightButtons?: IButton[]) {
        this.leftButtons = leftButtons || [];
        this.rightButtons = rightButtons || [];
        makeObservable(this);
    }

    @action setControlText = (controlText: string) => {
        this.controlText = controlText;
    };

    @action onControlTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchString = e.target.value;
        this.setControlText(searchString);
    }

    @action alertControlText = () => {
        alert(this.controlText);
    }
}
