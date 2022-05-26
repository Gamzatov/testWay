import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import Register from './Register';
import axios from 'axios';
import { getUsers } from './redux/actions/getUsers';
import { useDispatch } from 'react-redux';
import Loader from './components/Loader/Loader';
import UsersCard from './components/UsersCard/UsersCard';

function App() {
  const [users, setUsers] = React.useState([]);
  const [positions, setPositions] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const perPage = 6;
  const [totalPages, setTotalPages] = React.useState(1);
  const [userList, setUserList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true)
    axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${perPage}&page=${page}`).then((res) => {
      setUserList([...users, ...res.data.users]);
      console.log(res.data.total_pages);
      setTotalPages(res.data.total_pages);
    })
    setLoading(false)
    axios.get('https://frontend-test-assignment-api.abz.agency/api/v1/positions ').then((res) => {
      setPositions(res.data.positions);
    })

  }, [page]);
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <div className='secondSection' id='users'>
        <h1>
          Working with GET request
        </h1>
        <div className={loading ? 'loader_wrapper' : 'users_wrapper'}>
          {loading ? <Loader /> :
            userList.slice(0, 6).map((u, index) => <UsersCard name={u.name}
              email={u.email}
              key={index}
              phone={u.phone}
              photo={u.photo}
              position={u.position}
            />)}

        </div>


        <div className="show_more_btn">
          <button className='main_btn' disabled={totalPages === page ? true : false} onClick={() => setPage(page + 1)}>Show more</button>
        </div>

      </div>
      <Register positions={positions} />
    </div>
  );
}

export default App;
