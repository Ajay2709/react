import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage(){

    const config = [
        {
            label: 'Fruit',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        }, 
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}/>
        }, 
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            //header: () => { return <th className="bg-red-500" >Score</th>},
            sortValue: (fruit) => fruit.score
        }
    ];

    const keyFun = (fruit => {
        return fruit.name;
    })
    const data = [
        {name: 'Orange', color: 'bg-orange-500', score: 4},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 2},
        {name: 'Lime', color: 'bg-green-500', score: 5}
    ]
    return (
        <div>
            <SortableTable config={config} data={data} keyFn={keyFun}/>
            <Table config={config} data={data} keyFn={keyFun}/>
        </div>
    )
}

export default TablePage;