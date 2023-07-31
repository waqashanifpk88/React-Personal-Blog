import React from 'react'

const About = () => {
    return (
        <>
            <div className="container py-5 px-2 bg-primary">
                <div className="row py-5 px-4">
                    <div className="col-sm-6 text-center text-md-left">
                        <h1 className="mb-3 mb-md-0 text-white text-uppercase font-weight-bold">About Me</h1>
                    </div>
                    <div className="col-sm-6 text-center text-md-right">
                        <div className="d-inline-flex pt-2">
                            <h4 className="m-0 text-white"><a className="text-white" href="">Home</a></h4>
                            <h4 className="m-0 text-white px-2">/</h4>
                            <h4 className="m-0 text-white">About Me</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container bg-white pt-5">
                <div className="row px-3 pb-5">
                    <div className="col-md-12">
                        <h2 className="mb-4 font-weight-bold">Developer with 3.5 + years of experience</h2>
                        {/* <img className="img-fluid float-left w-50 mr-4 mb-3" src="tayyab.jpg" alt="Image"/> */}
                        <p className="m-0" style={{ textAlign: 'justify' }}>
                            I have done my Bachelor's degree in Computer Science from Comsats University Lahore. As an IT enthusiast, I'm always eager to explore new sectors and fields within the industry. My main areas of interest include Smart Business Solutions, Key Processing Indicators, Dashboards, E-Commerce , Content management systems (CMS), Customer Relationship Management (CRM) and Adequate Web Apps. You can also find me on Github at : https://github.com/TayyabAslam123
                        </p>
                    </div>
                    <hr />
                    <div className="col-md-12 pt-4">
                        <h4 className="mb-4 font-weight-bold">My Professional Skills :</h4>
                        <div>
                            <h6>HTML + CSS + Bootstrap</h6>
                            <progress value="90" max="100"></progress>
                        </div>
                        <div>
                            <h6>JavaScript + jQuery</h6>
                            <progress value="90" max="100"></progress>
                        </div>
                        <div>
                            <h6>PHP</h6>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div>
                            <h6>Laravel</h6>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div>
                            <h6>REST API</h6>
                            <progress value="80" max="100"></progress>
                        </div>
                        <div>
                            <h6>Object-oriented programming (OOP)</h6>
                            <progress value="70" max="100"></progress>
                        </div>
                        <div>
                            <h6>Database</h6>
                            <progress value="70" max="100"></progress>
                        </div>
                        <div>
                            <h6>Version Control Systems</h6>
                            <progress value="70" max="100"></progress>
                        </div>
                        <div>
                            <h6>Third-Party Integrations</h6>
                            <progress value="70" max="100"></progress>
                        </div>
                        <div>
                            <h6>React JS</h6>
                            <progress value="60" max="100"></progress>
                        </div>
                        <div>
                            <h6>WordPress</h6>
                            <progress value="50" max="100"></progress>
                        </div>
                        <div>
                            <h6>Web scraping</h6>
                            <progress value="50" max="100"></progress>
                        </div>
                        <div>
                            <h6>Ionic</h6>
                            <progress value="40" max="100"></progress>
                        </div>



                        {/* <div className="d-flex flex-column skills">
                            <div className="progress w-100 mb-4">
                                <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">Adaptability</div>
                            </div>
                            <div className="progress w-100 mb-4">
                                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">Research</div>
                            </div>
                            <div className="progress w-100">
                                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">Editing</div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
