import {
  faDoorOpen,
  faNewspaper,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import React, { Component } from "react";
import style from "./BoshSahifa.module.css";
import { Button, Container, Navbar, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import gerb from "../img/pngegg.png";
import "../App.css";
import { Link } from "react-router-dom";
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
import Typed from "react-typed";
import "aos";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default class BoshSahifa extends Component {
  state = {
    loader: false,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
    bool: false,
    top: false,
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
      });
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
  handleClick() {
    this.setState({ bool: !this.state.bool });
  }
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

    window.addEventListener("scroll", this.scrollfunction);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollfunction);
  }
  scrollfunction = () => {
    if (window.scrollY > 83) {
      this.setState({ top: true });
    } else {
      this.setState({ top: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <div>
            <div className={style.bosh_logo_item}>
              <div className={style.bosh_image}>
                <div className={style.bosh_image_item}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={gerb}
                    alt=""
                  />
                </div>
                <p className={style.bosh_p1}>
                  Surxondaryo viloyati Bandixon tumani 5 - davlat
                  iqtisoslashtirilgan umumta'lim maktabi
                </p>
                <p className={style.bosh_p2}>5 - DIUM</p>
              </div>
              <div className={style.bosh_clock}>{this.state.clock}</div>
            </div>

            <Navbar
              expand="lg"
              className={`${style.navbar_menu} ${
                this.state.top ? style.active : ""
              }`}
            >
              <Container className={style.navbar_container}>
                <div
                  className={style.navar_logo}
                  style={{ justifyContent: "space-between" }}
                >
                  <Link to={`/`}>
                    {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                  </Link>
                  <Button
                    value="primay"
                    className={style.navbar_button}
                    onClick={this.handleClick.bind(this)}
                  >
                    <AiOutlineMenu />
                  </Button>
                </div>
                <div className={`${style.navbar_items}`}>
                  <Link to={`/`}>
                    <span>Bosh sahifa</span>
                  </Link>
                  <Link to={`/qabul/`}>
                    <span>Qabul</span>
                  </Link>
                  <Link to={`/yangiliklar/`}>
                    <span>Yangiliklar</span>
                  </Link>
                  <Link to={`/hayot/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab hayoti
                    </span>
                  </Link>
                  <Link to={`/alochilar/`}>
                    <span>Maktab a'lochilari</span>
                  </Link>
                  <Link to={`/rahbariyat/`}>
                    <span>Maktab ma'muriyati</span>
                  </Link>
                </div>
              </Container>
            </Navbar>
            {this.state.bool ? (
              <div className={style.navbar_md}>
                <Container>
                  <div className={style.navar_logo_md}>
                    <Link to={`/`}>
                      {this.state.school !== null
                        ? this.state.school.school_number + " - maktab"
                        : "Maktab raqami"}
                    </Link>
                    <Button
                      value="primay"
                      className={style.navbar_button}
                      onClick={this.handleClick.bind(this)}
                    >
                      <AiOutlineClose />
                    </Button>
                  </div>
                </Container>
                <div className={style.navbar_items_md}>
                  <Link to={`/`}>
                    <span>Bosh sahifa</span>
                  </Link>

                  <Link to={`/qabul/`}>
                    <span onClick={this.handleClick.bind(this)}>Qabul</span>
                  </Link>

                  <Link to={`/yangiliklar/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Yangiliklar
                    </span>
                  </Link>
                  <Link to={`/hayot/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab hayoti
                    </span>
                  </Link>
                  <Link to={`/alochilar/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab a'lochilari
                    </span>
                  </Link>
                  <Link to={`/rahbariyat/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab ma'muriyati
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className={style.header_types}
              style={{
                backgroundImage: `url(${
                  this.state.school !== null && this.state.school.b_r1 !== null
                    ? this.state.school.b_r1
                    : "https://media.istockphoto.com/photos/workspace-desk-top-view-no-people-copy-space-picture-id1161855233?k=20&m=1161855233&s=612x612&w=0&h=tK8VfzjtBSBaoOrUl4QhQ71xwGkBsMBQIAOf3CB8qjA="
                })`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className={`${style.header_type}`}>
                <div className={style.header_center}>
                  <Typed
                    className={`typed-title text-center ${style.typed_item}`}
                    strings={["BIZNING MAKTABIMIZGA XUSH KELIBSIZ"]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop
                  />
                  <div className={style.yozuvBtn}>
                    <Link to="/ha yot/">
                      <Button>Maktab hayoti</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.card_items}>
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c2 !== null
                        ? this.state.school.b_c2
                        : rasm2
                      : rasm2
                  }
                />
                <Card.Body className={style.card_for_body}>
                  <Card.Title className={style.card_title}>
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className={style.card_icon}
                    />
                    <h3>Yangiliklar</h3>
                  </Card.Title>
                  <Card.Text>
                    <Link to={`/yangiliklar/`}>
                      Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c1 !== null
                        ? this.state.school.b_c1
                        : rasm1
                      : rasm1
                  }
                />
                <Card.Body className={style.card_for_body}>
                  <Card.Title className={style.card_title}>
                    <FontAwesomeIcon
                      icon={faSchool}
                      className={style.card_icon}
                    />
                    <h3>Yutuqlarimiz</h3>
                  </Card.Title>
                  <Card.Text>
                    Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish
                    uchun qulay imkoniyat bor
                  </Card.Text>
                </Card.Body>
              </Card>{" "}
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c3 !== null
                        ? this.state.school.b_c3
                        : rasm3
                      : rasm3
                  }
                />
                <Card.Body className={style.card_for_body}>
                  <Card.Title className={style.card_title}>
                    <FontAwesomeIcon
                      icon={faDoorOpen}
                      className={style.card_icon}
                    />
                    <h3>Fotolavhalar</h3>
                  </Card.Title>
                  <Card.Text>
                    <Link to={`/gallery/`}>
                      Endi siz maktabimizning fotolavhalarini ko'rishingiz
                      mumkin
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className={style.containerRow}>
              <div>
                <h3 className={style.main_header}>Maktabga video sayohat</h3>
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
                      autoplay: 0,
                    },
                  }}
                />
                <p className={style.pp}>
                  Maktabimizga virtual sayohat qiling va siz bizning maktabimiz
                  haqida ko'proq ma'lumotga ega bo'ling.
                </p>
              </div>
              <div>
                <h3 className={style.main_header}>
                  Maktabdagi yangiliklari va o'zgarishlar
                </h3>

                <Row>
                  {this.state.news.map((item) => {
                    return (
                      <Col key={item.id} sm={12} md={6} lg={4}>
                        <Card
                          style={{ width: "18rem" }}
                          className={style.card_item}
                        >
                          <Card.Img variant="top" src={item.image} />
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                              <h5>
                                <i
                                  style={{ marginRight: "10px" }}
                                  className="far fa-calendar-alt"
                                ></i>
                                {item.published_time.substring(0, 10)}
                              </h5>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                  <div className={style.tugmacha}>
                    <Link to={`/yangiliklar/`}>
                      <Button>Barchasini o'qish {">>"}</Button>
                    </Link>
                  </div>
                </Row>
              </div>
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
