import useSort from '../hooks/TableSortingHook.js';
import Table from "./Table";

function SortableTable(props){
    const {config, data} = props;
    console.log("config in SortableTable", config);
    
    console.log('useSort returned: ', useSort(config, data));
    const {sortBy, sortOrder, sortedData, formattedConfig} = useSort(config, data);
    
    return (
    <div>
        {sortBy} - {sortOrder}
        <Table {...props} data={sortedData} config={formattedConfig} />
    </div> )
}

export default SortableTable;