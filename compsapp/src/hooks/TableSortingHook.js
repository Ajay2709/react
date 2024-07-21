import { useEffect, useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

function useSort(config, data){
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    
    const setSortColumn = (label) => {
        //const label = event.target.getAttribute('key');
        console.log("handleClick called on label: ",label);
        setSortBy(label);
        if(sortBy && label !== sortBy){
            setSortOrder('asc');
            return;
        }
        if(sortOrder == null || sortOrder === 'desc'){
            setSortOrder('asc');
        } else {
            setSortOrder('desc');
        } 
        
    }

    const compareValues = (a, b) => {
        const {sortValue} = config.find(col => col.label === sortBy);
        const valA = sortValue(a);
        const valB = sortValue(b);
        const order = sortOrder === 'asc' ? 1 : -1;
        if(typeof valA === 'string'){
            return valA.localeCompare(valB) * order;
        } else {
            return (valA - valB) * order;
        }
    }

    //Add the sorting icons and click handlers to the headers of sortable columns
    const formattedConfig = config.map((column)=>{
        if(!column.sortValue){
            return column;
        }
        return {
            ...column,
            header: () => (
            <th key={`${column.label}`} onClick={(event)=> {console.log("key:",event.currentTarget.getAttribute('key'));setSortColumn(column.label)}}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>
            </th> )
        }
    });
    
    let sortedData = data;
    if(sortBy && sortOrder){
        //sortValue is the fiunction that returns the value of the property based on the 'sortBy' value. 
        //eg: If sortBy == 'Score', sortValue(fruit) returns fruit.score, based on the config json
        console.log("sorting data of ", sortBy, " in ", sortOrder)
        sortedData = [...data].sort(compareValues);
    }
    useEffect(() => {
        console.log("In useEffect: sortBy:", sortBy, "sortOrder: ", sortOrder);
        
    },[sortBy, sortOrder]);
    

    //Implement the sorting logic on the given data
    

    return {
        sortBy, sortOrder, formattedConfig, sortedData
    }
}

function getIcons(label, sortBy, sortOrder){
    if(label !== sortBy){
        return (
        <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>)
    }
    if(sortOrder === null){
        return (
        <div>
            <GoArrowSmallUp/>
            <GoArrowSmallDown/>
        </div>)
    } else if(sortOrder === 'asc'){
        return <div><GoArrowSmallUp/></div>
    } else {
        return  <div><GoArrowSmallDown/></div>
    }

}


export default useSort;