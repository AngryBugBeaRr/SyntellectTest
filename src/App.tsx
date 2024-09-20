import React from 'react';

import { ButtonControl, IButton } from './components/ButtonControl/ButtonControl';
import { ITaskBlockProps, TaskBlock } from './components/TaskBlock/TaskBlock';
import { AutoCompleteControl } from './components/AutoCompleteControl/AutoCompleteControl';

import { ButtonControlVm } from './components/ButtonControl/ButtonControlVm';
import { AutoCompleteControlVm } from './components/AutoCompleteControl/AutoCompleteControlVm';

import { tenTips, threeTips } from './App.constants';

import styles from './App.module.css';

function App() {

    const rightButtonsTestOne: IButton[] = [
        {
            text: 'Clear Control',
            callback: () => firstExampleButtonControlVm.setControlText(''),
        },
        {
            text: 'Set Hello World!',
            callback: () => firstExampleButtonControlVm.setControlText('Hello World!')
        },
    ];

    const rightButtonsTestTwo: IButton[] = [
        {
            text: 'Alert Text',
            callback: () => secondExampleButtonControlVm.alertControlText(),
        }
    ]

    const leftButtonsTestTwo: IButton[] = [
        {
            text: 'Check Number',
            callback: () => {
                if (Number(secondExampleButtonControlVm.controlText)) {
                    secondExampleButtonControlVm.alertControlText();
                }
            }
        }
    ]

    const firstExampleButtonControlVm = new ButtonControlVm([], rightButtonsTestOne);
    const secondExampleButtonControlVm = new ButtonControlVm(leftButtonsTestTwo, rightButtonsTestTwo);

    const firstTask: ITaskBlockProps = {
        title: 'Задание №1: Контрол с кнопками',
        examples: [
            {
                title: 'Пример №1',
                description: `Контрол с 2 кнопками справа; 
                При нажатии на первую кнопку очищается содержимое в 
                контроле; При нажатии на вторую кнопку текст в контроле меняется на 'Hello world!';`,
                body: <ButtonControl viewModel={firstExampleButtonControlVm} />
            },
            {
                title: 'Пример №2',
                description: `Контрол с 1 кнопкой справа и 1 кнопкой слева;
                При нажатии на кнопку справа вызывается alert с текстом в контроле;
                При нажатии на кнопку слева проверяем, что в контроле введено число и если это так, то выводим
                число через alert;`,
                body: <ButtonControl viewModel={secondExampleButtonControlVm} />
            }
        ]
    };

    const firstExampleAutoCompleteControlVm = new AutoCompleteControlVm(threeTips);
    const secondExampleAutoCompleteControlVm = new AutoCompleteControlVm(tenTips);

    const secondTask: ITaskBlockProps = {
        title: 'Задание №2: Контрол-автокомплит',
        examples: [
            {
                title: 'Пример №1',
                description: `Максимальное кол-во подсказок - ${threeTips}`,
                body: <AutoCompleteControl viewModel={firstExampleAutoCompleteControlVm} />
            },
            {
                title: 'Пример №2',
                description: `Максимальное кол-во подсказок - ${tenTips}`,
                body: <AutoCompleteControl viewModel={secondExampleAutoCompleteControlVm} />
            },
        ]
    }

  return (
      <div className={styles.container}>
          <TaskBlock title={firstTask.title} examples={firstTask.examples} />
          <TaskBlock title={secondTask.title} examples={secondTask.examples} />
      </div>
  );
}

export default App;
