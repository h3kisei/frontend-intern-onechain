import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Navigate } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';

function PrivateRoute({ children, navigateTo }) {
    const[isUserSignedIn, setIsUserSignedIn] = useState(false);
    const[pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setPending(false);
            if (user) {
                setIsUserSignedIn(!!user);
            };
        });
      }, []);

    if (pending) return (
        <Center w="100vw" h="100vh">
            <Spinner size="xl" color="blue.500" />
        </Center>
    );

    if (isUserSignedIn) return children;
    return <Navigate to={navigateTo} />
}

export default PrivateRoute;
