import { Header } from "./components/Header";
import {Container} from './components/TaskContainer'
import { User } from "./components/User";
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegisterForm } from "./components/RegisterForm";


function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<RegisterForm />}/>
      <Route path="/home" element={<Container />}/>

    </Routes>

    </>
  );
}

export default App;
