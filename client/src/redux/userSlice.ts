import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : IUser = {
    username: 'Deku',
    experience: 0,
    maxExp: 100,
    level: 1,
    id: 11

}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        gainExp: (state, action: PayloadAction<number>) => {
            state.experience += action.payload
        }
    }
})

export const {gainExp} = userSlice.actions

export default userSlice.reducer