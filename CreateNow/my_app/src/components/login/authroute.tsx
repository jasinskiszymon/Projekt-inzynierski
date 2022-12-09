import React, { PropsWithChildren, ReactNode, useEffect, useMemo, useState } from 'react';
import { getAuth, onAuthStateChanged, reload } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface IAuthRouteProps {
    children?: ReactNode | undefined;
}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const { children } = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLoading(false);
               console.log("Zalogowany")
            } else {
                console.log("Niezalogowany")
              
            
            }
        });

        return () => AuthCheck();
    }, [auth]);

    if (loading) return <p>loading ...</p>;

    return <>{children}</>;
};

export default AuthRoute;