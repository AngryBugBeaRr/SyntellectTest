import { observer } from 'mobx-react';

import { ButtonControlVm } from './ButtonControlVm';

import styles from './ButtonControl.module.css';

interface IButtonControlProps {
    viewModel: ButtonControlVm;
}

export interface IButton {
    text: string;
    callback: () => void;
}

export const ButtonControl = observer(({viewModel}: IButtonControlProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.buttonContainer}>
                {viewModel.leftButtons.map((item: IButton) => {
                    return (
                        <button className={styles.button} onClick={item?.callback}>
                            {item?.text}
                        </button>
                    )
                })}
            </div>
            <input value={viewModel.controlText} onChange={(e) => viewModel.onControlTextChange(e)} />
            <div className={styles.buttonContainer}>
                {viewModel.rightButtons.map((item: IButton) => {
                    return (
                        <button className={styles.button} onClick={item?.callback}>
                            {item?.text}
                        </button>
                    )
                })}
            </div>
        </div>
    )
})
