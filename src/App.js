import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import All from './Components/All';
import Bags from './Components/Bags';
import CartItem from './Components/CartItem';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Jackets from './Components/Jackets';
import Navbar from './Components/Navbar';
import Shirts from './Components/Shirts';

function App() {
    const [cart, setcart] = useState([]);
    const handelclick = (item) => {
        setcart([...cart, item])
    }
    return ( <
            >
            <
            Router >
            <
            Navbar cartx = { cart.length }
            handelclick = { handelclick }
            /> <
            Routes >
            <
            Route path = '/'
            element = { < Home / > }
            /> <
            Route path = '/All'
            element = { < All handelclick = { handelclick }
                />} / >
                <
                Route path = '/Shirts'
                element = { < Shirts handelclick = { handelclick }
                    />}/ >
                    <
                    Route path = '/Bags'
                    element = { < Bags handelclick = { handelclick }
                        />}/ >
                        <
                        Route path = '/Jackets'
                        element = { < Jackets handelclick = { handelclick }
                            />}/ >
                            <
                            Route path = '/CartItem'
                            element = { < CartItem cart = { cart }
                                setcart = { setcart }
                                />}/ >
                                <
                                /Routes> <
                                /Router> <
                                Footer / >
                                <
                                />

                            );
                        }

                        export default App;