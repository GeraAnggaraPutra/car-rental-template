import React from 'react'
import Car1 from '../assets/images/car-1.jpg'
import Car2 from '../assets/images/car-2.jpg'
import Car3 from '../assets/images/car-3.jpg'
import Car4 from '../assets/images/car-4.jpg'
import Car5 from '../assets/images/car-5.jpg'
import Car6 from '../assets/images/car-6.jpg'
import Car7 from '../assets/images/car-7.jpg'
import Car8 from '../assets/images/car-8.jpg'
import Car9 from '../assets/images/car-9.jpg'
import Car10 from '../assets/images/car-10.jpg'
import Car11 from '../assets/images/car-11.jpg'
import Car12 from '../assets/images/car-12.jpg'
import { Header } from '../components/Header'

export const Cars = (props) => {
  return (
    <>
      <Header page={props.page} title={props.title} />

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car1})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car2})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Range Rover</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Subaru</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car3})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car4})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car5})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Range Rover</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Subaru</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car6})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car7})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car8})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Range Rover</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Subaru</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car9})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car10})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car11})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Range Rover</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Subaru</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="car-wrap rounded ">
                <div
                  className="img rounded d-flex align-items-end"
                  style={{ backgroundImage: `url(${Car12})` }}
                ></div>
                <div className="text">
                  <h2 className="mb-0">
                    <a href="/car-details">Mercedes Grand Sedan</a>
                  </h2>
                  <div className="d-flex mb-3">
                    <span className="cat">Cheverolet</span>
                    <p className="price ml-auto">
                      $500 <span>/day</span>
                    </p>
                  </div>
                  <p className="d-flex mb-0 d-block">
                    <a href="#" className="btn btn-primary py-2 mr-1">
                      Book now
                    </a>{" "}
                    <a
                      href="/car-details"
                      className="btn btn-secondary py-2 ml-1"
                    >
                      Details
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
