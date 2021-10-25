import userEvent from '@testing-library/user-event';
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './Profile.css'

function Profile() {
    const user = useSelector(selectUser)
    return (
        <div className='profile'>
        <Nav/>
        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <div className="profile__img-container">
                <img src="assets\images\netflix_avatar.png" alt="User Profile" className='profile__img'/>
                    <h3 style={{color:'white'}}>{user.displayName}</h3>
                </div>
                
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">
                    <h3>Plans</h3>

              <PlansScreen />
                        <button className='profile__signOut' onClick={() => auth.signOut()}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Profile;
