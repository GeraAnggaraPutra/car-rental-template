import React from 'react'
import Car1 from "../assets/images/car-1.jpg";
import Car2 from "../assets/images/car-2.jpg";
import Car3 from "../assets/images/car-3.jpg";
import Car4 from "../assets/images/car-4.jpg";
import Car5 from "../assets/images/car-5.jpg";
import Car6 from "../assets/images/car-6.jpg";
import { Header } from '../components/Header';

export const Pricing = (props) => {
  return (
    <>
      <Header page={props.page} title={props.title} />

      <section className="ftco-section ftco-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="car-list">
                <table className="table">
                  <thead className="thead-primary">
                    <tr className="text-center">
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th className="bg-primary heading">Per Hour Rate</th>
                      <th className="bg-dark heading">Per Day Rate</th>
                      <th className="bg-black heading">Leasing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car1})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car2})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car3})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car4})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car5})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>

                    <tr className="">
                      <td className="car-image">
                        <div
                          className="img"
                          style={{ backgroundImage: `url(${Car6})` }}
                        ></div>
                      </td>
                      <td className="product-name">
                        <h3>Cheverolet SUV Car</h3>
                        <p className="mb-0 rated">
                          <span>rated:</span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                          <span className="ion-ios-star"></span>
                        </p>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 10.99
                            </span>
                            <span className="per">/per hour</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 60.99
                            </span>
                            <span className="per">/per day</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>

                      <td className="price">
                        <p className="btn-custom">
                          <a href="#">Rent a car</a>
                        </p>
                        <div className="price-rate">
                          <h3>
                            <span className="num">
                              <small className="currency">$</small> 995.99
                            </span>
                            <span className="per">/per month</span>
                          </h3>
                          <span className="subheading">
                            $3/hour fuel surcharges
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
