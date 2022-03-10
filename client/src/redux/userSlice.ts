import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState : IUser = {
    username: 'Deku',
    experience: 0,
    level: 1,
    maxExp: 100,
    id: 11

}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        gainExp: (state, action: PayloadAction<number>) => {
            state.experience += action.payload
        },
        levelUp: (state) => {
            if(state.experience >= state.maxExp){
                state.level++
                state.experience = state.experience - state.maxExp
                state.maxExp += Math.round((state.level * 5) + state.maxExp / 100)
            }
        }
    }
})

export const {gainExp, levelUp} = userSlice.actions

export default userSlice.reducer