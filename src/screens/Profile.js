
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './Profile.css'

function Profile({name}) {
    // here {name} is pulled from the firebase userAuth.displayName on user sign in in App.js
    const user = useSelector(selectUser)
    // console.log("display Name ", user.displayName)
    // console.log("user object", user)
    return (
        <div className='profile'>
        <Nav/>
        <div className="profile__body">
            <h1>Edit Profile</h1>
            <div className="profile__info">
                <div className="profile__img-container">
                <img src="assets\images\netflix_avatar.png" alt="User Profile" className='profile__img'/>
                    <h3 style={{color:'white', letterSpacing:'.5px', fontWeight:'400', padding:'5px'}}>{name}</h3>
                </div>
                
                <div className="profile__details">
                    <h2>{user.email}</h2>
                    <div className="profile__plans">
                    <h3>Plans</h3>

              <PlansScreen />
                        
                    </div>
                    <button className='profile__signOut' onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Profile;
