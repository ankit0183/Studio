import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';
import Header from './components/Header';

export default function Home()
{
  return (
    <div>
      <section id="about" className="about" style={ { backgroundImage: 'url(assets/img/one.png)', backgroundRepeat: 'no-repeat' } }>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-8 d-flex" style={ { justifyContent: 'center', alignItems: 'center' } }>
              <div className="section-title">
                <h1 style={ { color: '#fff', fontSize: '80px', textAlign: 'left' } }><b>You imagine,<br />We create!</b></h1>
              </div>
            </div>
            <div className="col-lg-4 video-box">
              <img src="assets/img/illustration.png" className="img-fluid" alt="About Image" width="70%" />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about" style={ { backgroundImage: 'url(assets/img/two.png)', backgroundRepeat: 'no-repeat' } }>
        <div className="container" style={ { marginTop: '20%' } }>
          <div className="row no-gutters">
            {/* <div className="col-lg-6 video-box">
            <img src="assets/img/about.PNG" className="img-fluid" alt="About Image" />
          </div> */}
            <div className="col-lg-12 d-flex flex-column justify-content-center about-content">
              <div className="section-title" style={ { textAlign: 'left' } }>
                <h2>About Us</h2>
                <p>We are a team of story-tellers who unite creativity and collaboration to bring business growth to life through essence-filled visuals. Every bit of our imagination is a color of joy and every frame we make, a story full of life. We treasure our relationship with you because that is what life is all about. For us, you are not only our clients but our team members as well, and we believe that the power of several brains at work gives birth to inspiring ideas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counts section-bg" style={ { backgroundImage: 'url(assets/img/three.png)', backgroundRepeat: 'no-repeat' } }>
        <div className="container" style={ { marginTop: '10%' } }>
          <div className="section-title" style={ { marginTop: '30px' } }>
            <h2>Showreel</h2>
            {/* <p>Following picture shows the flow of our work</p> */ }
          </div>
          <a href="assets/img/process2.png">
            <img src="assets/img/process2.png" alt="Image Of Work Flow" style={ { width: '100%' } } />
          </a>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2 style={ { color: '#000' } }>
              Our <span style={ { color: '#c70039' } }>Services</span>
            </h2>
            {/* <p>We make TVC’s, Corporate Av’s, Social Media Ads, Brand Films,
            Promotional Campaigns, Aftermovies’ and also film Luxury Events
            & festivals.</p> */}
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_9.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_8.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_7.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_6.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_5.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_4.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_3.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 icon-box aos-init aos-animate" data-aos="fade-up" style={ { width: '50%' } }>
              <div className="col-lg-6 icon">
                <img src="assets/img/services/Asset_2.png" alt="TV ADS" height="50px" width="50px" />
              </div><br />
              <h4 className="title"><a>TVC Advts</a></h4>
            </div>




          </div>

        </div>


        <section>
          <div className="row">
            <div className="col-md-4">.col-md-4</div>
            <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
          </div>
          <div className="row">
            <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
            <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
          </div>
          <div className="row">
            <div className="col-auto mr-auto">.col-auto .mr-auto</div>
            <div className="col-auto">.col-auto</div>
          </div>

          <div className="row">
            <div className="col">col</div>
            <div className="col">col</div>
            <div className="w-100"></div>
            <div className="col">col</div>
            <div className="col">col</div>
          </div>
        </section>
      </section>
      <section id="clients" className="clients" style={ { backgroundImage: 'url(assets/img/one1.png)', backgroundRepeat: 'no-repeat' } }>
        <div className="container section-bg" style={ { boxShadow: '0 5px 25px 0 rgb(0 0 0 / 60%)', padding: '20px', borderRadius: '15px' } }>

          <div className="section-title">
            {/* <h2>100+ Happy Clients</h2>
          <p>Some Of Our Clients</p> */}
            <h2 style={ { color: '#000' } }>
              Our <span style={ { color: '#c70039' } }>Clients</span>
            </h2>
          </div>

          <div className="owl-carousel clients-carousel">
            <img src="assets/img/clients/1.png" alt="Logo Of Puma" title="Puma" />
            <img src="assets/img/clients/2.png" alt="Logo Of Dyson" title="Dyson" />
            <img src="assets/img/clients/3.png" alt="Logo Of Duracell" title="Duracell" />
            {/* Repeat the remaining client logos */ }
          </div>

        </div>
      </section>
      <footer id="footer" style={ { backgroundImage: 'url(assets/img/one.png)', backgroundRepeat: 'no-repeat' } }>
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-info">
                <img src="assets/img/logo-footer.png" height="50px" width="150px" alt="" />
                <p>
                  <br />
                  <strong>Phone:</strong> +91 9137394561<br />
                  <strong>Email:</strong> hello@domyworkstudios.com<br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>Web Design</li>
                  <li>Advertising</li>
                  <li>Graphic Design</li>
                </ul>
              </div>

              <div className="col-lg-6 col-md-6 footer-newsletter">
                <h4>Thanks For Visiting</h4>
                <p>
                  We take care of our customer and we are always here to help you. Our prices are affordable,
                  and we offer referral discounts as well.
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                  {/* <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */ }
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div className="container">
          <div className="copyright">
            &copy; { new Date().getFullYear() } DoMyWork Studios. All Rights Are Reserved. | Made By{ ' ' }
            <a href="http://www.nikom.co.in/" target="_blank" style={ { color: '#fff' } }>
              NiKom Technologies.
            </a>
          </div>
        </div>
      </footer>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.jss"
      />
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous" />
    </div>


  )
}
