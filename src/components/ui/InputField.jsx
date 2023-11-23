import React from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import "./InputField.css"

const InputField = ({ type, nam, placeholder, btnType }) => {
    return (
        <div className="header-search">
            <div className="search-block">
                <input className="search-input-component" type={type || "text"} placeholder={placeholder || ""} name={nam || ""}/>
            </div>
            <button className="header-search-button" type={btnType || "submit"}> <UilSearch className="search"/> </button>
        </div>
    )
}

export default InputField