import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactDetails = [
  {
    icon: Mail,
    title: "Email Us",
    value: "info@vtailenergy.com",
    description: "Send us an email and we'll get back to you.",
    link: "mailto:info@vtailenergy.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+1 (000) 000-0000",
    description: "Speak with our team about your enquiry.",
    link: "tel:+10000000000",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "New York, United States",
    description: "Connect with our team and explore opportunities.",
    link: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Monday – Friday",
    description: "9:00 AM – 5:00 PM",
    link: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || "New Website Enquiry",
    );

    const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Subject: ${formData.subject}

Message:
${formData.message}
    `);

    window.location.href = `mailto:info@vtailenergy.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <main className="bg-[#f5f5f0] text-[#0b1922]">
      {/* HERO SECTION */}
      <section className="relative bg-[#0b1922] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-40 w-[550px] h-[550px] rounded-full border border-[#b6d49b]" />
          <div className="absolute right-20 top-20 w-[350px] h-[350px] rounded-full border border-[#b6d49b]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#b6d49b] uppercase tracking-[0.3em] text-xs mb-8">
              Contact Vtail Energy
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Let's start a
              <br />
              <span className="text-[#b6d49b]">conversation.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              Whether you have a project in mind, an investment opportunity or
              simply want to learn more about Vtail Energy, we'd be glad to hear
              from you.
            </p>

            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 bg-[#b6d49b] text-[#0b1922] px-8 py-4 hover:bg-white transition"
            >
              Send an Enquiry
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Get in Touch
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Every great opportunity starts with a conversation.
            </h2>
          </div>

          <div>
            <p className="text-[#53616a] text-lg leading-relaxed mb-6">
              At Vtail Energy, we believe collaboration is essential to building
              meaningful energy and infrastructure opportunities.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Our team welcomes enquiries from businesses, investors, project
              developers and industry stakeholders interested in exploring
              opportunities across the energy value chain.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Contact Information
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              Connect with our team.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-[#e5e8e1] p-8 hover:bg-[#0b1922] hover:text-white transition duration-300 group"
                >
                  <Icon
                    size={28}
                    strokeWidth={1.4}
                    className="text-[#71866b] group-hover:text-[#b6d49b] mb-8"
                  />

                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>

                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sm text-[#71866b] group-hover:text-[#b6d49b] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-[#71866b] group-hover:text-[#b6d49b]">
                      {item.value}
                    </p>
                  )}

                  <p className="text-sm text-[#65727a] group-hover:text-white/60 leading-relaxed mt-4">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* LEFT SIDE */}
          <div>
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Send Us a Message
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Tell us about your next opportunity.
            </h2>

            <p className="text-[#53616a] leading-relaxed mb-10 max-w-lg">
              Share a little about your enquiry, project or business
              requirements. We'll look forward to hearing from you.
            </p>

            <div className="bg-[#0b1922] p-9 md:p-12 text-white">
              <p className="text-[#b6d49b] text-xs uppercase tracking-[0.25em] mb-6">
                Vtail Energy
              </p>

              <h3 className="font-serif text-3xl leading-tight mb-6">
                Building the energy infrastructure of tomorrow.
              </h3>

              <p className="text-white/60 leading-relaxed text-sm mb-8">
                We welcome meaningful conversations with organizations and
                individuals who share our interest in energy, infrastructure and
                sustainable development.
              </p>

              <a
                href="mailto:info@vtailenergy.com"
                className="inline-flex items-center gap-3 text-[#b6d49b] hover:text-white transition"
              >
                Email our team
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white border border-[#e5e8e1] p-8 md:p-12">
            {submitted ? (
              <div className="min-h-[400px] flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={52} className="text-[#71866b] mb-6" />

                <h3 className="font-serif text-3xl mb-4">
                  Your enquiry is ready.
                </h3>

                <p className="text-[#65727a] leading-relaxed mb-8">
                  Your email application should open with your enquiry. Please
                  send the email to complete your submission.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#71866b] border-b border-[#71866b] pb-1"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-3">First Name *</label>

                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Your first name"
                      className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-3">Last Name *</label>

                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Your last name"
                      className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-3">Email Address *</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-3">
                    Company / Organization
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b]"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-3">Subject *</label>

                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b]"
                  >
                    <option value="">Select an enquiry type</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Project Development">
                      Project Development
                    </option>
                    <option value="Investment Opportunity">
                      Investment Opportunity
                    </option>
                    <option value="Partnership">Partnership</option>
                    <option value="Business Collaboration">
                      Business Collaboration
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-3">Your Message *</label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your enquiry..."
                    className="w-full bg-[#f5f5f0] border border-[#e5e8e1] px-4 py-4 text-sm outline-none focus:border-[#71866b] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center gap-3 bg-[#0b1922] text-white px-8 py-5 hover:bg-[#71866b] transition"
                >
                  Send Your Enquiry
                  <Send size={17} />
                </button>

                <p className="text-xs text-[#89949a] leading-relaxed">
                  By submitting this form, your email application will open with
                  your enquiry details. Your message is not sent automatically.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0b1922] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#b6d49b] uppercase tracking-[0.25em] text-xs mb-6">
            Vtail Energy
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight max-w-3xl mx-auto mb-8">
            Let's create meaningful energy opportunities together.
          </h2>

          <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
            We look forward to hearing from you and exploring what we can
            achieve together.
          </p>

          <a
            href="mailto:info@vtailenergy.com"
            className="inline-flex items-center gap-3 bg-[#b6d49b] text-[#0b1922] px-8 py-4 hover:bg-white transition"
          >
            Email Vtail Energy
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
