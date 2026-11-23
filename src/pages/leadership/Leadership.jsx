import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Compass,
  ShieldCheck,
  Lightbulb,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";

const leadershipValues = [
  {
    icon: Target,
    number: "01",
    title: "Strategic Vision",
    description:
      "A clear understanding of where the energy industry is heading and how today's decisions can create long-term value.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Integrity & Accountability",
    description:
      "Building trust through transparency, responsible decision-making and accountability in every engagement.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Innovation",
    description:
      "Embracing new ideas, technologies and approaches to address the evolving challenges of energy infrastructure.",
  },
  {
    icon: Compass,
    number: "04",
    title: "Purposeful Leadership",
    description:
      "Bringing people, expertise and opportunities together around a shared commitment to meaningful progress.",
  },
];

export default function Leadership() {
  return (
    <main className="bg-[#f5f5f0] text-[#0b1922] overflow-hidden">
      {/* HERO */}
      <section className="relative bg-[#0b1922] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-40 w-[550px] h-[550px] rounded-full border border-[#b6d49b]" />
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
              Our Leadership
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Leadership with
              <br />
              <span className="text-[#b6d49b]">purpose and vision.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Strong leadership begins with a clear vision, responsible
              decisions and a commitment to building energy infrastructure that
              creates lasting value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEADERSHIP INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Guiding Our Direction
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Building the future through thoughtful leadership.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#53616a] text-lg leading-relaxed mb-6">
              At Vtail Energy, leadership is about more than directing projects.
              It is about establishing a clear direction, identifying
              opportunities and creating an environment where expertise and
              collaboration can deliver meaningful results.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Our leadership philosophy is grounded in strategic thinking,
              integrity and a long-term perspective on the energy and
              infrastructure sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* EXECUTIVE PROFILE */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Executive Leadership
            </p>

            <h2 className="font-serif text-4xl md:text-5xl">
              The people guiding our vision.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Profile image placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative bg-[#0b1922] min-h-[420px] md:min-h-[540px] flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute w-[350px] h-[350px] border border-[#b6d49b] rounded-full -right-20 -top-20" />
                <div className="absolute w-[250px] h-[250px] border border-[#b6d49b] rounded-full right-10 top-10" />
              </div>

              <div className="relative text-center px-8">
                <div className="w-24 h-24 mx-auto rounded-full border border-[#b6d49b] flex items-center justify-center mb-6">
                  <BriefcaseBusiness
                    size={36}
                    className="text-[#b6d49b]"
                    strokeWidth={1}
                  />
                </div>

                <p className="text-[#b6d49b] uppercase tracking-[0.25em] text-xs">
                  Executive Leadership
                </p>

                <p className="text-white/50 text-sm mt-3">
                  Leadership portrait
                </p>
              </div>
            </motion.div>

            {/* Executive details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
                Founder & Leadership
              </p>

              <h3 className="font-serif text-4xl md:text-5xl mb-3">
                James Alexander Masterson
              </h3>

              <p className="text-[#71866b] text-sm uppercase tracking-wider mb-8">
                Founder & Executive Leadership
              </p>

              <div className="space-y-5 text-[#53616a] leading-relaxed">
                <p>
                  James Alexander Masterson leads Vtail Energy's strategic
                  direction, bringing a focus on energy infrastructure,
                  opportunity development and long-term business growth.
                </p>

                <p>
                  His leadership approach emphasizes strategic vision,
                  disciplined execution and the importance of building
                  partnerships that support sustainable progress across the
                  energy sector.
                </p>

                <p>
                  Through Vtail Energy, the focus is on identifying
                  opportunities, connecting expertise and advancing
                  infrastructure initiatives that respond to evolving energy
                  needs.
                </p>
              </div>

              <div className="border-t border-[#e5e8e1] mt-10 pt-8 grid grid-cols-2 gap-6">
                <div>
                  <Building2 className="text-[#71866b] mb-3" size={24} />
                  <p className="font-serif text-xl">Strategic</p>
                  <p className="text-sm text-[#65727a] mt-1">
                    Business direction
                  </p>
                </div>

                <div>
                  <Target className="text-[#71866b] mb-3" size={24} />
                  <p className="font-serif text-xl">Purpose-driven</p>
                  <p className="text-sm text-[#65727a] mt-1">
                    Leadership philosophy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PHILOSOPHY */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Philosophy
            </p>

            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              The principles behind our leadership.
            </h2>

            <p className="text-[#53616a] leading-relaxed">
              Our approach is shaped by principles that guide how we evaluate
              opportunities, work with partners and approach the future of
              energy infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-[#e5e8e1] p-8"
                >
                  <div className="flex justify-between items-center mb-10">
                    <span className="text-sm text-[#71866b]">
                      {value.number}
                    </span>

                    <Icon
                      size={28}
                      strokeWidth={1.3}
                      className="text-[#71866b]"
                    />
                  </div>

                  <h3 className="font-serif text-2xl mb-5">{value.title}</h3>

                  <p className="text-[#65727a] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-[#0b1922] text-white py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#b6d49b] uppercase tracking-[0.25em] text-xs mb-8">
            Looking Ahead
          </p>

          <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
            Leading today.
            <br />
            Building for generations.
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            We believe the future of energy infrastructure will be shaped by the
            decisions, partnerships and commitments made today.
          </p>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-3 bg-[#b6d49b] text-[#0b1922] px-8 py-4 hover:bg-white transition"
          >
            Connect With Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
