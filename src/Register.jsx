import axios from 'axios';
import React from 'react';
import Success from './components/Success/Success';



const Register = ({ positions }) => {
    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [position, setPosition] = React.useState('');
    const [token, setToken] = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const [success, setSuccess] = React.useState(false);
    const [pop, setPop] = React.useState(false);
    React.useEffect(() => {
        axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/token').then((res) => {
            setToken(res.data.token);
        })
    }, []);
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('photo', photo)
        formData.append('phone', phone)
        formData.append('position_id', position)
        axios('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            headers: { 'Token': token },
            data: formData

        }).then((res) => {
            console.log('data', res.data);
            ;
            console.log(success);
            if (res.data.success) {
                setSuccess(true)
            } else {
                setSuccess(false)
            }
        }).catch((err) => {
            console.log(err)
        });
    }
    console.log('ress>>>', success)
    let emailPattern = new RegExp(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z0-9])/);
    const phonePattern = new RegExp(/^ [\+]{ 0, 1}380([0 - 9]{ 9})$/)

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z0-9])/
        if (regEx.test(email)) {
            return (true);

        } else {
            return (false)
        }

    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handlePhoto = (files) => {
        setPhoto(files.target.files[0]);
    }
    const handlePosition = (e) => {
        setPosition(e.target.value)
    }

    return (
        <div className='RegisterSection' id='register'>
            <h1>
                Working with POST request
            </h1>
            <div className="reg_form_wrapper">
                <form onSubmit={onSubmit} className="reg_form">
                    <input onChange={handleName} type="text" className="form_inp" placeholder='Your name' required />
                    <input onChange={handleEmail} minLength='2' maxLength='100' type="email" className={emailValidation ? 'form_inp' : 'invalid'} placeholder='Email' required />
                    <input onChange={handlePhone} type="text" className="form_inp" mask="+4\9 99 999 99" pattern={phonePattern} placeholder='Phone' required />
                    <div className='checbox'>
                        <legend>
                            Select your position
                        </legend>
                        <ul className='checkbox_list'>
                            {
                                positions.map((i, id) => <li className="check" key={id}>
                                    <input className='check_input' onChange={handlePosition} value={i.id} type="radio" id={id} required />
                                    <label htmlFor={i.name}>{i.name}</label>
                                </li>)
                            }
                        </ul>
                    </div>
                    <div className="file_upload">
                        <input className="form_inp img_upload" onChange={(e) => {
                            setPhoto(e.target.files[0])
                        }} type="file" />
                    </div>

                    <button type='submit' className='btn disabled_btn'>Sign up</button>
                </form>
            </div>
            {
                <div className={success ? 'popup' : 'hide'}>
                    <Success />
                </div>

                  
            }

        </div>
    );
}

export default Register;
