interface IExampleBlockProps {
    title: string;
    description: string;
    children: JSX.Element;
}

export const ExampleBlock = ({title, description, children}: IExampleBlockProps) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    )
}
