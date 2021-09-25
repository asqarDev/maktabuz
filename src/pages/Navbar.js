import React, { Component } from "react";
import "aos";
import style from "./Navbar.module.css";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { url, user } from "../host/Host";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
export default class NavBar extends Component {
  state = {
    school: null,
    id: null,
    bool: true,
  };
  getSchool = () => {
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
          id: v,
        });
      })
      .catch((err) => {
        window.location.href = window.location.href + "/error";
      });
  };
  handleClick() {
    this.setState({ bool: !this.state.bool });
  }

  componentDidMount() {
    this.getSchool();
  }
  render() {
    return (
      <>
        <Navbar expand="lg" className={style.navbar_menu}>
          <Container className={style.navbar_container}>
            <div className={style.navar_logo}>
              <Link to={`/`}>
                {this.state.school !== null
                  ? this.state.school.school_number + " - maktab"
                  : "Maktab raqami"}
              </Link>
            </div>

            <Button
              value="primay"
              className={style.navbar_button}
              onClick={this.handleClick.bind(this)}
            >
              <AiOutlineMenu />
            </Button>
            <div className={style.navbar_items}>
              <Link to={`/`}>
                <span>Bosh sahifa</span>
              </Link>
              <Link to={`/hayot/`}>
                <span>Maktab hayoti</span>
              </Link>
              <Link to={`/yangiliklar/`}>
                <span>Yangiliklar</span>
              </Link>
              <Link to={`/alochilar/`}>
                <span>Maktab a'lochilari</span>
              </Link>
              <Link to={`/rahbariyat/`}>
                <span>Maktab ma'muriyati</span>
              </Link>
              <Link to={`/qabul/`}>
                <span>Qabul</span>
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
              <Link to={`/hayot/`}>
                <span>Maktab hayoti</span>
              </Link>
              <Link to={`/yangiliklar/`}>
                <span>Yangiliklar</span>
              </Link>
              <Link to={`/alochilar/`}>
                <span>Maktab a'lochilari</span>
              </Link>
              <Link to={`/rahbariyat/`}>
                <span>Maktab ma'muriyati</span>
              </Link>
              <Link to={`/qabul/`}>
                <span>Qabul</span>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}
