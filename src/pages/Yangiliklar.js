import React, { Component } from "react";
import new1 from "../img/new1.jpg";
import new2 from "../img/new2.jpg";
import new3 from "../img/new3.jpg";
import new4 from "../img/new4.jpg";
import styles from "../css/yangiliklar.module.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { getNews } from "../host/Config";
import FadeLoader from "react-spinners/FadeLoader";
import { Carousel } from "antd";
import axios from "axios";
import { url, user } from "../host/Host";
export default class Yangiliklar extends Component {
  state = {
    news: [],
    id: 0,
    loader: true,
    data: [],
  };

  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            news: res.data,
            loader: false,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
            loader: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loader: false,
        });
      });
  };

  getExcellents = () => {
    var v = user;

    axios
      .get(`${url}/school-by-admin/${v}/`)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getNews();
    this.getExcellents();
  }

  render() {
    const { news, data } = this.state;
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
          <>
            <div className={styles.yangiliklar_header}>
              <div className={styles.rgbas}>
                <div className={styles.headerSliderText}>
                  <h3>Maktabimiz so'ngi yangiliklari bilan tanishing</h3>
                </div>
              </div>
              <Carousel autoplay className={styles.sliderContainer}>
                <div className={styles.sliderIMG}>
                  <Image
                    src={
                      data !== null && data.m_h_h1 !== null ? data.m_h_h1 : new1
                    }
                  />
                </div>
                <div className={styles.sliderIMG}>
                  <Image
                    src={
                      data !== null && data.m_h_h2 !== null ? data.m_h_h2 : new2
                    }
                  />
                </div>
                <div className={styles.sliderIMG}>
                  <Image
                    src={
                      data !== null && data.m_h_h3 !== null ? data.m_h_h3 : new3
                    }
                  />
                </div>
                <div className={styles.sliderIMG}>
                  <Image
                    src={
                      data !== null && data.m_h_h4 !== null ? data.m_h_h4 : new4
                    }
                  />
                </div>
              </Carousel>
            </div>
            <Container fluid>
              <div className={styles.yangi}>
                <div className={styles.yandiliklar_h1} data-aos="fade-up">
                  <h1 data-aos="fade-up">Yangiliklar</h1>
                </div>
              </div>

              <div>
                {this.state.news.length !== 0 ? (
                  <div className={styles.news} data-aos="zoom-in-right">
                    <div className={styles.news2}>
                      <div
                        className={styles.news_image}
                        style={{
                          backgroundImage: `url(${
                            this.state.news[this.state.id].image
                          })`,
                        }}
                      ></div>
                      <h3>{this.state.news[this.state.id].title}</h3>

                      <p className={styles.date}>
                        <i
                          style={{ marginRight: "10px" }}
                          class="far fa-calendar-alt"
                        ></i>
                        {this.state.news[
                          this.state.id
                        ].published_time.substring(0, 10)}
                      </p>
                      <p className={styles.col_data}>
                        {this.state.news[this.state.id].text}
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div data-aos="zoom-in-left">
                {news.m_h_sport !== null && news !== null ? (
                  <div className={styles.news_image}>
                    <div
                      className={styles.news2_image}
                      style={{
                        backgroundImage: `url("${news.m_h_sport}")`,
                      }}
                    ></div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className={styles.recent_news} data-aos="zoom-in-left">
                  <div className={styles.title}>
                    <h3>So'ngi yangiliklar</h3>
                  </div>
                  <div className={styles.body}>
                    <Row>
                      {this.state.news.map((item) => {
                        return (
                          <Col
                            key={item.id}
                            lg={4}
                            md={6}
                            sm={12}
                            className={styles.body_card}
                          >
                            <Card className={styles.card_item}>
                              <Card.Img variant="top" src={item.image} />
                              <Card.Body>
                                <Card.Title>
                                  <small>
                                    <p className={styles.date}>
                                      <i
                                        style={{ marginRight: "10px" }}
                                        class="far fa-calendar-alt"
                                      ></i>
                                      {item.published_time.substring(0, 10)}{" "}
                                    </p>
                                  </small>
                                </Card.Title>
                                <Card.Text>{item.title}</Card.Text>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      })}
                    </Row>
                  </div>
                </div>
              </div>
            </Container>
          </>
        )}
      </div>
    );
  }
}
