function ContactSection({
  sectionRef,
}) {


  return (

    <section
      ref={sectionRef}
      id="contact"
      className="py-5 bg-light"
    >

      <div className="container">

        <h2 className="text-center mb-4">
          📞 Contact Us
        </h2>


        <p className="text-center text-muted mb-4">
          Have any questions? Feel free to contact us.
        </p>
        <div className="row justify-content-center">

          <div className="col-md-7 col-lg-6">

            <div className="card shadow-sm p-4">
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">

                <label className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>

              </div>
              <button className="btn btn-dark w-100">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );

}
export default ContactSection;