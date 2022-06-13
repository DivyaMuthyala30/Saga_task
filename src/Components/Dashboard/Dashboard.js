import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Auth_types } from '../../Redux/Actiontypes/Auth_types';
import { Dashboard_types } from '../../Redux/Actiontypes/Dashboard_types';



// import './Styles/Styles.css';

const Dashboard = (props) => {

  let { user } = useParams();
  const [state, setstate] = useState({
    userdata: ''
  })

  const dashboardReduxData = useSelector((state) => state.Dashboard);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const Logout = () => {
    // localStorage.removeItem('token')
    dispatch({
      type: Auth_types.LOGOUT_REQUEST,
      callback: () => {
        navigate("/login");
      }
    })

  }
  const getUserData = () => {
    dispatch({
      type: Dashboard_types.USER_DATA_REQUEST,
    })

  }
  useEffect(() => {
    getUserData()
  }, [])


  console.log(dashboardReduxData.UserDataRequests)
  const list = dashboardReduxData.UserDataRequests;
  return (
    <div className='flx'>

      <div className="inner_div">
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>First  Name</th>
              <th>Last Name</th>
              <th>Email</th>


              {/* <th>Country</th> */}
            </tr>
          </thead>
          <tbody>

            {

              list && list.map((data, index) => {
                return (

                  <tr key={index}  onClick={() => navigate(`/dashboard/${data.id}`)}>
                    <td>{data.first_name}</td>
                    <td>{data.last_name}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              }
              )
            }
          </tbody>

        </table>

      </div>

      <button onClick={Logout}>Logout</button>
     
    </div>
  )
}

export default Dashboard;