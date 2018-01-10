import React from "react";
import { Link } from 'react-router-dom'
import   './LandingPage.css';
import Footer from '../../components/Footer/Footer';

const LandingPage = ({ children }) =>
  <div>
      <div className="text-center p-4 landingJumbo mx-auto"style={{marginTop:"15vh", width:"98%"}}>
          <img className="img-fluid rounded mx-auto" src='/assets/images/ph/porthub_logo.png' alt="logo"/>       
          <p className="d-none d-md-block" style={{fontSize:"2.5em"}}> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the pursuit of that job you deserve.</p>
          <p className="d-md-none" style={{fontSize:"1.5em"}}> Create a portfolio website and a resume in minutes!<br/>Stay a step ahead of your competitors in the pursuit of that job you deserve.</p>                  
      </div>
      <div className="row mx-auto" style={{position:"absolute", top:"80vh", width:"96%"}}>
            <div className="col-lg-4 col-sm-10 offset-lg-2 offset-sm-1 d-flex p-0 text-center">
              <Link to='createsite' className="btn btn-warning mx-4 w-100 landingButton d-none d-md-block">Create a Portfolio Website</Link>
              <Link to='createsite' className="btn btn-warning mx-4 w-100 smlandingButton d-md-none">Create a Portfolio Website</Link>              
            </div>
            <div className="col-lg-4 col-sm-10  offset-sm-1 p-0 d-flex text-center p-0">     
              <Link to='createresume'className="btn btn-info mx-4 w-100 landingButton d-none d-md-block">Create a Resume</Link>
              <Link to='createresume'className="btn btn-info mx-4 w-100 smLandingButon d-md-none">Create a Resume</Link>              
            </div>
      </div>
    <div className='fullscreen-bg '>
      <video className='fullscreen-bg__video' autoPlay muted loop>
        <source src="https://s3-eu-west-1.amazonaws.com/video.gallereplay.com/artistarea/Lighthouse%20stands%20in%20Istanbul%E2%80%99s%20harbour_0554659b-5dc1-43d6-8a93-b31ec6b67f63/Cinemagraph_plain/1920x1080/cinemagraph.mp4"
        type="video/mp4"></source>
      </video>  
    </div>
    <div className="d-flex justify-content-center triangleSpacer">
      <div className="row bg-white w-100">
      </div>
      <img className="img-fluid" src="/assets/images/triangle-spacer.png"></img>
      <div className="row bg-white w-100">
      </div>      
    </div>
    <div className="row d-flex moreInfo p-4 m-0 bg-white" style={{width:"105%"}}>
        <div className="col-12 w-100 d-flex justify-content-center moreInfo-title">How It Works</div>
        <div className="col-lg-4 w-100 d-flex flex-column justify-content-start align-items-center moreInfo-item text-center">
              <p className="display-2 mb-0">1.</p>
              <p className="m-0 mb-2"><i className="fa fa-github fa-3x"></i></p>
              <p className="mt-4">If you haven't already, setup a <a href="http://github.com">Git Hub</a> and authenticate with our site.  You'll be allowing us to create a Git Hub Page with your new website.  Authenticating with our site also allows you to save your data if you want to use multiple website and resume templates</p>
        </div>
        <div className="col-lg-4 w-100 d-flex flex-column justify-content-start  moreInfo-item text-center">
              <p className="display-2 mb-0">2.</p>
              <p className="m-0 mb-2"><i className="fa fa-file-text fa-3x"></i></p>
              <p className="mt-4"> Choose either to make a Portfolio Website or Resume. Each template has a certain amount of input fields that you'll need to fill out. The great thing is if you want to make another template in the future, you'll already have these fields available in your profile.  Future versions of this web app will pull most of that information from your LinkedIn and GitHub profiles. </p>
        </div>
        <div className="col-lg-4 w-100 d-flex flex-column justify-content-start moreInfo-item text-center">
              <p className="display-2 mb-0">3.</p>
              <p className="m-0 mb-2"><i className="fa fa-globe fa-3x"></i></p>
              <p className="mt-4">When you're done, publish your websites to your Git Hub account and we'll include a LIVE URL for you to share.  Need a copy of your resume? Feel free to download a PDF with a simple click!  Yes, it's that's easy!</p>
              <p><i className="fa fa-handshake-o fa-2x"></i></p>
        </div>
        <Footer/>        
    </div>

</div>
export default LandingPage;
