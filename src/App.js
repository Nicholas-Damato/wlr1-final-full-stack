import { useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import routes from './routes'
import axios from 'axios'
import { setUser } from './redux/authReducer'
import { setCart } from './redux/cartReducer'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'

function App(props) {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   axios.get('/auth/user').then(res => {
  //     dispatch(setUser(res.data.user))
  //     dispatch(setCart(res.data.cart))
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     if(err.response.status === 511){
  //       props.history.push('/auth')
  //     }
  //   })
  // }, [])
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
