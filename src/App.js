import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import List from './pages/List';
// import firebaseConnect from './firebaseConnect';

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
