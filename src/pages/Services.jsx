import React from 'react'
import Bg3 from '../assets/images/bg_3.jpg'
import { Header } from '../components/Header';

export const Services = (props) => {
  return (
    <>
      <Header page={props.page} title={props.title} />

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section ">
              <span className="subheading">Services</span>
              <h2 className="mb-3">Our Latest Services</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="services services-2 w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-route"></span>
                </div>
                <div className="text w-100">
                  <h3 className="heading mb-2">Wedding Ceremony</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services services-2 w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-route"></span>
                </div>
                <div className="text w-100">
                  <h3 className="heading mb-2">City Transfer</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services services-2 w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-route"></span>
                </div>
                <div className="text w-100">
                  <h3 className="heading mb-2">Airport Transfer</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="services services-2 w-100 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="flaticon-route"></span>
                </div>
                <div className="text w-100">
                  <h3 className="heading mb-2">Whole City Tour</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="ftco-section ftco-intro"
        style={{ backgroundImage: `url(${Bg3})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-md-6 heading-section heading-section-white ">
              <h2 className="mb-3">
                Do You Want To Earn With Us? So Don't Be Late.
              </h2>
              <a href="#" className="btn btn-primary btn-lg">
                Become A Driver
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
