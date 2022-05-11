import React from "react";

import './Home.css';
const Home = () => {
    return (

        <div>

            <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
                <div class="container">


                    <a class="navbar-brand logo-text page-scroll" href="index.html">PT-US</a>


                    <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.png" alt="alternative" /></a>

                    <button class="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#details">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#features">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#about">Get paid to test</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#contact">Apply</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <span class="nav-item social-icons">
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                        </span>
                    </div>
                </div>
            </nav>


            <div class="header">
                <div class="ocean">
                    <div class="wave"></div>
                    <div class="wave"></div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="text-container">
                                <h1 class="h1-large">WE ARE HIRING CUSTOMER SUPPORT</h1>
                                <p class="p-large">Get paid for testing products on our platform, apply for different work from home job with ease</p>
                                <a class="btn-solid-lg page-scroll" href="#statement">Apply</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-container">
                                <img class="img-fluid" src="images/header-gem.svg" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="statement" class="basic-1">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-container">
                                <h3>The framework is a solid foundation for websites</h3>
                                <p class="p-large">“I've designed this framwork based on my experience with building websites for many types of industries. What's great about Gemdev is that it can be used by anyone from absolute beginners to skilled web developers from around the world”</p>
                                <img src="images/statement.jpg" alt="alternative" />
                                <h6>Donna Staple, Founder</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="details" class="basic-2">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-xl-7">
                            <div class="image-container">
                                <img class="img-fluid" src="images/details-1.svg" alt="alternative" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-xl-5">
                            <div class="text-container">
                                <h2>Easy to download</h2>
                                <p>It takes no more than 10 minutes to download the framework, set it up and start working on your project. You'll see impressive results in a couple of hours</p>
                                <ul class="list-unstyled li-space-lg">
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body"><strong>For startups</strong> which have less data and operations</div>
                                    </li>
                                    <li class="media">
                                        <i class="fas fa-square"></i>
                                        <div class="media-body"><strong>For big companies</strong> with a lot of data and daily inputs</div>
                                    </li>
                                </ul>
                                <a class="btn-solid-reg popup-with-move-anim" href="#details-lightbox">Lightbox</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div id="details-lightbox" class="lightbox-basic zoom-anim-dialog mfp-hide">
                <div class="row">
                    <button title="Close (Esc)" type="button" class="mfp-close x-button">×</button>
                    <div class="col-lg-8">
                        <div class="image-container">
                            <img class="img-fluid" src="images/details-lightbox.jpg" alt="alternative" />
                        </div>
                        <div class="col-lg-4">
                            <h3>Goals Setting</h3>
                            <hr />
                            <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                            <h4>User Feedback</h4>
                            <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                            <ul class="list-unstyled li-space-lg">
                                <li class="media">
                                    <i class="fas fa-check"></i><div class="media-body">Splash screen panel</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-check"></i><div class="media-body">Statistics graph report</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-check"></i><div class="media-body">Events calendar layout</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-check"></i><div class="media-body">Location details screen</div>
                                </li>
                                <li class="media">
                                    <i class="fas fa-check"></i><div class="media-body">Onboarding steps interface</div>
                                </li>
                            </ul>
                            <a class="btn-solid-reg mfp-close page-scroll" href="#contact">Contact Us</a> <button class="btn-outline-reg mfp-close as-button" type="button">Back</button>
                        </div>
                    </div>
                </div>

            </div>
           
            <div class="footer bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-pinterest-p fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="#your-link">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div> 
            </div> 
        </div>
    </div> 
    
    <div class="copyright bg-gray">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <p class="p-small">Copyright © <a class="no-line" href="#your-link">Your name</a></p>
            </div> 
        </div> 
        <div class="row">
            <div class="col-lg-12">
                <p class="p-small">Distributed by: <a class="no-line" href="https://themewagon.com/">Themewagon</a></p>
            </div> 
        </div> 
       
    </div> 
</div> 



        </div>
        

    );
}

export default Home;