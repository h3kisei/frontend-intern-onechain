import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { auth } from './firebase';
import Grid from './screens/Grid';
import Info from './screens/Info';
import List from './screens/List';
import LoginPage from './screens/LoginPage';
import MultiStepSignup from './screens/MultiStepForm';

function App() {

  useEffect(() => {
    let sessionTimeout = null;
    auth.onAuthStateChanged((user) => {
      if (user == null) {
        //User is logged out
        sessionTimeout && clearTimeout(sessionTimeout);
        sessionTimeout = null;
      } else {
        //User is logged in
        user.getIdTokenResult().then((idTokenResult) => {
          const authTime = idTokenResult.claims.auth_time * 1000;
          const sessionDuration = 1000 * 60 * 2; //1 hour to expire
          const millisecondsUntilExpiration = sessionDuration - (Date.now() - authTime);
          console.log(`User will be logged out after ${millisecondsUntilExpiration / 1000} seconds`);
          sessionTimeout = setTimeout(() => {
            auth.signOut().then(() => {
              console.log('User is logged out');
            });
          }, millisecondsUntilExpiration);
        })
      }
    });

    return () => {
      sessionTimeout && clearTimeout(sessionTimeout);
    }
  }, []); 
  
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
