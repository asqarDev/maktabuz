
import React, { Component } from 'react'
import yangilik1 from '../img/yangilik1.jpg'
import yangilik2 from '../img/yangilik2.jpg'
import new1 from '../img/new1.jpg'
import new2 from '../img/new2.jpg'
import new3 from '../img/new3.jpg'
import new4 from '../img/new4.jpg'
import styles from '../css/yangiliklar.module.css'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'
import { getNews } from '../host/Config'
import FadeLoader from "react-spinners/FadeLoader";
import { Carousel } from 'antd'
import styled from 'styled-components'
import sports from '../img/sport1.jpg'

// import {DownCircleOutlined} from '@ant-design/icons'
import school8 from "../img/school8.jpg";

export default class Yangiliklar extends Component {
  state={
    news:[],
    id:0,
    loader:true
  }  
  
  getNews=()=>{
    getNews().then(res=>{
   
      if(window.location.href.indexOf('id=')===-1){
        
       
        
        this.setState({
          news:res.data,
          loader:false
        })
       
        }
          
      
      else{
       
        this.setState({
          news:res.data,
          id:window.location.href.slice(window.location.href.indexOf('=')+1),
          loader:false
        })
        
      }
      
    }).catch(err=>{
      console.log(err)
    
      this.setState({
        loader:false
      })
    })
  }
  componentDidMount(){
        Aos.init({
            duration:2000
        })
        this.getNews()
    }

    // onclick_new=(link)=>{
    //       <Link to="/${link}/uz"></Link>
    // }
    render() {
      const contentStyle = {
        width: '100%',
        objectFit: 'cover',
        color: '#fff',
        lineHeight: '30vh',
        textAlign: 'center',
        fontFamily: 'Lobster',
      };
      const { news } = this.state;
        return (

            <div>
{ this.state.loader?<div className="loaderT">
<FadeLoader
 color='blue' loading={this.state.loader} size={120} />        

    </div>:<>
                {/* ============Header============== */}

                <div className={styles.headerSliderText} style={{fontFamily: 'Lobster', zIndex:'100', paddingTop:'60px'}}>
                        <h3 style={{fontFamily: 'Lobster', zIndex:'100'}}>Maktabimiz so'ngi yangiliklari bilan tanishing</h3> 
                        </div>
                        <Carousel autoplay className={styles.sliderContainer}>
                      
    <div className={styles.sliderIMG}>
      <img  src={new1}/>
    </div>
    <div className={styles.sliderIMG}>
    <img  src={new2}/>
      
    </div>
    <div className={styles.sliderIMG}>
    <img  src={new3}/>

    </div>
    <div className={styles.sliderIMG}>
    <img  src={new4}/>

    </div>
  </Carousel>
                {/* ==================Section===================== */}
                            
                <Container fluid >
                    <div className={styles.yangi}>
                      <div className={styles.h11} data-aos="fade-up">
                      <h1 style={{fontSize:'60px'}} data-aos="fade-up">Yangiliklar</h1>
                      </div>
                    </div>
                    {/* <div className={styles.line} data-aos="fade-up"></div> */}
                    <Row className='my-5'>
                        <Col lg={6}>
                            
                               {
                                 this.state.news.length!==0?
                                 <div className={styles.news} data-aos="zoom-in-right">
                                 
                                <div className={styles.news2}>
                                <img src= {this.state.news[this.state.id].image} alt='Foto lavha' />
                                 <h3>{this.state.news[this.state.id].title}</h3>
                                 
                                 <p className={styles.date}><i style={{marginRight:'10px'}} class="far fa-calendar-alt"></i>{this.state.news[this.state.id].published_time.substring(0, 10)}</p> 
                                 <p>
                                 {this.state.news[this.state.id].text}
                                 </p>
                                </div>
                                </div>:''
                               }

                        </Col>
                        <Col lg={6} data-aos="zoom-in-left">
                                <div className={styles.news}>
                                  <div className={styles.news2}>
                                  <img src={ news.m_h_sport !== null && news !== null
                            ? news.m_h_sport
                            : school8
                        } className={styles.images}/>

                                  </div>
                                </div>
                               
                        </Col>

                        <Col lg={12}>
                            <div className={styles.recent_news} data-aos="zoom-in-left">
                              <div className={styles.title}>
                              <h3>So'ngi yangiliklar</h3>
                              </div>
                              <div className={styles.body}>
                                 <Row>
                                   {
                                     this.state.news.map((item, key)=>{
                                       return(
                                     <Col lg={6} md={12} sm={12} style={{marginBottom:'10px'}} className={styles.body_card} >
                                     <MDBCard onClick={()=>{this.setState({id:key})}} style={{ maxWidth: '540px' }}>
                                      <MDBRow className='g-0'>
                                      <MDBCol md='4'>
                                      <MDBCardImage src={item.image} alt='...' fluid style={{margin:'7px'}}/>
                                      </MDBCol>
                                      <MDBCol md='8'>
                                      <MDBCardBody>
                                      <MDBCardTitle>{item.title}</MDBCardTitle>
                                      
                                      <MDBCardText>
                                      <small className='text-muted'><p className={styles.date}><i style={{marginRight:'10px'}} class="far fa-calendar-alt"></i>{item.published_time.substring(0, 10)}  </p> </small>
                                      </MDBCardText>
                                      </MDBCardBody>
                                      </MDBCol>
                                      </MDBRow>
                                      </MDBCard>
                                     </Col>
                                       )
                                       })
                                   }
                                 </Row>
                              </div>
                              
                            </div>
                        </Col>
                    </Row>

                   
                </Container>
</>    }</div>
        )
    }
}
