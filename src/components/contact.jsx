// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact" className="contact-section">
//       <div className="contact-container">
//         <h2>Get in Touch</h2>
//         <p className="contact-intro">
//           We welcome inquiries related to projects, partnerships, and professional
//           collaborations. Reach out to us using the details below.
//         </p>

//         <div className="contact-details">
//           <div>
//             <h4>Office Address</h4>
//             <p>
//               8-A, Pocket-D, Deep Enclave,<br />
//               Ashok Vihar Phase-III,<br />
//               Delhi – 110052
//             </p>
//           </div>

//           <div>
//             <h4>Email</h4>
//             <p>divya.shakti0@gmail.com</p>
//           </div>

//           <div>
//             <h4>Office Phone</h4>
//             <p>011-43024533</p>
//           </div>
//         </div>

//         <div className="contact-director">
//           <h3>Director</h3>
//           <p><strong>Amardeep Singh (Jolly)</strong></p>
//           <p>📞 +91 97116-11650</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    ok: false,
    msg: "",
  });

  const onChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    setStatus({ loading: true, ok: false, msg: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          subject: `New Divyashakti Enquiry — ${form.service || "General"}`,
          from_name: "Divyashakti Associates Website",

          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });

      const data = await res.json();
      if (!data.success) throw new Error("Submit failed");

      setStatus({
        loading: false,
        ok: true,
        msg: "✅ Enquiry received. Our team will contact you shortly.",
      });

      setForm({ name: "", phone: "", email: "", service: "", message: "" });
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        msg: "❌ Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-wrap">
        <div className="contact-head">
          <h2>Contact Us</h2>
          <p>
            Have a project or enquiry? Share your details and we’ll get back to you.
          </p>
        </div>

        <form className="contact-card" onSubmit={onSubmit}>
          <div className="contact-grid">
            <div className="field">
              <label>Full Name *</label>
              <input
                className="input"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Tejinder Singh"
                required
              />
            </div>

            <div className="field">
              <label>Phone Number *</label>
              <input
                className="input"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+91 98XXXXXXXX"
                required
              />
            </div>

            <div className="field">
              <label>Email Address *</label>
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="tej@example.com"
                required
              />
            </div>

            <div className="field">
              <label>Query Regarding *</label>
              <select
                className="input"
                name="service"
                value={form.service}
                onChange={onChange}
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Construction / Civil Work">Construction / Civil Work</option>
                <option value="Renovation / Repair">Renovation / Repair</option>
                <option value="Government Tender / Contracting">Government Tender / Contracting</option>
                <option value="Material Supply">Material Supply</option>
                <option value="Property / Rent Enquiry">Property / Rent Enquiry</option>
                <option value="Land Acquisition / Development">Land Acquisition / Development</option>
                <option value="Software / Technology Enquiry">Software / Technology Enquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="field full">
              <label>Message *</label>
              <textarea
                className="input textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Write your message here..."
                required
              />
            </div>
          </div>

          <button className="btn" type="submit" disabled={status.loading}>
            {status.loading ? "Sending..." : "Enquire Now"}
          </button>

          {status.msg ? (
            <p className={`status ${status.ok ? "ok" : "err"}`}>{status.msg}</p>
          ) : null}

          <div className="contact-footer">
            <p><b>Office:</b> 8-A, Pocket-D, Deep Enclave, Ashok Vihar Phase-III, Delhi-110052</p>
            <p><b>Email:</b> divya.shakti0@gmail.com • <b>Phone:</b> 011-43024533</p>
          </div>
        </form>
      </div>
    </section>
  );
}