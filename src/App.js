import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <>
        <Header/>
        <Main>
          <p>MAIN</p>
        </Main>
        <Footer/>
    </>
  );
}

export default App;
