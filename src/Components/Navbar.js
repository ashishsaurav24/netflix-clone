import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const transitionNavBar = () => {
        if (window.scrollY > 100){
            setShow(true);
        } else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`navbar ${show && 'navbar__black'}`}>
            <div className="nav__content">
                <img onClick={()=>navigate('/')} className='nav__logo' src="https://pngimg.com/uploads/netflix/small/netflix_PNG32.png" alt="netflix-logo" />
                <img onClick={()=>navigate('/profile')} className='nav__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117" alt="avatar-img" />
            </div>
        </div>
    )
}

export default Navbar