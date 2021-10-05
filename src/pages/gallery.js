import React, { Component } from "react";
import style from "../css/gallery.module.css";
// import img1 from "../img/b1.JPG";
import img2 from "../img/b2.jpg";
import img3 from "../img/b3.jpg";
import img4 from "../img/b4.jpg";
import img5 from "../img/b5.jpg";
import img6 from "../img/b6.jpg";
import FadeLoader from "react-spinners/FadeLoader";
import { url, user } from "../host/Host";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
export default class Gallery extends Component {
  state = {
    school: [],
    loader: true,
  };
  getSchool = () => {
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSchool();
  }
  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <div className="loader_center">
              <div className="loader_item">
                <FadeLoader
                  color="blue"
                  loading={this.state.loader}
                  size={120}
                />
              </div>
              <h5 style={{ color: "blue" }}>Sayt test rejimida ishlamoqda</h5>
            </div>
          </div>
        ) : (
          <div className={style.mat}>
            <div
              className={style.header}
              // style={{
              //   backgroundImage: `url("./../img/buxoro_rasm.jpg")`,
              // }}
            >
              <div className={style.sarlavha}>
                <h2>Maktabimiz hayotidan fotolavhalar</h2>
              </div>
            </div>

            <Container>
              <Row style={{ justifyContent: "center", marginTop: "10vh" }}>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto1 !== null
                              ? this.state.school.foto1
                              : img2
                            : img2
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto2 !== null
                              ? this.state.school.foto2
                              : img3
                            : img3
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto3 !== null
                              ? this.state.school.foto3
                              : img4
                            : img4
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto4 !== null
                              ? this.state.school.foto4
                              : img5
                            : img5
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto5 !== null
                              ? this.state.school.foto5
                              : img6
                            : img6
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto6 !== null
                              ? this.state.school.foto6
                              : img2
                            : img2
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
                <Col lg={4} md={6} cm={12} className={style.row_col_item}>
                  <div class={style.imagewrapper}>
                    <div
                      style={{
                        backgroundImage: `url('${
                          this.state.school !== null
                            ? this.state.school.foto7 !== null
                              ? this.state.school.foto7
                              : img2
                            : img2
                        }')`,
                      }}
                    />
                  </div>{" "}
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}
