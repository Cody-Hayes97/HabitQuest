import styled from 'styled-components'

export const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    background-color: rgb(245, 68, 68);
    margin: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 10px 0;
  
`

export const HeaderList = styled.ul`
    flex: 0.1; 
    display: flex;
    align-items: center;
    margin-left: 20px;
`

export const HeaderListItem = styled.li`
    list-style-type: none;
    font-size: 20px;
    margin: 3%;
    font-weight: 500;
    cursor: pointer;
`

export const HeaderRight = styled.div`
    flex: 0.1;
    display: flex;
    align-items: flex-end;

> .MuiSvgIcon-root{
        font-size: 40px;
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;
    }
`
export const HeaderMiddle = styled.div`
    font-size: 26px;
    font-weight: 600;
`