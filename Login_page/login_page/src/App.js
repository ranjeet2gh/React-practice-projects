import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ColorSchemesExample from './components/navbar.jsx';
import Login_form  from './components/login_form.jsx';

function App() {
  return (
    <div className='app'>
     
      <ColorSchemesExample/>
       <Login_form/> 
    </div>
  );
}

export default App;
