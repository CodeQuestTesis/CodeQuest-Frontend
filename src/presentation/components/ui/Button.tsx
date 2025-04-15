interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({children, ...props}: Props) {
    return (
        <button
            className="
            transition-colors
            justify-center
            rounded-md
            font-['Arial']
            bg-red-800 px-10 py-1.5
            hover:bg-red-900
            text-white"
            {...props}
        >
            Iniciar Recorrido
        </button>
    );
}