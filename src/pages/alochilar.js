import React, { Component } from "react";
import style from "../css/alochilar.module.css";
import { Carousel } from "antd";
import { Image, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school3 from "../img/school3.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import Aos from "aos";
import { getPupil } from "../host/Config";
import { url, user } from "../host/Host";
import { FadeLoader } from "react-spinners";
import Global from "../host/Global";

export default class Alochilar extends Component {
  state = {
    loader: true,
    excellent: [],
    pupil: [],
    pupils: [],
    data: null,
    id: 0,
    school: null,
    class: [],
  };

  getExcellents = () => {
    var v = user;
    axios
      .get(`${url}/excellent/`)
      .then((res) => {
        this.setState({
          excellent: res.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loader: false,
        });
      });
    axios.get(`${url}/school-by-admin/${v}/`).then((res) => {
      this.setState({ data: res.data });
    });
    axios
      .get(`${url}/class-by-school/${Global.schoolId}/`)
      .then((res) => {
        this.setState({
          class: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
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

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getExcellents();
    this.getPupil();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            <div className={style.headerSliderText}>
              <h3>Maktab A'lochilari</h3>
              <div className={style.headerIcons}>
                <a href="#first" className={style.headerIcon}>
                  {">"}
                </a>
              </div>
            </div>
            <Carousel autoplay className={style.sliderHeader}>
              <Image
                src={
                  data !== null && data.m_h_h1 !== null ? data.m_h_h1 : school1
                }
                className={style.headerImage}
              />
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h2 !== null
                      ? data.m_h_h2
                      : school1
                  }
                  className={style.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h3 !== null
                      ? data.m_h_h3
                      : school3
                  }
                  className={style.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h4 !== null
                      ? data.m_h_h4
                      : school4
                  }
                  className={style.headerImage}
                />
              </div>
              <div>
                <Image
                  src={
                    data !== null && data.m_h_h5 !== null
                      ? data.m_h_h5
                      : school5
                  }
                  className={style.headerImage}
                />
              </div>
            </Carousel>

            <div id="first">
              <h1 className={style.sarlavha}>A'lochilar doskasi</h1>
              <div className={style.line}></div>
              <Row className={style.tana}>
                {this.state.excellent !== []
                  ? this.state.excellent.map((item) => {
                      var pupil = this.setPupils(item.pupil);
                      return (
                        <Col
                          key={item.id}
                          sm={12}
                          md={6}
                          lg={this.state.excellent.length > 3 ? 3 : 6}
                          className={style.row_col}
                        >
                          <div className={style.card1}>
                            <div className={style.card2}>
                              <div className={style.card3}>
                                <Card
                                  style={{ width: "18rem" }}
                                  className={style.card_item}
                                >
                                  <Card.Img
                                    variant="top"
                                    src={
                                      pupil.image !== null
                                        ? pupil.image
                                        : school2
                                    }
                                  />
                                  <Card.Body>
                                    <Card.Title>Bizning faxrimiz</Card.Title>
                                    <Card.Text>
                                      <p>
                                        <b>O'quvchi: </b> {pupil.full_name}
                                      </p>
                                      <p>
                                        <b>Tug'ulgan sanasi: </b>{" "}
                                        {pupil.birth_day}
                                      </p>
                                      <p>
                                        <b>Sinfi: </b>
                                        {
                                          this.echoClasses(pupil.clas)
                                            .class_number
                                        }{" "}
                                        - "
                                        {
                                          this.echoClasses(pupil.clas)
                                            .class_char
                                        }
                                        " sinf
                                      </p>
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                              </div>
                            </div>
                          </div>{" "}
                        </Col>
                      );
                    })
                  : ""}
              </Row>
            </div>
          </>
        )}
      </div>
    );
  }
}
