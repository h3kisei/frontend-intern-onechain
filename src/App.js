import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import List from './pages/List';
import Info from './pages/Info';
import MultiStepSignup from './pages/MultiStepForm';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
	
    <ChakraProvider>
        <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<List />} />
          <Route path="/info" element={<Info />} />
          <Route path="/signup" element={<MultiStepSignup />} />
        </Routes>
        </div>
    </ChakraProvider>
  );
}

export default App;
