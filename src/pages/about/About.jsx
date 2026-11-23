
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Award,
  Globe2,
  Zap,
  Settings,
  Network,
  Building2,
  ClipboardCheck,
  Leaf,
  TrendingUp,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const reveal = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.15 },
};

const values = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Integrity",
    description:
      "We believe lasting business relationships are built on transparency, accountability and professional conduct. We approach every engagement with honesty and a clear commitment to our responsibilities.",
  },
  {
    icon: Award,
    number: "02",
    title: "Excellence",
    description:
      "We pursue high standards across engineering, procurement and project execution, recognising that attention to detail and technical discipline are essential to successful infrastructure delivery.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Innovation",
    description:
      "We embrace evolving technologies, new approaches and practical solutions that help improve the efficiency, resilience and long-term performance of energy infrastructure.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Partnership",
    description:
      "We value collaboration and believe complex infrastructure projects require strong working relationships between clients, developers, suppliers, engineers and delivery partners.",
  },
  {
    icon: Target,
    number: "05",
    title: "Accountability",
    description:
      "We emphasise clear responsibilities, measurable deliverables and disciplined project coordination from initial planning through execution and handover.",
  },
  {
    icon: Leaf,
    number: "06",
    title: "Sustainability",
    description:
      "We are focused on supporting the development of cleaner energy systems and infrastructure that contributes to a more resilient and sustainable energy future.",
  },
];

const capabilities = [
  {
    icon: Settings,
    title: "Engineering & Technical Services",
    description:
      "Technical planning, engineering coordination, design reviews, feasibility assessments and project-specific technical advisory.",
  },
  {
    icon: Building2,
    title: "EPC & Infrastructure Contracting",
    description:
      "Coordinated engineering, procurement and construction scopes supported by qualified contractors and specialist delivery partners.",
  },
  {
    icon: Network,
    title: "Equipment Procurement & Supply",
    description:
      "Equipment sourcing, supplier evaluation, technical specifications, purchasing and delivery coordination for critical infrastructure.",
  },
  {
    icon: Zap,
    title: "Energy & Power Infrastructure",
    description:
      "Support for renewable energy installations, electrical systems, substations, transformers and grid infrastructure.",
  },
  {
    icon: ClipboardCheck,
    title: "Project & Contract Management",
    description:
      "Project planning, contractor coordination, schedule monitoring, commercial oversight and management of technical interfaces.",
  },
  {
    icon: TrendingUp,
    title: "Project Development & Advisory",
    description:
      "Development support, project assessments, investment preparation, technical due diligence and infrastructure consulting.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We begin by understanding the project objectives, technical requirements, commercial expectations and delivery environment.",
  },
  {
    number: "02",
    title: "Engineer",
    description:
      "We establish the technical requirements, assess project constraints and develop an appropriate execution strategy.",
  },
  {
    number: "03",
    title: "Procure",
    description:
      "We coordinate equipment sourcing, supplier engagement, procurement requirements and delivery arrangements.",
  },
  {
    number: "04",
    title: "Execute",
    description:
      "We coordinate designated contractors, technical interfaces, project milestones and delivery responsibilities.",
  },
  {
    number: "05",
    title: "Deliver",
    description:
      "We support inspection, documentation, commissioning coordination and structured project handover.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#77947b]">
      <span className="h-px w-8 bg-[#77947b]" />
      {children}
    </div>
  );
}

function PageHeading({ label, title, description, light = false }) {
  return (
    <motion.div {...reveal} variants={fadeUp} className="max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h2
        className={`font-serif text-4xl leading-[1.12] tracking-tight md:text-6xl ${
          light ? "text-white" : "text-[#14262d]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-sm leading-8 md:text-base ${
            light ? "text-white/65" : "text-[#68797a]"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

function AboutHero() {
  return (
    <section className="relative flex min-h-[690px] items-center overflow-hidden bg-[#0b1922] text-white md:min-h-[780px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(7,20,27,.96) 0%,rgba(7,20,27,.85) 48%,rgba(7,20,27,.3) 100%),url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2200&q=85)",
        }}
      />

      <div className="absolute right-[-100px] top-24 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute right-[-40px] top-40 h-[300px] w-[300px] rounded-full border border-white/10" />

      <div className="container-site relative z-10 mx-auto w-full px-6 pb-20 pt-36 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.22em] text-[#b6d49b]">
              <span className="h-px w-10 bg-[#b6d49b]" />
              About Vtail Energy
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-8 font-serif text-6xl leading-[1.04] tracking-tight md:text-8xl lg:text-[100px]"
          >
            Engineering
            <br />
            energy for a
            <br />
            <span className="italic text-[#b6d49b]">better future.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg"
          >
            We are an energy infrastructure and contracting company focused on
            connecting engineering expertise, commercial discipline and
            practical execution to support the evolving global energy landscape.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#our-story"
              className="inline-flex items-center gap-4 bg-[#b6d49b] px-7 py-4 text-[10px] font-extrabold uppercase tracking-widest text-[#10211c] transition hover:bg-white"
            >
              Discover Our Story <ArrowDown size={16} />
            </a>

            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 border border-white/40 px-7 py-4 text-[10px] font-extrabold uppercase tracking-widest transition hover:bg-white hover:text-[#0b1922]"
            >
              Contact Us <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15">
          <div className="container-site mx-auto flex flex-wrap justify-between gap-4 px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-white/60 md:px-12">
            <span>Founded 2023</span>
            <span>Headquartered in New York</span>
            <span>Energy Infrastructure & Contracting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section id="our-story" className="bg-white py-24 md:py-32">
      <div className="container-site mx-auto grid gap-16 px-6 md:grid-cols-2 md:items-center md:gap-24 md:px-12">
        <motion.div {...reveal} variants={fadeUp}>
          <SectionLabel>01 / Who We Are</SectionLabel>

          <h2 className="font-serif text-5xl leading-[1.15] text-[#14262d] md:text-6xl">
            A different approach to
            <span className="italic text-[#78977b]"> energy infrastructure.</span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#465b5d]">
            Vtail Energy is a New York-based energy infrastructure company
            established in 2023, with a focus on renewable energy contracting,
            engineering, procurement and project delivery.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#6a7979]">
            We operate at the intersection of technical expertise and
            commercial execution. Our focus is on helping project stakeholders
            navigate the complexities of energy infrastructure through
            coordinated services, clearly defined contractual scopes and
            practical project solutions.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#6a7979]">
            From equipment procurement and engineering coordination to
            infrastructure contracting and project management, we seek to
            create value through disciplined execution and collaborative
            working relationships.
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          variants={fadeUp}
          className="relative"
        >
          <div className="absolute -left-5 -top-5 h-full w-full border border-[#b6d49b]" />

          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85"
            alt="Modern energy infrastructure"
            className="relative h-[450px] w-full object-cover md:h-[570px]"
          />

          <div className="absolute bottom-0 left-0 max-w-[290px] bg-[#0b1922] p-7 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#b6d49b]">
              Our foundation
            </span>
            <p className="mt-3 font-serif text-3xl">
              Experience meets execution.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-[#f3f5f0] py-24 md:py-32">
      <div className="container-site mx-auto grid gap-12 px-6 md:grid-cols-[.7fr_1.3fr] md:gap-24 md:px-12">
        <motion.div {...reveal} variants={fadeUp}>
          <SectionLabel>02 / Our Story</SectionLabel>
          <h2 className="font-serif text-5xl leading-tight text-[#14262d] md:text-6xl">
            Where experience meets ambition.
          </h2>
        </motion.div>

        <motion.div {...reveal} variants={fadeUp}>
          <div className="border-l-2 border-[#b6d49b] pl-7 md:pl-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#78977b]">
              2023 — The beginning
            </span>

            <h3 className="mt-5 text-2xl font-semibold text-[#172c31]">
              Establishing a new direction in energy infrastructure.
            </h3>

            <p className="mt-6 text-sm leading-8 text-[#637474]">
              Vtail Energy was established in 2023 with the objective of
              bringing together technical knowledge, engineering experience
              and commercial understanding within the renewable energy and
              infrastructure sector.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#637474]">
              The company was founded on the understanding that the energy
              transition requires more than ambitious development targets. It
              requires dependable infrastructure, capable contractors,
              coordinated supply chains and disciplined project execution.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#637474]">
              Our approach reflects this understanding. We aim to build
              relationships with project developers, equipment manufacturers,
              engineering specialists and infrastructure partners to support
              the successful delivery of energy projects.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#637474]">
              As the global energy landscape continues to evolve, Vtail Energy
              is positioned around the opportunities emerging in renewable
              generation, energy storage, electrical infrastructure and
              power-system modernisation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-[#0b1922] py-24 text-white md:py-32">
      <div className="container-site mx-auto px-6 md:px-12">
        <motion.div {...reveal} variants={fadeUp}>
          <SectionLabel>03 / Our Purpose</SectionLabel>
          <h2 className="font-serif text-5xl md:text-6xl">
            Guided by purpose.
            <br />
            <span className="italic text-[#b6d49b]">Driven by possibility.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <motion.div
            {...reveal}
            variants={fadeUp}
            className="border border-white/15 bg-white/[.035] p-9 md:p-12"
          >
            <Target className="h-10 w-10 text-[#b6d49b]" />

            <h3 className="mt-8 font-serif text-4xl">Our Mission</h3>

            <p className="mt-6 text-sm leading-8 text-white/65">
              To provide dependable engineering, procurement and
              infrastructure contracting solutions that support the
              development and delivery of renewable energy and power
              infrastructure projects.
            </p>

            <p className="mt-4 text-sm leading-8 text-white/65">
              Through technical competence, commercial responsibility and
              collaborative execution, we aim to create meaningful value for
              our clients and project partners.
            </p>
          </motion.div>

          <motion.div
            {...reveal}
            variants={fadeUp}
            className="border border-[#b6d49b]/40 bg-[#b6d49b]/[.08] p-9 md:p-12"
          >
            <Eye className="h-10 w-10 text-[#b6d49b]" />

            <h3 className="mt-8 font-serif text-4xl">Our Vision</h3>

            <p className="mt-6 text-sm leading-8 text-white/65">
              To become a trusted international partner in energy
              infrastructure contracting and project delivery, recognised
              for technical integrity, commercial discipline and dependable
              collaboration.
            </p>

            <p className="mt-4 text-sm leading-8 text-white/65">
              We aspire to contribute to a more efficient, resilient and
              sustainable energy ecosystem by supporting the infrastructure
              that makes the energy transition possible.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-site mx-auto px-6 md:px-12">
        <PageHeading
          label="04 / Our Values"
          title={
            <>
              The principles behind
              <br />
              <i className="text-[#78977b]">everything we do.</i>
            </>
          }
          description="Our values shape how we approach our work, how we engage with partners and how we measure the quality of our contribution to every project."
        />

        <motion.div
          {...reveal}
          variants={stagger}
          className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={fadeUp}
                className="border-t border-[#dce4dc] pt-7"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-9 w-9 stroke-[1.4] text-[#78977b]" />
                  <span className="text-xs font-bold tracking-widest text-[#a6b5aa]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold text-[#172c31]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#697978]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="bg-[#f3f5f0] py-24 md:py-32">
      <div className="container-site mx-auto px-6 md:px-12">
        <PageHeading
          label="05 / Our Expertise"
          title={
            <>
              Connecting expertise
              <br />
              with <i className="text-[#78977b]">execution.</i>
            </>
          }
          description="Our capabilities span the essential disciplines required to plan, procure, coordinate and deliver modern energy infrastructure."
        />

        <motion.div
          {...reveal}
          variants={stagger}
          className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-8 transition-shadow hover:shadow-xl"
              >
                <span className="text-[10px] font-bold tracking-widest text-[#93a99a]">
                  CAPABILITY 0{index + 1}
                </span>

                <Icon className="my-7 h-9 w-9 stroke-[1.4] text-[#78977b]" />

                <h3 className="text-xl font-semibold leading-snug text-[#172c31]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#697978]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-site mx-auto grid gap-14 px-6 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-24 md:px-12">
        <motion.div {...reveal} variants={fadeUp} className="relative">
          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
            alt="Professional workspace"
            className="h-[450px] w-full object-cover md:h-[570px]"
          />

          <div className="absolute bottom-0 left-0 bg-[#0b1922] px-7 py-6 text-white">
            <span className="text-[10px] uppercase tracking-widest text-[#b6d49b]">
              Leadership
            </span>
            <p className="mt-2 font-serif text-2xl">
              Experience. Perspective. Direction.
            </p>
          </div>
        </motion.div>

        <motion.div {...reveal} variants={fadeUp}>
          <SectionLabel>06 / Leadership</SectionLabel>

          <h2 className="font-serif text-5xl leading-tight text-[#14262d] md:text-6xl">
            Led by experience.
            <br />
            <i className="text-[#78977b]">Focused on the future.</i>
          </h2>

          <p className="mt-8 text-sm leading-8 text-[#657575]">
            At the heart of Vtail Energy is a leadership philosophy built
            around technical understanding, commercial awareness and
            responsible project execution.
          </p>

          <div className="mt-9 border-l-2 border-[#b6d49b] pl-6">
            <h3 className="text-2xl font-semibold text-[#172c31]">
              James Alexander Masterson
            </h3>

            <span className="mt-2 block text-[10px] font-bold uppercase tracking-[.15em] text-[#78977b]">
              Founder & Managing Director
            </span>
          </div>

          <p className="mt-7 text-sm leading-8 text-[#657575]">
            James began his professional career as a mechanical engineer,
            developing a foundation in engineering principles and industrial
            systems before progressing into senior technical and advisory
            responsibilities within Germany's energy industry.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#657575]">
            His professional background includes experience associated with
            Bayernwerk under the VIAG group and the organisation's transition
            into E.ON, providing exposure to the changing structure of
            Europe's energy sector.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#657575]">
            In 2023, he established Vtail Energy with the ambition of bringing
            together engineering knowledge, commercial judgement and a
            practical approach to renewable energy infrastructure and
            contracting.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DeliveryApproach() {
  return (
    <section className="bg-[#0b1922] py-24 text-white md:py-32">
      <div className="container-site mx-auto px-6 md:px-12">
        <PageHeading
          label="07 / Our Approach"
          light
          title={
            <>
              A structured approach
              <br />
              to <i className="text-[#b6d49b]">project delivery.</i>
            </>
          }
          description="We believe successful infrastructure delivery depends on clearly defined responsibilities, technical coordination and a consistent focus on execution."
        />

        <div className="relative mt-16">
          <div className="absolute left-5 top-4 hidden h-[calc(100%-35px)] w-px bg-white/20 lg:block" />

          <motion.div
            {...reveal}
            variants={stagger}
            className="grid gap-9 lg:grid-cols-5"
          >
            {process.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item.number}
                className="relative border-t border-white/20 pt-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#b6d49b] bg-[#0b1922] text-xs font-bold text-[#b6d49b]">
                  {item.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyVtail() {
  const reasons = [
    "Engineering-led thinking and technical understanding",
    "Integrated procurement and contracting capabilities",
    "Structured project coordination and execution",
    "Collaborative relationships with specialist partners",
    "Clear commercial and contractual responsibilities",
    "Commitment to sustainable energy infrastructure",
  ];

  return (
    <section className="bg-[#f3f5f0] py-24 md:py-32">
      <div className="container-site mx-auto grid gap-14 px-6 md:grid-cols-2 md:items-center md:gap-24 md:px-12">
        <motion.div {...reveal} variants={fadeUp}>
          <SectionLabel>08 / Why Vtail Energy</SectionLabel>

          <h2 className="font-serif text-5xl leading-tight text-[#14262d] md:text-6xl">
            More than a service provider.
            <i className="text-[#78977b]"> A project partner.</i>
          </h2>

          <p className="mt-7 text-sm leading-8 text-[#657575]">
            Energy infrastructure projects involve complex technical,
            commercial and logistical requirements. We recognise the
            importance of working with the right people, establishing clear
            responsibilities and maintaining focus throughout the delivery
            process.
          </p>

          <p className="mt-5 text-sm leading-8 text-[#657575]">
            Our objective is to be a dependable partner that understands
            project requirements and contributes practical solutions at every
            stage of the engagement.
          </p>
        </motion.div>

        <motion.div
          {...reveal}
          variants={stagger}
          className="space-y-5"
        >
          {reasons.map((reason, index) => (
            <motion.div
              variants={fadeUp}
              key={reason}
              className="flex items-start gap-4 border-b border-[#d9e2d8] pb-5"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#78977b]" />
              <span className="text-sm font-semibold leading-7 text-[#31484a]">
                {reason}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-[#b6d49b] py-24 md:py-32">
      <div className="absolute -right-32 -top-40 h-[500px] w-[500px] rounded-full border border-[#0b1922]/10" />
      <div className="absolute -right-12 -top-20 h-[350px] w-[350px] rounded-full border border-[#0b1922]/10" />

      <div className="container-site relative z-10 mx-auto px-6 md:px-12">
        <motion.div {...reveal} variants={fadeUp}>
          <span className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#34513d]">
            Let's move forward together
          </span>

          <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[1.1] text-[#10211c] md:text-7xl">
            Building the infrastructure of tomorrow starts with a conversation.
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-8 text-[#34513d]">
            Whether you are developing an energy project, seeking a
            procurement partner or exploring an infrastructure opportunity,
            we welcome the opportunity to understand your requirements.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/#contact"
              className="inline-flex items-center gap-4 bg-[#0b1922] px-8 py-5 text-[10px] font-extrabold uppercase tracking-widest text-white transition hover:bg-[#29463c]"
            >
              Start a Conversation <ArrowUpRight size={16} />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-3 border border-[#0b1922]/40 px-8 py-5 text-[10px] font-extrabold uppercase tracking-widest text-[#0b1922] transition hover:bg-white/40"
            >
              Back to Homepage <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutFooter() {
  return (
    <footer className="bg-[#08151d] py-12 text-white">
      <div className="container-site mx-auto flex flex-col justify-between gap-7 px-6 md:flex-row md:items-center md:px-12">
        <div>
          <Link to="/" className="text-xl font-extrabold tracking-[.12em]">
            VTAIL <span className="font-light">ENERGY</span>
          </Link>
          <p className="mt-3 text-xs text-white/50">
            Engineering Energy. Delivering Infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-xs text-white/65">
          <Link to="/" className="transition hover:text-[#b6d49b]">Home</Link>
          <Link to="/about" className="transition hover:text-[#b6d49b]">About Us</Link>
          <Link to="/#contact" className="transition hover:text-[#b6d49b]">Contact</Link>
        </div>

        <p className="text-[10px] text-white/40">
          © {new Date().getFullYear()} Vtail Energy.
        </p>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      <AboutHero />
      <Introduction />
      <Story />
      <MissionVision />
      <CoreValues />
      <Expertise />
      <Leadership />
      <DeliveryApproach />
      <WhyVtail />
      <AboutCTA />
      <AboutFooter />
    </main>
  );
}
