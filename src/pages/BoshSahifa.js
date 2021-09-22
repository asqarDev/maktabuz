import {
  faDoorOpen,
  faNewspaper,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import React, { Component } from "react";
import { ContainerDashboard } from "./StyleBoshSahifa";
import style from "./BoshSahifa.module.css";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import gerb from "../img/pngegg.png";
import bg3t from "../img/bg3t.jpg";
import "../App.css";
import { Link, NavLink } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import FadeLoader from "react-spinners/FadeLoader";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";

export default class BoshSahifa extends Component {
  state = {
    loader: false,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
      });
      setTimeout(() => {
        this.setState({
          loader: false,
        });
      }, 2000);
    });
  };
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          this.setState({
            news: res.data,
            id: v,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getNews();
    this.getSchool();
    window.addEventListener("load", () => {
      this.setState({
        loader: false,
      });
    });
    setInterval(() => {
      this.setState({ clock: Clock() });
    }, 1000);
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>
            {/* <NavBar/> */}
            <ContainerDashboard>
              <div
                className="yuqori"
                style={{ backgroundColor: "transparent", width: "100vw" }}
              >
                <div className="gerbHead" style={{ width: "100%" }}>
                  <Image src={gerb} alt="" />
                  <p>
                    Surxondaryo viloyati Samarqand tumani 25 -
                    iqtisoslashtirilgan davlat umumta'lim maktabi
                  </p>
                </div>
                <div id="vaqt">{this.state.clock}</div>
              </div>
            </ContainerDashboard>

            <div style={{ width: "100vw" }}>
              <Navbar collapseOnSelect expand="lg" className={style.Navbar}>
                <Container fluid>
                  <Navbar.Toggle
                    style={{ backgroundColor: "darkblue", outline: "none" }}
                  >
                    <i
                      class="fa fa-bars"
                      aria-hidden="true"
                      style={{ fontSize: "1.6rem", color: "white" }}
                    ></i>
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="responsive-navbar-nav"
                    style={{ width: "60%", color: "white" }}
                  >
                    <Nav className={style.meauto}>
                      <NavLink to={`/`}>
                        <span className={style.navLink}>Bosh sahifa</span>
                      </NavLink>
                      <NavLink to={`/hayot/`}>
                        <span className={style.navLink}>Maktab hayoti</span>
                      </NavLink>
                      <NavLink to={`/qabul/`}>
                        <span className={style.navLink}>Qabul</span>
                      </NavLink>
                      <NavLink to={`/yangiliklar/`}>
                        <span className={style.navLink}>Yangiliklar</span>
                      </NavLink>
                      <NavLink to={`/rahbariyat/`}>
                        <span className={style.navLink}>
                          Maktab ma'muriyati
                        </span>
                      </NavLink>
                      <NavLink to={`/alochilar/`}>
                        <span className={style.navLink}>Maktab alochilari</span>
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>

            <div className="gth">
              <div className="carg" style={{ zIndex: "-345" }}>
                <div className="carg_item">
                  <Image src={bg3t} />
                </div>{" "}
              </div>
              <div className="yozuvT row">
                <div className="col-6">
                  <h4>XUSH KELIBSIZ</h4>
                  <h1>MAKTABIMIZGA</h1>
                  <br />
                  <div className="yozuvBtn">
                    <Link to="/hayot/">
                      <Button>Maktab hayoti</Button>
                    </Link>
                  </div>
                </div>
                <div className="col-6"></div>
              </div>
            </div>
            <div className={style.container}>
              <div className={style.bir}>
                <div className={style.containercha}>
                  <Image
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c2 !== null
                          ? this.state.school.b_c2
                          : rasm2
                        : rasm2
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <Link style={{ color: "white" }} to={`/yangiliklar/`}>
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        className={style.icon}
                      />
                      <h3>Yangiliklar</h3>
                      <p>
                        Maktabimizga doir bo'lgan yangiliklardan xabardor
                        bo'ling
                      </p>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={style.ikki}>
                <div className={style.containercha}>
                  <Image
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c1 !== null
                          ? this.state.school.b_c1
                          : rasm1
                        : rasm1
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <FontAwesomeIcon icon={faSchool} className={style.icon} />
                    <h3>Yutuqlarimiz</h3>
                    <p>
                      Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish
                      uchun qulay imkoniyat bor
                    </p>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div className={style.uch}>
                <div className={style.containercha}>
                  <Image
                    src={
                      this.state.school !== null
                        ? this.state.school.b_c3 !== null
                          ? this.state.school.b_c3
                          : rasm3
                        : rasm3
                    }
                    className={style.image}
                  />
                  <div className={style.overlay}>
                    <Link style={{ color: "white" }} to={`/gallery/`}>
                      <FontAwesomeIcon
                        icon={faDoorOpen}
                        className={style.icon}
                      />
                      <h3>Fotolavhalar</h3>
                      <p>
                        Endi siz maktabimizning fotolavhalarini ko'rishingiz
                        mumkin
                      </p>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className={style.containerRow}>
              <Row className={style.videos}>
                <Col xs={12} sm={12} md={10} lg={10} className={style.col}>
                  <h3>Maktabga video sayohat</h3>
                  {/* <Image src={rasm1} className={style.img}/> */}
                  <YouTube
                    videoId={
                      this.state.school !== null
                        ? this.state.school.video !== null
                          ? this.state.school.video.slice(
                              this.state.school.video.indexOf("youtu.be/") + 9
                            )
                          : ""
                        : ""
                    }
                    opts={{
                      width: "100%",
                      height: "500px",
                      playerVars: {
                        // https://developers.google.com/youtube/player_parameters
                        autoplay: 0,
                      },
                    }}
                    className={style.video}
                  />
                  <p className={style.pp}>
                    Maktabimizga virtual sayohat qiling va siz bizning
                    maktabimiz haqida ko'proq ma'lumotga ega bo'ling.
                  </p>
                </Col>

                <Col xs={12} sm={12} md={8} lg={12} className={style.col}>
                  <h3>Maktabdagi yangiliklari va o'zgarishlar</h3>

                  <Row>
                    <Col xs={12} sm={12} md={12} lg={12}>
                      <Row>
                        {this.state.news.map((item, key) => {
                          return key < 6 ? (
                            <Col lg={6}>
                              <Row>
                                <Col
                                  xs={3}
                                  sm={3}
                                  md={3}
                                  lg={3}
                                  className={style.colNews}
                                >
                                  <Image
                                    src={item.image}
                                    className={style.rasm}
                                  />
                                </Col>
                                <Col
                                  xs={9}
                                  sm={9}
                                  md={9}
                                  lg={9}
                                  className={style.colNews}
                                  style={{
                                    paddingLeft: "10px",
                                    paddingRight: "8px",
                                  }}
                                >
                                  <p>{item.title}</p>
                                  <h5>
                                    <i
                                      style={{ marginRight: "10px" }}
                                      className="far fa-calendar-alt"
                                    ></i>
                                    {item.published_time.substring(0, 10)}
                                  </h5>
                                </Col>
                              </Row>
                            </Col>
                          ) : (
                            ""
                          );
                        })}
                      </Row>
                    </Col>
                    <div className={style.tugmacha}>
                      <Link to={`/yangiliklar/`}>
                        <button className={style.buttoncha}>
                          <span>Barchasini o'qish</span>
                        </button>
                      </Link>
                    </div>
                  </Row>
                </Col>
              </Row>
            </div>
            <BoshSahifaDavomi />
            <MaktabTadbirlari />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
