import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PostDetail from './components/postDetail/PostDetail';

import Main from './components/main/Main';
import useUser from "./hooks/useUsers"
import usePosts from './hooks/usePosts';

function App() {

  const user = useUser();
  const posts = usePosts();

  return (
    <>
        <Header name = "Aguiar"/>
        <Main/>
        <Footer/>
    </>
  );
}

export default App;
