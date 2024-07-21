import { useState, useEffect } from "react";
//import './SearchBar.css';

function SearchBar({onSubmit, callback}) {
    const [query, setQuery] = useState('');
    
    useEffect(() => {
        // This function will be called after the component has rendered
        // and the state has been updated.
        console.log('The query value is now:', query);
    }, [query]);
    
    const getSearchResults = async (event) => {
        event.preventDefault();
        //Don't use document.querySelector('input').value ---> REASON?
        console.log("Searched for: "+ query)
        const result = await onSubmit(query, callback);
        console.log("search results: "+result);
    }

    const handleChange = (event) => {
        console.log("change detected!"+event.target.value);
        setQuery(event.target.value);
        //getSearchResults(); 
        /** When you call a function immediately after calling the setter function,
         * the state may not have been updated yet, and the function may be using the old state value.
         * To solve this issue, you can use the useEffect hook to perform side effects that depend on the updated state value. 
         * The useEffect (defined above) hook allows you to run a function after the component has rendered and the state has been updated.
         */
    }
  return <div>
    <form onSubmit={getSearchResults}>
        <input id="search-bar" type="text" onChange={handleChange} value={query} />
        {query.length < 3 && 'Type 3 or more characters to search!'}
    </form>
  </div>
  /** HANDLING TEXT INPUTS
   * 1. Create a new piece of state
   * 2. Create an event handler to watch for the 'onChange' event
   * 3. When the 'onChange' event fires, get the value from the input
   * 4. Take that value from the input and use it to update your state
   * 5. Pass your state to the input as the value prop.
   */
}

export default SearchBar;
