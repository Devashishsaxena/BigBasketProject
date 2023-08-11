import React, { Component } from 'react';
import { BsCartFill } from 'react-icons/bs';
import '../Bigbasket/Bigbasket.css'



class Bigbasket extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className='navbar navbar-expand-lg bg-success'>
                    <div className='container-fluid'>
                        <a className='navbar-brand text-white' href='#'><BsCartFill size={30} style={{ 'color': 'white' ,'marginBottom': '5px'}}  /> Big Basket </a>
                        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                                <li className='nav-item'>
                                    <a className='nav-link active text-white' aria-current='page' href='#'>Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link text-white' href='#'>Products</a>
                                </li>
                            </ul>
                            <div className='ms-auto'>
                                <span className='text-white'>Admin</span>
                            </div>
                        </div>
                    </div>
                </nav>
                      <div className='fullscreen-landing' >
                            <div className='overlay'>
                                <div className='text-white d-flex flex-column text-center justify-content-center align-items-center h-100'>
                                    <h5 style={{ 'marginTop': '5%' }} className='display-4'> <BsCartFill style={{ 'color': 'white' }} size={80} /> <b>Big Basket</b></h5>
                                    <p className="lead mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis nihil eaque
                                        corporis ea officiis unde. Quos quo dignissimos ullam debitis. Quae</p>
                                </div>
                            </div>
                        </div>
            </React.Fragment>
        );
    }
}

export default Bigbasket;