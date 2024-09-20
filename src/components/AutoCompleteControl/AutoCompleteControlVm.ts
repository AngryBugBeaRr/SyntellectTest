import { ChangeEvent } from 'react';
import { action, makeObservable, observable } from 'mobx';

import { CountryInfo, getCountryByName } from '../../api/apiService';
import { debounce } from '../../utils/debounce';

export class AutoCompleteControlVm {
    @observable maxTips: number | undefined = 10;
    @observable controlText: string = '';
    @observable tips: CountryInfo[] | [] = [];
    @observable isSearchEnd: boolean = false;

    constructor(maxTips?: number) {
        makeObservable(this);
        this.maxTips = maxTips;
    }

    setTips = (tips: CountryInfo[]) => {
        this.tips = tips;
    };
    setControlText = (controlText: string) => {
        this.controlText = controlText;
    };
    setIsSearchEnd = (isSearchEnd: boolean) => {
        this.isSearchEnd = isSearchEnd;
    };

    getCountry = (title: string): void => {
        getCountryByName(title)
            .then((result: CountryInfo[]) => this.setTips(result.slice(0, this.maxTips)));
    }

    @action onControlTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchString = e.target.value;
        this.setControlText(searchString);
        this.setIsSearchEnd(false);
        debounce(this.getCountry(searchString), 10);
    }

    @action onClickTip = (item: CountryInfo) => {
        this.setControlText(item.name);
        this.setTips([]);
        this.setIsSearchEnd(true);
    }
}
