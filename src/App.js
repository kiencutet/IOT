// import './App.css';
// import Board from './components/Board/Board';

// function App() {
//   return (
//     <Board/>
//   );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Infor from './components/Infor/Infor';
import Board from './components/Board/Board';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/infor" element={<Infor />} />
      </Routes>
    </Router>
  );
};

export default App;
