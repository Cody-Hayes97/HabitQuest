import styled from 'styled-components'

export const ContainerDiv = styled.div`
  position: relative;
  margin-top: 100px;
  display: flex;
`

export const TaskList = styled.div`
   border: 1px solid black;
   display: flex;
   flex-direction: column;
   flex: 0.3;
   height: 85vh;
   margin: 1%;
   overflow-y: scroll;
   ::-webkit-scrollbar {
  display: none;
}
`

export const Task = styled.div`
    border: 1px solid lightgray;
    height: auto;
    padding: 2%;
`

export const TaskInputContainer = styled.div`
    
`
export const TaskInput = styled.input`
    padding: 2% 1% 2% 1%;
    width: 100%;
    border: none;

    :focus{
        outline: none;
        
    }
`