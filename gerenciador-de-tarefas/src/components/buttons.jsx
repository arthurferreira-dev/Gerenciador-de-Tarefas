export function Buttons(props) {
    return (
        <button
            className="bg-slate-500 duration-300 px-4 py-2 font-medium rounded-md text-center text-white hover:cursor-pointer hover:bg-slate-600"
            {...props}
        >
            {props.children}
        </button>
    );
}

export function IconsBtn(props) {
    return (
        <button
            className="bg-slate-400 p-2 rounded-md text-white duration-300 hover:cursor-pointer hover:bg-slate-500"
            {...props}
        >
            {props.children}
        </button>
    );
}