import React, { Component } from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import style from "./BoshSahifaDavomi.module.css";
import { ButtonWrapper } from "./StyleBoshSahifa";
import school2 from "../img/school2.jpg";
import axios from "axios";
import Aos from "aos";
import { getPupil } from "../host/Config";
import { idMaktab, url, user } from "../host/Host";
import ustoz1 from "./../img/ustoz1.jpg";
import ustoz2 from "./../img/ustoz2.jpg";

export default class BoshSahifaDavomi extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
    orin3: [],
  };

  getExcellents = () => {
    var v = user;
    let informations = [];
    axios.get(`${url}/excellent`).then((res) => {
      res.data.map((item) => {
        return item.school === parseInt(idMaktab)
          ? informations.push(item)
          : "";
      });
      this.setState({ excellent: informations, loader: false });
    });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });

      console.log(res.data);
    });
    axios
      .get(`${url}/class/`)
      .then((res) => {
        this.setState({
          class: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loader: false });
      });
  };

  getPupil = () => {
    getPupil()
      .then((res) => {
        this.setState({
          pupils: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  setPupils = (id) => {
    var pupil = {};
    if (this.state.pupils !== []) {
      this.state.pupils.map((item1) =>
        item1.id === id ? (pupil = item1) : ""
      );
    }
    return pupil;
  };

  echoClasses = (id) => {
    var classes = {};
    if (this.state.class !== []) {
      this.state.class.map((item1) =>
        item1.id === id ? (classes = item1) : ""
      );
    }
    return classes;
  };
  getStaff = () => {
    axios
      .get(`${url}/staff-by-school/${idMaktab}/`)
      .then((res) => {
        var orin3 = [];
        res.data.map((item) =>
          item.speciality.length !== 0
            ? item.speciality.map((item1) =>
                item1 === 7 ? orin3.push(item) : ""
              )
            : ""
        );
        this.setState({
          orin3: orin3,
        });
        this.setState({
          loader: false,
        });
      })
      .catch((err) => {
        this.setState({
          loader: false,
        });
      });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getExcellents();
    this.getPupil();
    this.getStaff();
    this.setState({ loader: false });
  }

  render() {
    return (
      <div>
        <div className={style.container}>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className={style.boshsahifa_info}>
                  <h1>Qabul uchun ariza topshiring</h1>
                  <h3>Kuzgi qabul jarayoni hozir mavjud</h3>
                  <p>
                    Biz o'quvchilarimizga shunchaki ta'lim beribgina qolmasdan,
                    shu bilan birga ularga kelajakda o'z o'rnilarini
                    topishlariga yordam beramiz.
                  </p>
                </div>
                <ButtonWrapper>
                  <button className="btn drawBorder">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      href="https://my.maktab.uz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hoziroq ariza topshiring
                    </a>
                  </button>
                </ButtonWrapper>
              </Col>
              <Col md={6} lg={6} className={style.row_image}>
                <div className={style.boshsahifa_image}>
                  <Image
                    style={{ width: "100%" }}
                    src="data:image/jpeg;base64,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"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className={style.tana}>
                <h3 className={style.main_header}>A'lochilar doskasi</h3>
                <Container className={style.back}>
                  <Row>
                    {this.state.excellent !== [] && this.state.class !== []
                      ? this.state.excellent.map((item) => {
                          // var pupil = this.setPupils(item.pupil);

                          return (
                            <Col
                              lg={this.state.excellent.length >= 3 ? 4 : 6}
                              md={6}
                              sm={12}
                              data-aos="zoom-in-up"
                              className={style.card_items}
                            >
                              <Card
                                style={{ width: "18rem" }}
                                className={style.card_item}
                              >
                                <Card.Img
                                  variant="top"
                                  src={
                                    item.image !== null ? item.image : school2
                                  }
                                />
                                <Card.Body className={style.card_for_body}>
                                  <Card.Title className={style.card_title}>
                                    <h4>{item.full_name}</h4>
                                  </Card.Title>
                                  <Card.Text>
                                    {item.clas}
                                    {/* {this.echoClasses(pupil.clas).class_number}{" "}
                                    - "{this.echoClasses(pupil.clas).class_char}
                                    " sinf */}
                                  </Card.Text>
                                </Card.Body>
                              </Card>
                            </Col>
                          );
                        })
                      : ""}
                  </Row>
                </Container>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12}>
              <div className={style.tana}>
                <h3 className={style.main_header}>O'qituvchilar doskasi</h3>
                <Container>
                  <Row>
                    <Col lg={6} md={12} sm={12} data-aos="zoom-in">
                      <did className={style.flipBox}>
                        <div className={style.flipBoxInner}>
                          <div className={style.flipBoxFront}>
                            <img src={ustoz1} alt="" />
                          </div>
                          <div className={style.flipBoxBack}>
                            <div>
                              <h3>Tosheva Gavhar Umarovna</h3>
                              <p>Matematika fani o'qituvchisi</p>
                            </div>
                          </div>
                        </div>
                      </did>
                    </Col>

                    <Col lg={6} md={12} sm={12} data-aos="zoom-in">
                      <did className={style.flipBox}>
                        <div className={style.flipBoxInner}>
                          <div className={style.flipBoxFront}>
                            <img src={ustoz2} alt="" />
                          </div>
                          <div className={style.flipBoxBack}>
                            <div>
                              <h3>Ravshanova Mamlakat Sulaymonovna</h3>
                              <p>Rus tili filologiya o'qituvchi</p>
                            </div>
                          </div>
                        </div>
                      </did>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
