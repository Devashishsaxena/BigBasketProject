import React, { Component } from 'react';
import { BsCartFill } from 'react-icons/bs';
import '../createProduct/Createproduct.css'
class Createproduct extends Component {
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
                            <h2 className='hello'>Create New Product</h2>
                            <p className='lead mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reiciendis nihil eaque
                                corporis ea officiis unde. Quos quo dignissimos ullam debitis. Quae</p>
                        </div>
                        <div className='col-lg-5 col-md-12'>
                            <div className='card'>
                                <div className='card-header bg-primary'>
                                    <h3 className='text-white'>New Product</h3>
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='mb-3'>
                                            <input type='text' className='form-control' placeholder='Product Name' />
                                        </div>
                                            <div className='input-group mb-3'>
                                                <input type='text' className='form-control' placeholder='Product Image' />
                                                    <span className='input-group-text'>Browser</span>   
                                        </div>
                                        <div className='mb-3'>
                                            <input type='text' className='form-control' placeholder='Price' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type='text' className='form-control' placeholder='Available Qty' />
                                        </div>
                                        <div className='mb-3'>
                                            <textarea className='form-control' placeholder='General info'></textarea>
                                        </div>
                                        <button type='submit' className='bg-success'>Create</button>
                                    </form>
                                </div>
                                <div >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Createproduct;