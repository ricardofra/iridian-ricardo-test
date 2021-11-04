import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import RegisterForm from './components/RegisterForm/RegisterForm';

import './global.scss'

function App() {
  return (
      <div className="App">
          <Header />       
          <RegisterForm /> 
          <Footer />
      </div>
  );
}

export default App;
