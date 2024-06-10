// store import from redux toolkit
import {createSlice} from '@reduxjs/toolkit'

export const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            console.log("STATE", state);
            console.log("ACTION", action);
            return action.payload
        }
    }
})

export const {setSearchTerm} = searchTermSlice.actions;
export default searchTermSlice.reducer