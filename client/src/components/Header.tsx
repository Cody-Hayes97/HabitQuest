import {HeaderContainer, HeaderList, HeaderListItem, HeaderMiddle, HeaderRight} from '../styles/header-styling'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const Header: React.FC = () => {
  return (
    <HeaderContainer>

        <HeaderList>
            <HeaderListItem>Tasks</HeaderListItem>
            <HeaderListItem>Account</HeaderListItem>
            <HeaderListItem>About</HeaderListItem>
            <HeaderListItem>Help</HeaderListItem>
        </HeaderList>

      <HeaderMiddle>
        HabitHero
      </HeaderMiddle>

        <HeaderRight>
          <AccountCircleIcon />
        </HeaderRight>

    </HeaderContainer>
  )
}
