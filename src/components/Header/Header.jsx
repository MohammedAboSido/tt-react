import React from 'react';
import "./style.css";
class Header extends React.Component {
    render() {
        return (
            <header>
                <h1 className='logo'>Logo</h1>
                <ul>
                    <li>
                        <a href='/#'>
                        info
                        </a>
                    </li>
                    <li>
                        <a href='/#'>
                        contact
                        </a>
                    </li>
                </ul>
            </header>   
        )
    }
}

export default Header ;