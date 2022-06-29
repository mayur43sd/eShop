
import './App.css';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import{Routes ,Route} from 'react-router-dom';
import Checkout from './routes/checkout/checkout.component';
import { checkUserSession, setCurrentUser } from './store/user/user.actions';
import {useEffect} from 'react';
import { onAuthChangedListner ,createUserDocumentFromAuth, getCurrentUser } from "./utils/firebase/firebase.utils";
import {useDispatch} from 'react-redux'


function App() 
{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
       } , [])

  
  return (
    <Routes>
    <Route path='/' element={<Navigation />} >
    <Route index element={<Home />} />
    <Route path='/shop/*' element={<Shop />} />
    <Route path='/checkout' element={<Checkout />} />
    <Route path='/auth' element={<Authentication />} />
    </Route>
    </Routes>

  );
};

export default App;
