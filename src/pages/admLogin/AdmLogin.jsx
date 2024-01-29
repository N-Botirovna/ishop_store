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

        let obj = {
            username: username.current.value,
            password: userPass.current.value,
            is_boss: false
        }
        console.log(obj);
        
        fetch('http://164.92.99.180:8000/adm/admin_login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(obj).toString()
        })
            .then(res => res.json())
            .then(data => {
                if (data !== 'Bunday admin yoq') {
                    setToken(data);
                    sessionStorage.setItem('token', JSON.stringify(data));
                }
                console.log('data', data);
                console.log('token', token);
            });
    }

    return (
        <>
            <div className="login-container">
                <h1>Registratsiya oynasi:</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input ref={username} type="text" name='adm-name' placeholder='Login' /> <br />
                    <input ref={userPass} type="password" name='adm-pass' placeholder="Password" /> <br />
                    <button>Kirish</button>
                </form>
            </div>
        </>
    )
}
