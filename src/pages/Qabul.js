import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "../css/qabul.module.css";
import tav_img from "../img/tav_img.jpg";
import talab from "../img/talab.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Carousel } from "antd";
import axios from "axios";
import { url, user } from "../host/Host";
import FadeLoader from "react-spinners/FadeLoader";

class Qabul extends React.Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
  };

  getSchool = () => {
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      this.setState({
        school: res.data,
        loader: false,
      });
      console.log(res.data);
    });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }
  render() {
    return (
      <div className={styles.body_makatab}>
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
          <div className={styles.dark_maktab}>
            <div className={styles.qabulHeader}>
              <Container fluid style={{ padding: "0" }}>
                <div className={styles.qabul_header}>
                  <Row className={styles.header_qabul}>
                    <Col lg={4} md={12} sm={12}></Col>
                    <Col lg={8} md={12} sm={12}>
                      {" "}
                      <div data-aos="fade-right" className={styles.text_q}>
                        <h1>Qabul uchun ariza topshirishga xush kelibsiz!!!</h1>
                        <div className={styles.header_image_item}>
                          <Image
                            src="https://as2.ftcdn.net/jpg/01/17/65/19/500_F_117651987_mJuEArLJWmdeGSmSqbntiI5i04RBvhXX.jpg"
                            className={styles.header_image}
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
            </div>

            <div className={styles.tavsilotlar}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <div className={styles.qabul_image} data-aos="zoom-in-down">
                      <Image
                        src={
                          this.state.school !== null
                            ? this.state.school.q !== null
                              ? this.state.school.q
                              : tav_img
                            : tav_img
                        }
                      />
                    </div>
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={8}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                  >
                    <h3>Qabul jarayoni bo'yicha tafsilotlar</h3>

                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_t !== null
                          ? this.state.school.q_t
                          : "Qabul jarayonlari bo'yicha tavsilotlar"
                        : "Qabul jarayonlari bo'yicha tavsilotlar"}
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.talim}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/906/906175.png" />
                      </div>
                      <h3>Ta'lim shakli</h3>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_talim !== null
                            ? this.state.school.q_talim
                            : "Ta'lim shakli to'g'risida ma'lumot"
                          : "Ta'lim shakli to'g'risida ma'lumot"}
                        {/* Bizning maktab ta???lim shakli kunduzgi bo???lib ta???lim jarayonlari 8:30 dan 16:00 gacha belgilangan. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} s data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/3829/3829933.png" />
                      </div>
                      <h3>Bitiruvchilar</h3>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_bitiruv !== null
                            ? this.state.school.q_bitiruv
                            : "Bitiruv to'g'risida ma'lumotlar"
                          : "Bitiruv to'g'risida ma'lumotlar"}

                        {/* 2019-2020 o???quv yili yakuniga ko???ra 106 nafar 11-sinf o???quvchilari maktabni tamomlashdi va ulardan 42 nafar o???quvchi Xalqaro Universitetlarga kirish imtihonlaridan muvaffaqiyatli o???tishdi. */}
                      </p>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.info} data-aos="zoom-in-up">
                      <div className={styles.qabul_talim}>
                        <Image src="https://image.flaticon.com/icons/png/512/950/950145.png" />
                      </div>
                      <h3>O'quvchilar</h3>
                      <p>
                        {this.state.school !== null
                          ? this.state.school.q_oquvchi !== null
                            ? this.state.school.q_oquvchi
                            : "O'quvchilar to'g'risida ma'lumot"
                          : "O'quvchilar to'g'risida ma'lumot"}
                        {/* 2019-2020 o???quv yilida 5- sinfdan 11-sinfgacha bo???lgan 656 nafar o???quvchi ta???lim oldi. */}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.jarayon}>
              <Container fluid style={{ padding: "0" }}>
                <h1>Qabul jarayoni</h1>
                <div
                  className={styles.line}
                  style={{ marginLeft: "auto", marginRight: "auto" }}
                ></div>
                <Carousel autoplay>
                  <div className={styles.jarayon_text}>
                    <h3>1. Onlayn royxatdan o'ting</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_online !== null
                          ? this.state.school.q_j_online
                          : "O'nline ro'yxatdan o'tish haqida"
                        : "O'nline ro'yxatdan o'tish haqida"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>2. Ariza yozing</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_forma !== null
                          ? this.state.school.q_j_forma
                          : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"
                        : "Ro'yxatdan o'tishdagi ariza haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>3. Arizani ko'zdan kechiring</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_koz !== null
                          ? this.state.school.q_j_koz
                          : "Arizani ko'zdan kechirish haqida ma'lumot"
                        : "Arizani ko'zdan kechirish haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>4. Kerakli hujjatlarni to'plang</h3>

                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_hujjat !== null
                          ? this.state.school.q_j_hujjat
                          : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"
                        : "Ro'yxatdan o'tish uchun kerak bo'ladigan hujjatlar to'g'risida ma'lumot"}
                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>5. Suhbat jarayoni</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_intervyu !== null
                          ? this.state.school.q_j_intervyu
                          : "Suhbat jarayoni haqida ma'lumot"
                        : "Suhbat jarayoni haqida ma'lumot"}
                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>

                  <div className={styles.jarayon_text}>
                    <h3>6. So'nggi qaror</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_j_qaror !== null
                          ? this.state.school.q_j_qaror
                          : "So'ngi qaror haqida ma'lumot"
                        : "So'ngi qaror haqida ma'lumot"}

                      {/* Ajoyib osoyishtalik butun qalbimni egallab oldi, xuddi bahorning shu shirin tonglari kabi, men butun qalbim bilan zavqlanaman. Men yolg'izman va borliq jozibasini his qilaman. */}
                    </p>
                  </div>
                </Carousel>
              </Container>
            </div>

            <div className={styles.tavsilotlar}>
              <Container fluid style={{ padding: "0" }}>
                <Row>
                  <Col
                    style={{ padding: "0" }}
                    lg={4}
                    md={12}
                    sm={12}
                    className={styles.tavsilot}
                  >
                    <Image
                      src={
                        this.state.school !== null
                          ? this.state.school.q_imtihon_r !== null
                            ? this.state.school.q_imtihon_r
                            : talab
                          : talab
                      }
                      data-aos="zoom-in-up"
                    />
                  </Col>
                  <Col
                    style={{ padding: "0" }}
                    lg={8}
                    md={12}
                    sm={12}
                    className={styles.tavsilottext}
                    data-aos="zoom-in-up"
                  >
                    <h3>Imtihonda ishtirok etish talablari</h3>
                    <p>
                      {this.state.school !== null
                        ? this.state.school.q_imtihon_t !== null
                          ? this.state.school.q_imtihon_t
                          : "Imtixonda ishtirok etish talablari haqida ma'lumot"
                        : "Imtixonda ishtirok etish talablari haqida ma'lumot"}
                    </p>
                    {/* <p>
                            O???quvchilarning ota-onasi yoki ota-onasining o???rnini bosuvchi shaxslar quyidagi talablarni bajarishi shart:
                            ??? ro???yxatdan o???tish vaqtida o???quvchining ID ko???rsatib yuborilgan SMS xabarni qabul qiluvchi telefon raqamni aniq ko???rsatilishi; ??? veb-ilova orqali uydan yoki infrastruktura mavjud bo???lgan istalgan joydan o???quvchi imtihonga qatnasha olishi uchun Internet tarmog???i bo???lgan hamda ZOOM ilovasi o???rnatilgan kompyuter yoki planshet yoki smartfon bilan ta???minlashi; ??? o???quvchiga tarmoq orqali sinovlarda qatnashishga tayyorlashi.
                            </p>
                            <p>
                            Ixtisoslashtirilgan maktabga saralash imtihonlarida ishtirok etish uchun hujjatlar davlat va nodavlat umumiy o???rta ta???lim muassasalarining tartibli bosqichdagi sinflarini muvaffaqiyatli ???4??? va ???5??? baholariga tamomlagan o???quvchilardan qabul qilinadi.
                            </p>
                            <p>
                            O???quvchining taqdim etgan hujjatlari haqqoniyligi va farzandining sinovlarda shaffof ishtirokini ta??minlash ota-ona zimmasiga yuklatiladi.
                            </p> */}
                  </Col>
                </Row>
              </Container>
            </div>

            <div className={styles.muddat} data-aos="fade-up">
              <Container fluid style={{ padding: "0" }}>
                <div className={styles.muddat_header}>
                  <h1>Ma'lumotlar</h1>
                  <div className={styles.line}></div>
                </div>
                <Row className={styles.muddat_item}>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text1}>
                      <div>
                        <h3>O'quv yili</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_oquv_yili !== null
                              ? this.state.school.q_oquv_yili
                              : "O'quv yili"
                            : "O'quv yili"}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text2}>
                      <div>
                        <h3>Hujjat topshirish muddati</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_muddat !== null
                              ? this.state.school.q_muddat
                              : "Muddati haqida ma'lumot"
                            : "Muddati haqida ma'lumot"}
                          {/* 10-20-sentabr kunlari */}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ padding: "0" }} lg={4} md={12} sm={12}>
                    <div className={styles.muddat_text3}>
                      <div>
                        <h3>Imtihon kuni</h3>
                        <p>
                          {this.state.school !== null
                            ? this.state.school.q_imtihon !== null
                              ? this.state.school.q_imtihon
                              : "Imtixon kuni"
                            : "Imtixon kuni"}
                          {/* 25-sentabrdan 9-oktabrgacha */}
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>

            <Container fluid style={{ padding: "0" }}>
              <div className={styles.hujjat}>
                <div className={styles.hujjat_text} data-aos="fade-right">
                  <h3>Kerakli hujjatlar</h3>
                  <p>
                    <b>1.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t1 !== null
                        ? this.state.school.q_hujjat_t1
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* O???quvchining tug???ilganligi haqida guvohnoma (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p>
                    <b>2.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t2 !== null
                        ? this.state.school.q_hujjat_t2
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 2019-2020 o???quv yilini ???4???va ???5??? baholarga bitirganligini tasdiqlovchi o???quvchining tabeli. Maktab direktori tomonidan tasdiqlangan bo???lishi kerak (pdf-10Mb oshmagan holatda). */}
                  </p>
                  <p>
                    <b>3.</b>
                    {this.state.school !== null
                      ? this.state.school.q_hujjat_t3 !== null
                        ? this.state.school.q_hujjat_t3
                        : "Kerakli hujjatlar to'g'risida ma'lumot"
                      : "Kerakli hujjatlar to'g'risida ma'lumot"}
                    {/* 3/4 Rasm (jpg/png/jpeg-formatida). */}
                  </p>
                  <p>
                    {this.state.school !== null
                      ? this.state.school.address !== null
                        ? this.state.school.address
                        : "Maktab manzili "
                      : "Maktab manzili "}
                    {/* Toshkent shahar, Yashnabod tumani, Mahtumquli ko???chasi Call-Center: 1206 (Ish vaqti 08:00dan ??? 20:00gacha) */}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default Qabul;
