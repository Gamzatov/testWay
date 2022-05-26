import React from 'react';
import { Link } from 'react-scroll';

const FirstSection = () => {
    return (
        <div className='firstSection_wrapper'>
            <div className="firstSection_text">
                <h1>
                    Test Assignment for front-end developer
                </h1>
                <p>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </p>
                <Link to='register' smooth={true} duration={1000} className='main_btn' >Sign up</Link>
            </div>

        </div>
    );
}

export default FirstSection;
