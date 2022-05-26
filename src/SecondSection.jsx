import React from 'react';
import Loader from './components/Loader/Loader';
import UsersCard from './components/UsersCard/UsersCard';


const SecondSection = ({ users, loading }) => {
    const [page, setPage] = React.useState(1);
    const handlePage = () => {
        setPage(page + 1)
    }
    
    return (
        <div id="users" ref={users} className='secondSection'>
            <h1>
                Working with GET request
            </h1>
            <div className={loading ? 'loader_wrapper' : 'users_wrapper'}>
                {loading ? <Loader /> :
                    users.slice(0, 6).map((u, index) => <UsersCard name={u.name}
                        email={u.email}
                        key={index}
                        phone={u.phone}
                        photo={u.photo}
                        position={u.position}
                    />)}

            </div>
            <div className="show_more_btn">
                <button className='main_btn' onClick={handlePage}>Show more</button>
            </div>
        </div>
    );
}

export default SecondSection;
