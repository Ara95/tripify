import Header from "./HeaderComponent";
import Googlemaps from "./Googlemaps";
import Axios from "axios";
import React from "react";

// import { XMapbox } from "elements-x/dist/mapbox";
// XMapbox.accessToken =
//   "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";

class Exploreinfo extends React.Component {
  // page content
  constructor(props) {
    super(props);
    this.state = {
      locationItem: [],
      pageTitle: "Stadsparken",
      pageDescription: "",
    };
  }

  render() {
    // const { eventInfo } = this.props.location.state.eventObj;
    console.log("product", this.props.location.eventObj);
    // const event = itemEvent.find((p) => p.eventId == location.query.id);
    // console.log("product", this.props.location.query.query);

    const explorestyle = {
      backgroundImage:
        "linear-gradient(150deg, rgba(63, 174, 255, .3)15%, rgba(63, 174, 255, .3)70%, rgba(63, 174, 255, .3)94%), url(https://bootdey.com/img/Content/flores-amarillas-wallpaper.jpeg)",
      height: "350px",
      backgroundSize: "cover",
    };

    return (
      <div>
        <title>{this.props.location.state.eventObj.eventName}</title>
        <Header
          head={this.props.location.state.eventObj.eventName}
          description={this.state.pageDescription}
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
          rel="stylesheet"
        />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="top-breadcrumb">
                {/* <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Social
                  </li>
                </ol>
              </nav> */}
              </div>
            </div>
          </div>
          <div class="img" style={explorestyle}></div>
          <div class="card social-prof">
            {/* <div class="card-body"> */}
            {/* <div class="wrapper">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                alt=""
                class="user-profile"
              />
              <h3>Jane Smith</h3>
              <p>Web Developer</p>
            </div> */}
            {/* <div class="row ">
              <div class="col-lg-12">
                <ul class=" nav nav-tabs justify-content-center s-nav">
                  <li>
                    <a href="#">Timeline</a>
                  </li>
                  <li>
                    <a class="active" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#">Friends</a>
                  </li>
                  <li>
                    <a href="#">Photos</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* </div> */}
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body info-card social-about">
                  <h2 class="text-blue">Om</h2>
                  <h4>
                    <strong>
                      {this.props.location.state.eventObj.eventName}
                    </strong>
                  </h4>
                  <p>{this.props.location.state.eventObj.description}</p>
                  {/* <h4 class="mb-3">
                  <strong>Infoformaton</strong>
                </h4> */}
                  <div class="row">
                    {/* <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-birthday-cake mr-2"></i>
                      <span>15/08/1991</span>
                    </div>
                  </div> */}
                    {/* <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-map-marker-alt mr-2"></i>
                      <span> Örebro</span>
                    </div>
                  </div> */}
                  </div>
                  {/* <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-users mr-2"></i>
                      <span>Female</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fa-briefcase mr-2"></i>
                      <span>UI/UX Designer</span>
                    </div>
                  </div>
                </div> */}
                  {/* <div class="row">
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-mobile mr-2"></i>
                      <span>8392832983</span>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="social-info">
                      <i class="fas fas fa-envelope mr-2"></i>
                      <span>like @example.com</span>
                    </div>
                  </div>
                </div> */}
                </div>
              </div>
            </div>
            {/* <div class="col-lg-6">
            <div class="card info-card">
              <div class="card-body">
                <h2 class="text-blue">Skills</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>HTML5</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Bootstrap Framework</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>Vanilla Javascript</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Angular Js</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>Adobe Photoshop</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>Adobe Illustrator</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>SASS/SCSS</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <h4>WORDPRESS</h4>
                    <div class="mb-3">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div class="card info-card">
                <div class="card-body">
                  <h2 class="text-blue">Plats</h2>
                  <div class="row">
                    <Googlemaps />
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-lg-6">
            <div class="card info-card">
              <div class="card-body">
                <h2 class="text-blue">Work</h2>
                <div class="row">
                  <div class="col-lg-6">
                    <h4>
                      <strong>Creative Arts - 2016-19</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Web Media - 2014-16</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Global Infosoft - 2012-14</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div class="col-lg-6">
                    <h4>
                      <strong>Freelancer - 2011-12</strong>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Exploreinfo;
