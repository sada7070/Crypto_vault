interface InputBoxProps {
    label?: string;
    value: string;
}

export function InputBox({label, value}: InputBoxProps) {
    return <div>
        <div>
            {label}
        </div>
        <input type="text" value={value}></input>
    </div>
}