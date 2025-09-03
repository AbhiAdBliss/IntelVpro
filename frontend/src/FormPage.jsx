import React, { useState } from "react";
import "./FormPage.css";
import axios from "axios";

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    jobLevel: "",
    jobTitle: "",
    city: "",
  });

  const [checkboxes, setCheckboxes] = useState({
    ageConfirmation: false,
    marketingAgreement: false,
  });

  const [errors, setErrors] = useState({
    ageConfirmation: "",
    marketingAgreement: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error for that field
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    setErrors({ ...errors, [name]: "" }); // clear error on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
    let newErrors = {
      ageConfirmation: "",
      marketingAgreement: "",
      email: "",
      phone: "",
    };

    // Checkbox validation
    if (!checkboxes.ageConfirmation) {
      newErrors.ageConfirmation = "Please tick this box if you want to proceed";
      hasError = true;
    }
    if (!checkboxes.marketingAgreement) {
      newErrors.marketingAgreement =
        "Please tick this box if you want to proceed";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post("/api/submit", {
        ...formData,
        ...checkboxes,
      });

      if (response.data.error) {
        // handle backend errors (like duplicate email/phone)
        if (response.data.error === "Email already exists") {
          newErrors.email = "This email is already registered";
        }
        if (response.data.error === "Phone already exists") {
          newErrors.phone = "This phone number is already registered";
        }
        setErrors(newErrors);
        return;
      }

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        jobLevel: "",
        jobTitle: "",
        city: "",
      });
      setCheckboxes({
        ageConfirmation: false,
        marketingAgreement: false,
      });
      setSubmitted(true);

      // Trigger demo PDF download
      const link = document.createElement("a");
      link.href = "/demo.pdf"; // put your PDF in public/demo.pdf
      link.download = "whitepaper.pdf";
      link.click();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="formmain">
      <div className="bgimg"></div>
      <div className="form-page">
        <div className="content">
          <h2>Discover more business potential with AI PCs</h2>
          <p>
            A robust foundation is key to your AI enterprise vision and strategy.
            Make the move now to empower your team with the latest AI PCs for a
            competitive edge.
          </p>

          <h3>Gain a competitive edge: exclusive insights from IT professionals</h3>
          <p>
            Learn how implementing Intel vPro® creates an unrivaled business
            computing foundation to enhance user performance, security,
            connectivity
          </p>

          <h3>Key Takeaways</h3>
          <h4>Built-in security</h4>
          <p>
            Intel vPro Security is included with every device on the Intel vPro
            platform. 84% of IT teams stated that it resulted in fewer security
            incidents, including personal data leaks.1
          </p>

          <h4>Remote control, simplified</h4>
          <p>
            IT teams can reach any device with access to a network connection and
            power source—even if they’re powered off—making it faster and easier
            to get everyone’s PC up and running.
          </p>
          <h4>Better productivity, less downtime</h4>
          <p>
            Intel® Core™ Ultra processors, now powered by 3D hybrid architecture,
            are designed to deliver the responsive performance and reliable
            connectivity business users need.
          </p>
          <h4>Stable platform, seamless updates</h4>
          <p>
            Update at your pace with assured quality and performance. 86% of
            surveyed IT decision-makers say Intel vPro allows for improved
            patching efficiency.2
          </p>
        </div>

        <div className="form-container">
          <h3>Fill out the form below to connect with us:</h3>
          {!submitted ? (
            <form onSubmit={handleSubmit}>
              {Object.keys(formData).map((key) => (
                <div key={key} className="form-field">
                  <label htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}*
                  </label>
                  <input
                    type={key === "email" ? "email" : "text"}
                    id={key}
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    required
                  />
                  {errors[key] && (
                    <div className="inline-error">{errors[key]}</div>
                  )}
                </div>
              ))}

              <button type="submit">Submit</button>

              <div className="disclaimer-container">
                <div className="disclaimer-item checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="ageConfirmation"
                    name="ageConfirmation"
                    checked={checkboxes.ageConfirmation}
                    onChange={handleCheckboxChange}
                    className={`checkbox1 ${errors.ageConfirmation ? "error" : ""}`}
                  />
                  <label htmlFor="ageConfirmation" className="disclaimer-text">
                    By completing this form, you are confirming you are age 18
                    years or older.
                  </label>
                  {errors.ageConfirmation && (
                    <div className="tooltip">{errors.ageConfirmation}</div>
                  )}
                </div>

                <div className="disclaimer-item checkbox-wrapper">
                  <input
                    type="checkbox"
                    id="marketingAgreement"
                    name="marketingAgreement"
                    checked={checkboxes.marketingAgreement}
                    onChange={handleCheckboxChange}
                    className={`checkbox1 ${errors.marketingAgreement ? "error" : ""}`}
                  />
                  <label
                    htmlFor="marketingAgreement"
                    className="disclaimer-text"
                  >
                    By submitting, you agree to Intel and Businestech contacting
                    you further for marketing-related communications. See{" "}
                    <a
                      href="https://www.businestech.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Businestech's Privacy Notice
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.intel.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Intel's Privacy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.intel.com/cookies"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cookies notices
                    </a>
                    .
                  </label>
                  {errors.marketingAgreement && (
                    <div className="tooltip">{errors.marketingAgreement}</div>
                  )}
                </div>
              </div>
            </form>
          ) : (
            <div className="confirmation-message">
              <p>
                We have received your request. We will get in touch with you
                ASAP.
              </p>
              <p>
                Download the white paper from{" "}
                <a href="/demo.pdf" download>
                  here
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="footer-container">
        <p className="footer-text">
          © Intel Corporation. Intel, the Intel logo, and other Intel marks are
          trademarks of Intel Corporation or its subsidiaries.
        </p>
        <p className="footer-text">© 2024 AdBliss Digital Media LLP</p>
        <p className="footer-text">Kudlu Gate, Bangalore, Karnataka, India.</p>
      </div>
    </div>
  );
};

export default FormPage;
