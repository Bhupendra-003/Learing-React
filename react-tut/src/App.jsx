import React from 'react';
import Nav from './components/Nav';
import { Routing } from './util/Routing';
import UserDetail from './components/UserDetail';
function App() {
    return (
        <>
            <Nav />
            <Routing />
        </>
    );
}

export default App;
