import './scss/styles.scss';
import 'antd/dist/antd.css';
import 'animate.css';
import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from './routers/RoutesApp';
import { Header } from './components/header/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
