import React from 'react'
import Bg3 from "../assets/images/bg_3.jpg";
import AboutImg from "../assets/images/about.jpg";
import Person1 from "../assets/images/person_1.jpg";
import Person2 from "../assets/images/person_2.jpg";
import Person3 from "../assets/images/person_3.jpg";
import { Header } from '../components/Header';

export const About = (props) => {
  return (
    <>
      <Header page={ props.page } title={props.title} />
      <section className="ftco-section ftco-about">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(${AboutImg})` }}
            ></div>
            <div className="col-md-6 wrap-about">
              <div className="heading-section heading-section-white pl-md-5">
                <span className="subheading">About us</span>
                <h2 className="mb-4">Welcome to Carbook</h2>

                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  On her way she met a copy. The copy warned the Little Blind
                  Text, that where it came from it would have been rewritten a
                  thousand times and everything that was left from its origin
                  would be the word "and" and the Little Blind Text should turn
                  around and return to its own, safe country. A small river
                  named Duden flows by their place and supplies it with the
                  necessary regelialia. It is a paradisematic country, in which
                  roasted parts of sentences fly into your mouth.
                </p>
                <p>
                  <a href="" className="btn btn-primary py-3 px-4">
                    Search Vehicle
                  </a>
                </p>
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
            <div className="col-md-6 heading-section heading-section-white">
              <h2 className="mb-3">
                Do You Want To Earn With Us? So Don't Be Late.
              </h2>
              <a href="" className="btn btn-primary btn-lg">
                Become A Driver
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-7 text-center heading-section">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-3">Happy Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="">
                <div className="item">
                  <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <div
                      className="user-img mb-2"
                      style={{ backgroundImage: `url(${Person1})` }}
                    ></div>
                    <div className="text pt-4">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <div
                      className="user-img mb-2"
                      style={{ backgroundImage: `url(${Person2})` }}
                    ></div>
                    <div className="text pt-4">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Interface Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <div
                      className="user-img mb-2"
                      style={{ backgroundImage: `url(${Person3})` }}
                    ></div>
                    <div className="text pt-4">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">UI Designer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <div
                      className="user-img mb-2"
                      style={{ backgroundImage: `url(${Person1})` }}
                    ></div>
                    <div className="text pt-4">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">Web Developer</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap rounded text-center py-4 pb-5">
                    <div
                      className="user-img mb-2"
                      style={{ backgroundImage: `url(${Person1})` }}
                    ></div>
                    <div className="text pt-4">
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <p className="name">Roger Scott</p>
                      <span className="position">System Analyst</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-counter ftco-section img" id="section-counter">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="60">
                    0
                  </strong>
                  <span>
                    Year <br />
                    Experienced
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="1090">
                    0
                  </strong>
                  <span>
                    Total <br />
                    Cars
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text text-border d-flex align-items-center">
                  <strong className="number" data-number="2590">
                    0
                  </strong>
                  <span>
                    Happy <br />
                    Customers
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap ">
              <div className="block-18">
                <div className="text d-flex align-items-center">
                  <strong className="number" data-number="67">
                    0
                  </strong>
                  <span>
                    Total <br />
                    Branches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
