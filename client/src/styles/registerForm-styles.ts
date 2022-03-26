import { TextField, OutlinedInput, Button } from "@mui/material";
import styled from 'styled-components'
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "rgb(245, 68, 68)",
            fontWeight: "bold",
            width: "10rem",
            height: "3rem",
            "&:hover": {
                backgroundColor: "rgb(196, 51, 51)"
            }
          }
        }
      }
    }
  });


export const RegisterContainer = styled.form`
  position: relative;
  margin-top: 100px;
  margin: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`
export const RegisterInput = styled(OutlinedInput)`
    width: 50rem;
    margin: 1%;
`
export const RegisterButton = styled(Button)`

`