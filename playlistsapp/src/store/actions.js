import { createAction } from "@reduxjs/toolkit";

//Creating a customer Action without a Slice. 
const reset = createAction("app/reset");

export default reset;