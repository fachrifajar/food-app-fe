import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="font-weight-bold">Eat, Cook, Repeat</h2>
              <p className="my-4">Share your best recipe by uploading here!</p>
              <div className="d-flex justify-content-center social-links">
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/fachrifajar/?hl=id"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
