import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e) => {
    e.preventDefault();
    alert("Message sent (demo).");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="container py-5">
      <h2>Contact Us</h2>
      <form onSubmit={submit} className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input required type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea required value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} className="form-control" rows="5"></textarea>
        </div>
        <button className="btn btn-danger" type="submit">Send Message</button>
      </form>
    </section>
  );
}
