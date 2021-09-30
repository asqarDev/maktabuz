import React, { Component } from "react";
import styles from "../css/maktabmamuriyati.module.css";
//import { Carousel as Car } from "antd";
import { Container, Row, Col, Image } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
//import { FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import { url } from "../host/Host";
import Global from "../host/Global";
import { FadeLoader } from "react-spinners";

export default class Maktabmamuriyati extends Component {
  state = {
    direktor: null,
    orin1: null,
    orin2: null,
    orin3: null,
    kutubxona: null,
    psixolog: null,
    kasaba: null,
    yetakchi: null,
    chqbt: null,
    loader: true,
  };
  getStaff = () => {
    axios
      .get(`${url}/staff-by-school/${Global.schoolId}/`)
      .then((res) => {
        var direktor = [];
        var orin1 = [];
        var orin2 = [];
        var orin3 = [];
        var kutubxona = [];
        var psixolog = [];
        var kasaba = [];
        var yetakchi = [];
        var chqbt = [];
        res.data.map((item) => {
          if(item.speciality.length!==0){
            item.speciality.map(item1=>{
              if(item1===3){
                direktor.push(item)
              }
              if(item1===4){
                orin1.push(item)
              }
              if(item1===5){
                orin2.push(item)
              }
              if(item1===9){
                orin3.push(item)
              }
              if(item1===6){
                
                psixolog.push(item)
              }
              if(item1===7){
                yetakchi.push(item)
              }
              if(item1===8){
              
                kutubxona.push(item)
              }
              if(item1===9){
              
                kasaba.push(item)
              }
              if(item1===10){
                chqbt.push(item)
              }
    
            })
          }
    
        });
        this.setState({
          direktor: direktor,
          orin1: orin1,
          orin2: orin2,
          orin3: orin3,
          kutubxona: kutubxona,
          psixolog: psixolog,
          kasaba: kasaba,
          yetakchi: yetakchi,
          chqbt: chqbt,
        });
        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 4000);
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
    this.getStaff();
  }

  render() {
    return (
      <div>
        {this.state.loader === true ? (
          <div className="loaderT">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
        ) : (
          <>
            <div className={styles.mamuryat_header}>
              <Image
                className="d-block w-100"
                src={
                  this.state.direktor.image !== null &&
                  this.state.direktor !== null
                    ? this.state.direktor.image
                    : `"https://cdn.wallpapersafari.com/46/99/Vh6QFJ.jpg"
                    `
                }
                alt="First slide"
              />
              <div>
                <p>Maktab direktori</p>
              </div>
            </div>

            <Container fluid>
              <Row>
                {this.state.direktor !== null
                  ? this.state.direktor.map((item) => {
                      return (
                        <Col lg={12}>
                          <div className={styles.carddirektor}>
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image
                                  src={
                                    item.image !== null && item !== null
                                      ? item.image
                                      : "https://cdn.wallpapersafari.com/46/99/Vh6QFJ.jpg"
                                  }
                                />
                                <p>Maktab direktori</p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin1 !== null
                  ? this.state.orin1.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>
                                  O'quv va tarbiyaviy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin2 !== null
                  ? this.state.orin2.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>
                                  Ma'naviy-ma'rifiy ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.orin3 !== null
                  ? this.state.orin3.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>
                                  Ma'muriy-xo’jalik ishlar bo'yicha direktor
                                  o'rinbosari
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.psixolog !== null
                  ? this.state.psixolog.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>Maktab amaliyotchi psixologi</p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.kasaba !== null
                  ? this.state.kasaba.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>Kasaba uyushma raisi</p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.kutubxona !== null
                  ? this.state.kutubxona.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>Kutubxona mudirasi</p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.chqbt !== null
                  ? this.state.chqbt.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>
                                  Chaqiruvga qadar boshlang‘ich tayyorgarlik
                                  rahbari
                                </p>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}

                {this.state.yetakchi !== null
                  ? this.state.yetakchi.map((item) => {
                      return (
                        <Col lg={12}>
                          <div
                            className={styles.carddirektor}
                            data-aos="zoom-in-up"
                          >
                            <Row>
                              <Col lg={4} className={styles.mamuryat_person}>
                                <Image src={item.image} />
                                <p>Boshlang'ich tashkilot yoshlar yetakchisi</p>
                              </Col>
                              <Col className={styles.cardwrap} lg={8}>
                                <Row className={styles.cardwrap_item}>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      F.I.O:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.full_name}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Mutaxasisligi:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.position}
                                    </span>
                                  </Col>

                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Telefon raqami:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.phone}
                                    </span>
                                  </Col>
                                  <Col lg={12}>
                                    <span className={styles.direktorbr}>
                                      Qo'shimcha:
                                    </span>
                                    <span className={styles.direktor}>
                                      {item.description}
                                    </span>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })
                  : ""}
              </Row>
            </Container>
          </>
        )}{" "}
      </div>
    );
  }
}
