import React from 'react'
import Footer from './Footer'
export default function About() {
    return (
        <>
            <div >
                <header className="bg-dark text-center py-5 mb-4">
                    <div className="container">
                        <h1 className='my-1 text-center display-1 text-white'>Meet the Team</h1>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">Team Member</h5>
                                    <div className="card-text text-black-50">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">Team Member</h5>
                                    <div className="card-text text-black-50">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/sNut2MqSmds/500x350" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">Team Member</h5>
                                    <div className="card-text text-black-50">Web Developer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 mb-4">
                            <div className="card border-0 shadow">
                                <img src="https://source.unsplash.com/7u5mwbu7qLg/500x350" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-0">Team Member</h5>
                                    <div className="card-text text-black-50">Web Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {<Footer />}
        </>
    )
}
