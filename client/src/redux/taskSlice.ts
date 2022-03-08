import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
    tasks: ITask[]
}

const initialState : TaskState = {
    tasks: [
        {
            title: 'Walk the dog',
            completed: true,
            timestamp: new Date().toLocaleString("en-US"),
            worthExp: 5,
            id: 1
        },
        {
            title: 'Walk the cat??',
            completed: false,
            timestamp: new Date().toLocaleString("en-US"),
            worthExp: 30,
            id: 2
        },
        {
            title: 'Walk the Rhino',
            completed: false,
            timestamp: new Date().toLocaleString("en-US"),
            worthExp: 15,
            id: 3
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
                    timestamp: new Date().toLocaleString("en-US"),
                    worthExp: Math.random() * 100,
                    id: Math.random()
                }
            ]
        },
        completeTask: (state, action: PayloadAction<any>) => {
            const index = state.tasks.findIndex((todo) => todo.id === action.payload)
            state.tasks[index].completed = true
        }
    }
})

export const {addTask, completeTask} = taskSlice.actions

export default taskSlice.reducer