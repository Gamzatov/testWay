import React from 'react';
import avatar from '../../assets/img/photo-cover.svg'
import s from './UsersCard.module.css'
const UsersCard = ({ name, email, photo, phone, position }) => {
    return (
        <div className={s.card}>
            <div className={s.user_avatar}>
                <img className={s.avatar ? s.avatar : avatar} src={photo} alt="ava" />
            </div>
            <div className={s.user_name}>
                {name}
            </div>
            <div className={s.user_info}>
                <p>
                    {position}
                </p>
                <p>
                    {email}
                </p>
                <p>{phone}</p>
            </div>
        </div>
    );
}

export default UsersCard;
