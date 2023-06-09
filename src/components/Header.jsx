import React from 'react'
import Bg3 from "../assets/images/bg_3.jpg";

export const Header = (props) => {
  return (
    <section
      className="hero-wrap hero-wrap-2 js-fullheight"
      style={{ backgroundImage: `url(${Bg3})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
          <div className="col-md-9 pb-5">
            <p className="breadcrumbs">
              <span className="mr-2">
                <a href="/">
                  Home <i className="ion-ios-arrow-forward"></i>
                </a>
              </span>{" "}
              <span>
                {props.page} <i className="ion-ios-arrow-forward"></i>
              </span>
            </p>
                      <h1 className="mb-3 bread">{props.title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
