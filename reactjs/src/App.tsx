import React, {FC} from 'react';
import './App.css';
//import {useActions} from "./hooks/useActions";
import Skeleton from "./layout/Skeleton";

const App:FC = () => {
    //const {setUser, setIsAuth} = useActions();

    // useEffect(() => {
    //     if(localStorage.getItem('auth')) {
    //         setUser({username: localStorage.getItem('username' || '')} as IUser)
    //         setIsAuth(true);
    //     }
    // }, [])

    return (
        <Skeleton/>
        // <Layout>
        //         <Navbar/>
        //
        //     <Layout.Content>
        //         <VerticalMenu/>
        //         <AppRouter />
        //     </Layout.Content>
        //
        // </Layout>
    );
};

export default App;
