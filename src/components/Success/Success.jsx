import React from 'react';
import success from '../../assets/img/success-image.svg'

const Success = () => {
    return (
        <div>
            <h1>
                User successfully registered
            </h1>
            <div className="success_img_wrapper">
                <img src={success} alt="success" />
            </div>
        </div>
    );
}

export default Success;
