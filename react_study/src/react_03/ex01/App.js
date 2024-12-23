import React from 'react';
import './css/layout.css'
import Header from './Header'
import MainView from './MainView'
import Contents from './Contents'
import Footer from './Footer'

function App() {
    return(
        <div className='wrap'>
            <Header />
            <MainView />
            <Contents />
            <Footer />
        </div>
    )
}

export default App;