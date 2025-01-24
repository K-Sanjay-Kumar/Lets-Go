import React from 'react';


const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center mt-5">
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up to start your trip</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div data-mdb-input-init className="form-outline mb-4">
                                        <input type="email" id="form5Example26" className="form-control" placeholder='abc@gmail.com' />
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button data-mdb-ripple-init type="submit" className="btn btn-primary mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div className="text-center p-3">
                    © {new Date().getFullYear()} Copyright:
                    <a className="text-body" href="/">Lets Go</a>
                </div>
            </footer>
        </>
    )
}

export default Footer;