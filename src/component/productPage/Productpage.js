import React, { Component } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import apple from '../img/apple.jpg'
import Avacado from '../img/Avacado.jpg'
import Cabbage from '../img/Cabbage.jpg'
import Potatoes from '../img/Potatoes.jpg'
import '../productPage/Productpage.css'
class Productpage extends Component {
    render() {
        return (
            <div className='mt-2'>
                <nav className='navbar navbar-expand-lg bg-success'>
                    <div className='container-fluid'>
                        <a className='navbar-brand text-white' href='#'><BsCartFill size={30} style={{ 'color': 'white', 'marginBottom': '5px' }} /> Big Basket </a>
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
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='Header'>
                            <h2 className='hello'>Products Page</h2>
                            <p className="lead mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis nihil eaque
                                corporis ea officiis unde. Quos quo dignissimos ullam debitis. Quae</p>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-4 col-sm-10 d-flex flex-coloum text-center justify-content-center align-items-center'>
                                <div className='card'>
                                    <div className='card-Header mx-5'>
                                        <img src={Potatoes} height={120} width={120}></img>
                                    </div>
                                    <div className='card-Body mx-4'>
                                        <div style={{ 'width': '80%', 'padding': '2px', 'marginLeft': '20px', 'marginBottom': '20px'}} className='card'>
                                        <ul className='list-group list-group-flush'>
                                            <li className='list-group-item'>NAME : Potatos</li>
                                            <li className='list-group-item'>Price :<BiRupee />45.00</li>
                                                <li className='list-group-item'>Qty : 25 </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex flex-coloum text-center justify-content-center align-items-center'>
                                <div className='card mt-2'>
                                    <div className='card-Header mx-5'>
                                        
                                        <img src={Cabbage} height={120} width={120}></img>
                                    </div>
                                    <div className='card-Body mx-4'>
                                        <div style={{ 'width': '80%', 'padding': '2px', 'marginLeft': '20px', 'marginBottom': '20px' }} className='card'>
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item'>NAME : Cabbage</li>
                                                <li className='list-group-item'>Price :<BiRupee />16.00</li>
                                                <li className='list-group-item'>Qty : 35 </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex flex-coloum text-center justify-content-center align-items-center'>
                                <div className='card mt-2'>
                                    <div className='card-Header mx-5'>
                                        <img src={Avacado} height={120} width={120}></img>
                                    </div>
                                    <div className='card-Body mx-4'>
                                        <div style={{ 'width': '80%', 'padding': '2px', 'marginLeft': '20px', 'marginBottom': '20px' }} className='card'>
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item'>NAME : Avacado</li>
                                                <li className='list-group-item'>Price :<BiRupee />45.00</li>
                                                <li className='list-group-item'>Qty : 36 </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-4 col-sm-6 d-flex flex-coloum text-center justify-content align-items-center'>
                                <div className='card mt-2'>
                                    <div className='card-Header mx-5'>
                                        <img src={apple} height={120} width={120}></img>
                                    </div>
                                    <div className='card-Body mx-4'>
                                        <div style={{ 'width': '80%', 'padding': '2px', 'marginLeft': '20px', 'marginBottom': '20px' }} className='card'>
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item'>NAME : Apple Red</li>
                                                <li className='list-group-item'>Price :<BiRupee />95.00</li>
                                                <li className='list-group-item'>Qty : 15 </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productpage;