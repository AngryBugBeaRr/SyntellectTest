import { observer } from 'mobx-react';

import { CountryInfo } from '../../api/apiService';

import { AutoCompleteControlVm } from './AutoCompleteControlVm';

import styles from './AutoCompleteControl.module.css';

interface IAutoCompleteControlProps {
    viewModel: AutoCompleteControlVm;
}

export const AutoCompleteControl = observer(({viewModel}: IAutoCompleteControlProps) => {
    return (
        <>
            <input value={viewModel.controlText} onChange={(e) => viewModel.onControlTextChange(e)} />
            <div className={styles.container}>
                {!viewModel.isSearchEnd && viewModel.tips.map((item: CountryInfo) => {
                    return (
                        <div
                            className={styles.tipsContainer}
                            onClick={() => viewModel.onClickTip(item)}
                        >
                            <p className={styles.tips}>{item.name}</p>
                            <p className={styles.tips}>{item.fullName}</p>
                            <img alt={item.name} className={styles.imageFlag} src={item.flag} />
                        </div>
                    )
                })}
            </div>
        </>
    )
})
