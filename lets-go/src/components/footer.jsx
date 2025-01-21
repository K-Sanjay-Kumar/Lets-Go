import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Footer = () => {
    return (
        <>
            <footer class="bg-body-tertiary text-center mt-5">
                <div class="container p-4 pb-0">
                    <section class="">
                        <form action="">
                            <div class="row d-flex justify-content-center">
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up to start your trip</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" id="form5Example26" class="form-control" placeholder='abc@gmail.com' />
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button data-mdb-ripple-init type="submit" class="btn btn-primary mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div class="text-center p-3">
                    © {new Date().getFullYear()} Copyright:
                    <a class="text-body" href="/">Lets Go</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;