interface Props {
    handleSubmit: (params:React.FormEvent<HTMLFormElement>) => void;
    text?: string;
}

export const Forgot = ({handleSubmit , text}:Props) =>{
    return (
        <div>
            {text}
        </div>
    )
}