import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Grid from './pages/Grid';
import List from './pages/List';
import Info from './pages/Info';
import MultiStepSignup from './pages/MultiStepForm';
import { ChakraProvider } from '@chakra-ui/react'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <ChakraProvider>
        <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/info" element={
          <PrivateRoute navigateTo={'/'}>
            <Info />
          </PrivateRoute> 
          } />
          <Route path="/list" element={
          <PrivateRoute navigateTo={'/'}>
            <List />
          </PrivateRoute> 
          } />
          <Route path="/grid" element={
          <PrivateRoute navigateTo={'/'}>
            <Grid />
          </PrivateRoute> 
          } />
          <Route path="/signup" element={<MultiStepSignup />} />
        </Routes>
        </div>
    </ChakraProvider>
  );
}

export default App;
