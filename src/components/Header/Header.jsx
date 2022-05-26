import React from 'react';
import s from './Header.module.css'
import logo from '../../assets/img/Logo.svg'
import {Link} from 'react-scroll'


const Header = () => {

    return (
        <div className={s.header}>
            <div className={s.header_wrapper}>
                <div className={s.logo_wrapper}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.header_btns_wrapper}>
                    <ul className={s.btns_holder}>
                        <li className={s.header_btns}>
                            <Link to="users" className='main_btn' smooth={true} duration={1000}>  Users</Link>
                        </li>
                        <li className={s.header_btns}>
                            <Link to='register' smooth={true} duration={1000} className='main_btn'> Sign up</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
