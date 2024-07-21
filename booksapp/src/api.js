import axios from 'axios';

//async/await is used to wait for the request to finish before proceeding to the next lines of code.
const getData = async (query, callback) => {
    // const response = await axios.get('https://www.google.co.in/complete/search', {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }, 
    //     params: {
    //         q: '',
    //         pq: query,
    //         authuser: 0,
    //         cp: 0,
    //         client: "img",
    //         xssi: "t",
    //         gs_ri: "gws-wiz-img",
    //         ds: "i",
    //         hl: "en-GB"
    //        ,psi: "O7NXZPf3JcqQz7sP_qymuAU.1683469116332"
    //     }
    // });
    // console.log(response);
    callback([{id: 1}, {id: 2}]);
}

export default getData;