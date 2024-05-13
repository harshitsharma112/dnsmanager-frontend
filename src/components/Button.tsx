export function Button(props:any) {
    return <button onClick={props.onClick} type="button" className="  text-white bg-cyan-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm border px-3 py-1 me-2 ">{props.label}</button>
}