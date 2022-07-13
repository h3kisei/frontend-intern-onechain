import './App.css';
import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp';
import ListChakra from './pages/ListChakra';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "../contexts/AuthContext"


function App() {
  return (
	
    <ChakraProvider>
        <div className="App">
        <Routes>
		<AuthProvider>
          <Route path="/" element={(<div>Hello</div>)} />
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
		  <Route path="/list-chakra" element={<ListChakra />} />
		</AuthProvider>
        </Routes>
        </div>
    </ChakraProvider>
  );
}

export default App;
