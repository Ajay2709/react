import { Fragment } from "react";

function Table({data, config, keyFn}){

    console.log("config", config);
    const tHeads = config.map((col) => {
        if(col.header !== undefined){
            return <Fragment key={col.label}>{col.header()}</Fragment>;
        }
        return <th key={col.label}>{col.label}</th>
    })
    const tRows = data.map((rowData) => {
        const renderedCells = config.map((col) => {
            return <td className="p-3" key={col.label}>{col.render(rowData)}</td>
        })
        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>)
    })
    return (
    <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b2">
                {tHeads}
            </tr>
        </thead>
        <tbody>
            {tRows}
        </tbody>
    </table>)
}

export default Table;