import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { instance } from '../../../Api/instance';
import Header from '../../../Components/Header/Header';
import { auth, provider } from '../../../Firebase/firebaseconfig';
const Create = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleAuthWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                if (res.user.email) {
                    dispatch({ email: res.user.email, type: "SEND_EMAIL" })
                    authWithGoogle(res)
                    navigate("/")
                }
            })
    }

    const authWithGoogle = (res) => {
        fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: res.user.multiFactor.user.displayName,
                email: res.user.multiFactor.user.email,
                password: 12345678,
                avatar: res.user.multiFactor.user.photoURL
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return (<>
        <div>
            <form>
                <input type="text" placeholder='Your name' />
                <input type="email" required placeholder='Your email' />
                <input type="password" required placeholder='Your password' minLength={8} />
                <input type="url" required placeholder='Your avatar' />
                <button type='submit'>Create account</button>
            </form>
            <button onClick={handleAuthWithGoogle}>Sign in with Google</button>
        </div>
    </>);
}

export default Create;
