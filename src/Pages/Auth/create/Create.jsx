import React from 'react';
import { instance } from '../../../Api/instance';
import { auth, provider } from '../../../Firebase/firebaseconfig';
const Create = () => {
    const handleAuthWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                authWithGoogle(res)
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
                password: res.user.multiFactor.user.displayName,
                avatar: res.user.multiFactor.user.photoURL
            })
        }).then(res => res.json()).then(data => {
            console.log(data);
        })
    }
    return (
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
    );
}

export default Create;
