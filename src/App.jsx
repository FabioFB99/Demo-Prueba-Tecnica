import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Layout from './layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
