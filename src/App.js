
import './App.css';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/signIn.component';
import{Routes ,Route} from 'react-router-dom';
function App() 
{
  return (
    <Routes>
    <Route path='/' element={<Navigation />} >
    <Route index element={<Home />} />
    <Route path='/shop' element={<Shop />} />
    <Route path='/sign-in' element={<SignIn />} />
    </Route>
    </Routes>

  );
};

export default App;