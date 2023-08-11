import React, { Component } from 'react';
import { BsCartFill } from 'react-icons/bs';
import { BiRupee } from 'react-icons/bi';
import apple from '../img/apple.jpg'
import Avacado from '../img/Avacado.jpg'
import Cabbage from '../img/Cabbage.jpg'
import Potatoes from '../img/Potatoes.jpg'
import '../productDetails/Productdetails.css'
class Productdetails extends Component {
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
                            <h2 className='hello'>Products Details</h2>
                            <p className="lead mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis nihil eaque
                                corporis ea officiis unde. Quos quo dignissimos ullam debitis. Quae</p>
                            <button className='bg-success p-1'>
                                CREATE NEW
                            </button>
                        </div>
                        <div className='container-fluid'>
                            <div className='col-md-8 mx-2'>
                                <div className ='table-responsive-sm table-responsive-md'>

                                    <table className='table mt-4'>
                                        <thead>
                                            <tr className='bg-primary text-white'>
                                                <th scope='col'>SN0</th>
                                                <th scope='col'>Product</th>
                                                <th scope='col'>Name</th>
                                                <th scope='col'>Price</th>
                                                <th scope='col'>Qty</th>
                                                <th className='text-center' scope='col'>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody style={{'fontWeight': 'bold'}}>
                                            <tr>
                                                <th scope='row'>70604</th>
                                                <td> <img src={Potatoes} height={70} width={70}></img></td>
                                                <td>Potatos</td>
                                                <td><BiRupee />45.00</td>
                                                <td>25Kgs</td>
                                                <td>
                                                <div className='text-center'>
                                                    <button className='bg-dark text-white mx-2'>UPDATE</button>
                                                    <button className='bg-danger text-white mt-1'>DELETE</button>
                                                    </div>
                                                    </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>70605</th>
                                                <td><img src={Cabbage} height={70} width={70}></img></td>
                                                <td>Cabbage</td>
                                                <td><BiRupee />16.00</td>
                                                <td>35Kgs</td>
                                                <td>
                                                    <div className='text-center'>
                                                        <button className='bg-dark text-white mx-2'>UPDATE</button>
                                                        <button className='bg-danger text-white mt-1'>DELETE</button>
                                                    </div>
                                                </td> 
                                            </tr>
                                            <tr>
                                                <th scope='row'>70606</th>
                                                <td><img src={Avacado} height={70} width={70}></img></td>
                                                <td>Avacado</td>
                                                <td><BiRupee />45.00</td>
                                                <td>36Kgs</td>
                                                <td>
                                                <div className='text-center'>
                                                    <button className='bg-dark text-white mx-2'>UPDATE</button>
                                                    <button className='bg-danger text-white mt-1'>DELETE</button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope='row'>70607</th>
                                                <td><img src={apple} height={70} width={70}></img></td>
                                                <td>Apple Red</td>
                                                <td><BiRupee />95.00</td>
                                                <td>15Kgs</td>
                                                <td>
                                                    <div className='text-center'>
                                                        <button className='bg-dark text-white mx-2'>UPDATE</button>
                                                        <button className='bg-danger text-white mt-1'>DELETE</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Productdetails;