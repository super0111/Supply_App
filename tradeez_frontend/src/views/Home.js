import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import metals from "../assests/images/metals.svg";
import cement from "../assests/images/cement.svg";
import pharmaceuticals from "../assests/images/pharmaceuticals.svg";
import chemicals from "../assests/images/chemicals.svg";
import packages from "../assests/images/packages.svg";
import polymere from "../assests/images/polymere.svg";
import agriculture from "../assests/images/agriculture.svg";
import textile from "../assests/images/textile.svg";
import circular from "../assests/images/circular.png";
import rectangular from "../assests/images/rectangular.png";
import square from "../assests/images/square.png";
import easy from "../assests/icons/easy.svg";
import network from "../assests/icons/network.svg";
import reliability from "../assests/icons/reliability.svg";
import quality from "../assests/icons/quality.svg";
import prices from "../assests/icons/prices.svg";
import time from "../assests/icons/time.svg";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const handleRedirect = () => {
    navigate("/product");
  };

  return (
    <div className="home container-fluid overflow-hidden px-0">
      <Header />
      <Banner />
      <div className="d-flex flex-column supply-section">
        <div className="d-flex flex-column text-center py-5">
          <h3 className="font-weight-bold inter">Supplying to 12+ countries</h3>
          <p className="inter_med">
            All of your raw material requirements can be met in one place.
          </p>
          <div className="supply-list">
            <div className="supply-list--item ">
              <span className="counts inter">1000+</span>
              <span className="desc">Registered SMEs</span>
            </div>
            <div className="supply-list--item">
              <span className="counts inter">500+</span>
              <span className="desc">Cities</span>
            </div>
            <div className="supply-list--item">
              <span className="counts inter">10000+</span>
              <span className="desc">Transactions</span>
            </div>
          </div>
          <h4 className="font-weight-bold inter">
            Satisfies the needs of 100+ different product categories in multiple
            industries
          </h4>
          <p className="inter_med">
            All of your raw material requirements can be met in one place.
          </p>
        </div>
        <div className="category">
          <div className="container-xxl">
            <div className="categorylist row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 row-cols-sm-2 ">
              <div className="col">
                <div className="card">
                  <img src={metals} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Metals & Alloys</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={packages} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Packaging & Printing</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={agriculture} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Agriculture</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={polymere} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Polymers</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={textile} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Textile</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={chemicals} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Chemicals</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img
                    src={pharmaceuticals}
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="inter_med">Pharmaceuticals</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={cement} className="card-img-top" alt="..." />
                  <h5 className="inter_med">Cement</h5>
                  <div className="card-body categorylist_button">
                    <button className="butto-primaryn">25K+ orders</button>
                  </div>
                </div>
              </div>

              <button className="all_category" onClick={handleRedirect}>
                View all Categories
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="supplyfirst">
        <h3 className="inter">Why SupplyFirst</h3>
        <h5 className="inter_mid">
          All of your raw material requirements can be met in one place.
        </h5>
        <div className="supplyfirst_list row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-sm-2  ">
          <div className="col">
            <div className="  supplyfirst_listItem ">
              <div className="supplyfirst_icon">
                <img src={easy} className="card-img-top" alt="..." />
              </div>
              <h5 className="inter">Easy Sampling</h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" supplyfirst_listItem">
              <div className="supplyfirst_icon">
                <img src={network} className="card-img-top" alt="..." />
              </div>
              <h5 className="inter">Large network of factories </h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" supplyfirst_listItem">
              <div className="supplyfirst_icon">
                <img src={reliability} className="card-img-top" alt="..." />
              </div>
              <h5 className="inter">Reliablity</h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" supplyfirst_listItem">
              <div className="supplyfirst_icon">
                <img src={quality} className="card-img-top" alt="..." />
              </div>
              <h5 className="inter">Quality Assuarance</h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" supplyfirst_listItem">
              <div className="supplyfirst_icon">
                <img src={prices} className="prices card-img-top" alt="..." />
              </div>

              <h5 className="inter">Best Prices</h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
          <div className="col">
            <div className=" supplyfirst_listItem">
              <div className="supplyfirst_icon">
                <img src={time} className="card-img-top" alt="..." />
              </div>
              <h5 className="inter">Real time Order Updates </h5>
              <p>
                By going online, you can utilize digital marketing strategies to
                increase your reach.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="process">
        <h3 className="get_started">Get Started Quickly </h3>
        <p className="fastest">
          Fastest turn around time from sampling to Production{" "}
        </p>
        <div className="process_lists">
          <div className="bar"></div>
          <div className="process_list">
            <div className="rounded_effect">1</div>
            <div className="">Create account</div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">2</div>
            <div className="">Complete KYC </div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">3</div>
            <div className="">Request Quote </div>
          </div>
          <div className="process_list">
            <div className="rounded_effect">4</div>
            <div className="">Start Production</div>
          </div>
        </div>
      </div>
      <div className="container-fluid quotes_section">
        <div className="row pt-5">
          <div className="col-12 best_prices_container">
            <h3 className="best_prices">
              Get Best Prices For 100+ Products in <br />
              24-48 Hours
            </h3>
            <p className="inter_med">
              All of your raw material requirements can be
              <br /> met in one place.
            </p>
            <div className="items_container pb-5">
              <div className="left_item">
                <img src={rectangular} alt="img" className="rectangular" />
                <h3 className="pipe">square GI Pipe</h3>
                <button className="add_quotes_btn">
                  <b> Add to quotes</b>
                </button>
              </div>
              <div className="middle_item">
                <img src={circular} alt="img" className="circular" />
                <h3 className="pipe">Circular GI Pipe</h3>
                <button className="add_quotes_btn">
                  <b> Add to quotes</b>
                </button>
              </div>
              <div className="right_item">
                <img src={square} alt="img" className="rectangular" />
                <h3 className="pipe">Rectangular GI Pipe</h3>
                <button className="add_quotes_btn">
                  <b> Add to quotes</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
