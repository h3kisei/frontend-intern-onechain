import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage'
import SignUp from './pages/SignUp'
import List from './pages/List'

function App() {
  return (
        <div className="App">
        <Routes>
          <Route path="/" element={(<div>Hello</div>)} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/list" element={<List />} />
        </Routes>
        </div>
  );
}

export default App;
