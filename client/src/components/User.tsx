import {DetailsContainer, UserDetails, UserImage} from '../styles/user-section-styles'
import { ProgressBar } from 'react-bootstrap';
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store'


export const User = () => {
    const userDetails = useSelector((state : RootState) => state.users)

  return (
    <DetailsContainer>
        <h1>{userDetails.username}</h1>
        <UserImage src='https://alrigh.com/wp-content/uploads/2020/06/10-Midoriya-Izuku-profile-picture-1024x1018.jpg'/>

        <UserDetails>
        <h1>Level: {userDetails.level}</h1>
        <p>Experience Points</p>
        <p>{userDetails.experience}/{userDetails.maxExp}</p>
        <ProgressBar now={userDetails.experience}
         className='prog'/>
        </UserDetails>
    </DetailsContainer>
  )
}
