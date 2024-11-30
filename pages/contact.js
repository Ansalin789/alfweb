import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Contact Us"} />
      {/*==================================================*/}
      {/* Start Appoinment Section */}
      {/*===================================================*/}
      <div className="contact-us pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="contact_from_box">
                <div className="contact_title pb-4">
                  <h3>Get In Touch</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  method="POST"
                  id="dreamit-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="name" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_box mb-30">
                        <input type="text" name="web" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_box mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="quote_button">
                        <button className="btn" type="submit">
                          {" "}
                          <i className="bi bi-gear" /> Free Consultant
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="status" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 pl-0 pr-0">
              <div className="cda-content-area">
                <div className="cda-single-content d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Company Location</h4>
                    <p>
                    128, City Road, London, EC1V 2NX, United Kingdom
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-phone-alt" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Telephone Number</h4>
                    <p>
                    UK +44 20 4577 1227 <br />
                    USA +1 85 5442 3380{" "}
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex">
                  <div className="cda-icon">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="cda-content-inner">
                    <h4>Our Email Address</h4>
                    <p>
                    Email: contact@alfurqan.academy
                    </p>
                  </div>
                </div>
                <div className="cda-single-content hr d-flex"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* Start Contact Location Section */}
      {/*===================================================*/}
      <div className="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
            <div style={{ width: "100%", height: "450px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4492.588111147298!2d-0.08866000000000002!3d51.527236!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d62475b8e6f%3A0x3a2789abcf83cfa6!2sAl%20Furqan%20Academy!5e1!3m2!1sen!2sus!4v1726298997796!5m2!1sen!2sus"
        width="1500"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
