import { ExampleBlock } from '../ExampleBlock/ExampleBlock';

import styles from './TaskBlock.module.css';

interface IExample {
    title: string;
    description: string;
    body: JSX.Element;
}

export interface ITaskBlockProps {
    title: string;
    examples: IExample[];
}

export const TaskBlock = ({title, examples}: ITaskBlockProps) => {
    return (
        <div className={styles.container}>
            <h1>{title}</h1>
            {examples.map((item: IExample) => {
                return (
                    <ExampleBlock title={item.title} description={item.description}>
                        {item.body}
                    </ExampleBlock>
                )
            })}
        </div>
    )
}
