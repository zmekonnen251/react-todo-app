import '../App.css';
import TodoContainer from './TodoContainer';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotMatch />}></Route>
      </Routes>
    </>
  );
};

export default App;
