import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import style from "./Footer.module.css";
import axios from "axios";
import { url, user } from "../host/Host";
import { NavLink } from "react-router-dom";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";
export default class Footer extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({ data: res.data });
    });
  }
  render() {
    return (
      <>
        <div className={style.container}>
          <Row>
            <Col xs={12} sm={12} md={6} lg={4} className={style.logoUchun}>
              <h2>Maktab ma'lumoti</h2>
              <p>{this.state.data !== null ? this.state.data.address : ""}</p>
              <p style={{ marginBottom: "0" }}>
                <a
                  className={style.navLink}
                  href={`mailto: ${
                    this.state.data !== null ? this.state.data.email : "#"
                  }`}
                >
                  {this.state.data !== null ? this.state.data.email : "#"}
                </a>
              </p>
              <br />
              <p>
                <a
                  className={style.navLink}
                  href={`tel: +998977902801`}
                  // href={`tel: ${
                  //   this.state.data !== null ? this.state.data.phone : "#"
                  // }`}
                >
                  +99897 790 28 01
                  {/* {this.state.data !== null ? this.state.data.phone : ""} */}
                </a>
              </p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
              <h2>Bizning maktab</h2>
              <ul>
                <li>
                  <NavLink className={style.navLink} to={`/`}>
                    <p>Bosh sahifa</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/hayot/`}>
                    <p>Maktab hayoti</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/qabul/`}>
                    <p>Qabul</p>
                  </NavLink>
                </li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6} lg={4} className={style.ulLi}>
              <h2>Maktab hayoti</h2>
              <ul>
                <li>
                  <NavLink className={style.navLink} to={`/yangiliklar/`}>
                    <p>Yangiliklar</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/rahbariyat/`}>
                    <p>Maktab ma'muriyati</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink className={style.navLink} to={`/alochilar/`}>
                    <p>Maktab a'lochilari</p>
                  </NavLink>
                </li>
              </ul>
              <div className="row">
                <Col
                  className={style.boglanish}
                  lg={10}
                  md={10}
                  sm={12}
                  xl={10}
                >
                  {/* https://bit.ly/3ojl7QJ  -facebook
https://bit.ly/3B2suzE -instagram
https://bit.ly/39QGOPL -youtube
https://bit.ly/39Qt87k -telegram */}

                  <p>
                    <a
                      href={"https://bit.ly/39Qt87k"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegram className={style.relations} />
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/3B2suzE"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiInstagram className={style.relations} />
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/3ojl7QJ"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook className={style.relations} />
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/39QGOPL"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillYoutube className={style.relations} />
                    </a>
                  </p>
                </Col>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </div>
      </>
    );
  }
}
