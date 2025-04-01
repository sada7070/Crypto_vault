interface ButtonProps {
    label: string;
    onClick: () => void;
}

export function Button({label, onClick}: ButtonProps) {
    return <button onClick={onClick} className="rounded-md bg-slate-800 text-amber-50">
            {label}
        </button>
}