import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./admLogin.css"


export default function AdmLogin({ data }) {
    const { token, setToken } = data;
    const username = useRef('');
    const userPass = useRef('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username.current.value);
        let obj = {
            username: username.current.value,
            password: userPass.current.value
        }
        console.log(obj);
        fetch('http://164.92.99.180:8000/adm/admin_login/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj),
            credentials: 'include'
        }).then(res => res.json()).then(data => {
            if(data.token){
                setToken(data)
            localStorage.setItem('token', JSON.stringify(data))
            }
        })
    }

    return (
        <>
            <div className="login-container">
                <h1>Registratsiya oynasi:</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input ref={username} type="text" name='adm-name' placeholder='Login' /> <br />
                    <input ref={userPass} type="text" name='adm-pass' placeholder="Password" /> <br />
                    <button>Kirish</button>
                </form>
            </div>
        </>
    )
}
