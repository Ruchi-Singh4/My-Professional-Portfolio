import { useState, type ChangeEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { ME } from "@/data/profile";
import type { ContactForm } from "@/types";

const EMPTY: ContactForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  const [sent, setSent] = useState(false);

  const update =
    (field: keyof ContactForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const send = (): void => {
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${ME.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="sec" id="contact">
      <div className="wrap">
        <h2 className="sec-t" data-rv>
          Contact <span className="grad">me</span>
        </h2>
        <p className="sec-l" data-rv>
          Open to Java and full stack roles — Hyderabad or remote.
        </p>

        <div className="contact">
          <div className="c-info" data-rv>
            <h3>Get in touch</h3>
            <p>Send a note about the role and I'll get back to you.</p>

            <ul>
              <li>
                <span className="ci">
                  <Mail size={16} />
                </span>
                <div>
                  <em>Email</em>
                  <a href={`mailto:${ME.email}`}>{ME.email}</a>
                </div>
              </li>
              <li>
                <span className="ci">
                  <MapPin size={16} />
                </span>
                <div>
                  <em>Location</em>
                  <span>{ME.location}</span>
                </div>
              </li>
            </ul>

            <div className="c-socials">
              <a href={ME.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
              <a href={ME.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github size={17} />
              </a>
            </div>
          </div>

          <div className="c-form" data-rv>
            <div className="f2">
              <input placeholder="Your name" value={form.name} onChange={update("name")} />
              <input placeholder="Email address" type="email" value={form.email} onChange={update("email")} />
            </div>
            <input placeholder="Subject" value={form.subject} onChange={update("subject")} />
            <textarea placeholder="Your message" rows={5} value={form.message} onChange={update("message")} />
            <button className="btn full" onClick={send}>
              <Send size={16} /> {sent ? "Opening your mail app…" : "Send message"}
            </button>
            <p className="f-note">Opens your email app with the message filled in.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
