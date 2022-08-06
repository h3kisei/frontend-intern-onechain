import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Grid from './pages/Grid';
import List from './pages/List';
import Info from './pages/Info';
import MultiStepSignup from './pages/MultiStepForm';
import { ChakraProvider } from '@chakra-ui/react'
import PrivateRoute from './components/PrivateRoute';
import Cookies from "js-cookie";

function App() {
  return (
    <ChakraProvider>
        <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<List />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/info" element={<Info />} />
          <Route path="/signup" element={<MultiStepSignup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        </div>
    </ChakraProvider>
  );
}

export default App;
