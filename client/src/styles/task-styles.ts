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
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
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
export const Tab = styled.div`
  border-bottom: 1px solid black;
  /* border-radius: 5px; */
  width: 50%;
  font-weight: 500;
  padding: 1%;
  cursor: pointer;
`
export const TabContainer = styled.div`
  display: flex;
`

export const CompleteButton = styled.button`
  border: none;
  background-color: rgb(245, 68, 68);
  color: white;
  font-size: 18px;
  font-weight: 500;
  padding: 1%;
  border-radius: 5px;
`