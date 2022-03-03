import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
    tasks: ITask[]
}

const initialState : TaskState = {
    tasks: [
        {
            title: 'Walk the dog',
            completed: true,
            timestamp: Date.now()
        },
        {
            title: 'Walk the cat??',
            completed: false,
            timestamp: Date.now()
        },
        {
            title: 'Walk the Rhino',
            completed: false,
            timestamp: Date.now()
        }
    ]
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state, action: PayloadAction<string>) => {
            state.tasks = [
                ...state.tasks, 
                {
                    title: action.payload,
                    completed: false,
                    timestamp: Date.now()
                }
            ]
        }
    }
})

export const {addTask} = taskSlice.actions

export default taskSlice.reducer