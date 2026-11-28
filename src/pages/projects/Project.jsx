import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  Zap,
  BatteryCharging,
  Factory,
  Network,
  Leaf,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../assets/data/project";

const categories = [
  "All Projects",
  "Renewable Energy",
  "Power Infrastructure",
  "Energy Storage",
  "Industrial Energy",
  "Infrastructure Advisory",
  "Energy Transition",
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="bg-[#f5f5f0] text-[#0b1922]">
      {/* HERO */}
      <section className="relative bg-[#0b1922] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-24 -top-40 w-[550px] h-[550px] border border-[#b6d49b] rounded-full" />
          <div className="absolute right-20 top-20 w-[350px] h-[350px] border border-[#b6d49b] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[#b6d49b] uppercase tracking-[0.3em] text-xs mb-8">
              Our Projects
            </p>

            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
              Ideas into action.
              <br />
              <span className="text-[#b6d49b]">Progress into impact.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore the energy and infrastructure opportunities that reflect
              our vision for a more resilient and sustainable energy future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Project Portfolio
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Creating value through energy and infrastructure.
            </h2>
          </div>

          <div>
            <p className="text-[#53616a] text-lg leading-relaxed mb-6">
              Every energy opportunity presents its own challenges and
              possibilities. We believe successful development begins with
              thoughtful planning and a clear understanding of long-term
              objectives.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Our project portfolio is intended to demonstrate the different
              sectors and infrastructure opportunities that align with Vtail
              Energy's strategic focus.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
                Selected Projects
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                Explore our work.
              </h2>
            </div>

            <p className="text-sm text-[#71866b] max-w-sm">
              Browse project themes across our energy and infrastructure focus
              areas.
            </p>
          </div>

          {/* FILTERS */}
          <div className="flex gap-3 overflow-x-auto pb-5 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 px-5 py-3 text-sm transition ${
                  activeCategory === category
                    ? "bg-[#0b1922] text-white"
                    : "bg-[#f5f5f0] text-[#53616a] hover:bg-[#b6d49b]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.sector === "solar" ? Sun : BatteryCharging;

              return (
                <motion.article
                  layout
                  key={project.number}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="group border border-[#e5e8e1] bg-[#f5f5f0]"
                >
                  {/* PROJECT IMAGE */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-[#0b1922]/20 group-hover:bg-[#0b1922]/10 transition" />

                    <span className="absolute top-5 left-5 bg-[#0b1922] text-[#b6d49b] text-xs px-4 py-2">
                      {project.category}
                    </span>

                    <span className="absolute bottom-5 right-5 bg-white p-3 text-[#0b1922]">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="p-7">
                    {/* PROJECT HEADING */}
                    <div className="flex justify-between items-center mb-5 gap-3">
                      <span className="text-xs text-[#71866b]">
                        PROJECT {project.number}
                      </span>

                      <span className="text-xs text-[#71866b]">
                        {project.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl mb-4">
                      {project.title}
                    </h3>

                    <p className="text-[#65727a] text-sm leading-relaxed mb-7">
                      {project.description}
                    </p>

                    {/* PROJECT INFORMATION */}
                    <div className="border-y border-[#e0e5dc] py-6 mb-7">
                      <h4 className="text-xs uppercase tracking-widest text-[#71866b] mb-5">
                        Project Information
                      </h4>

                      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Sector
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.sectorDescription}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Contract Value
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.value}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Contract Award
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.award}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Scheduled Completion
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.completion}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Contract Type
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.contractType}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Status
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.status}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Principal Contractor
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.principal}
                          </p>
                        </div>

                        <div>
                          <span className="block text-xs text-[#71866b] mb-2">
                            Specialist Subcontractor
                          </span>
                          <p className="text-sm font-medium text-[#0b1922]">
                            {project.subcontractor}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* PROJECT OVERVIEW */}
                    <div className="mb-7">
                      <h4 className="font-serif text-xl mb-4">
                        Project Overview
                      </h4>

                      <p className="text-sm text-[#65727a] leading-7">
                        {project.projectOverview}
                      </p>
                    </div>

                    {/* SCOPE OF SERVICES */}
                    <div className="border-t border-[#e0e5dc] pt-6 mb-7">
                      <h4 className="font-serif text-xl mb-4">
                        Scope of Services
                      </h4>

                      <p className="text-sm text-[#65727a] leading-7 mb-5">
                        {project.scope}
                      </p>

                      <ul className="space-y-3">
                        {project.responsibilities.map((item, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3 text-sm text-[#65727a] leading-relaxed"
                          >
                            <span className="text-[#8eae70] font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* PROJECT EXECUTION */}
                    <div className="border-t border-[#e0e5dc] pt-6 mb-7">
                      <h4 className="font-serif text-xl mb-4">
                        Project Execution
                      </h4>

                      <p className="text-sm text-[#65727a] leading-7">
                        {project.execution}
                      </p>
                    </div>

                    {/* CURRENT PROJECT STAGE */}
                    <div className="border-t border-[#e0e5dc] pt-6 mb-7">
                      <h4 className="font-serif text-xl mb-4">
                        Current Project Stage
                      </h4>

                      <p className="text-sm text-[#65727a] leading-7">
                        {project.currentStage}
                      </p>
                    </div>

                    {/* PROJECT TAGS */}
                    <div className="border-t border-[#e0e5dc] pt-6">
                      <h4 className="text-xs uppercase tracking-widest text-[#71866b] mb-4">
                        Project Focus
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs border border-[#dce1d7] px-3 py-2 text-[#65727a]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {filteredProjects.length === 0 && (
            <p className="text-center text-[#65727a] py-16">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#71866b] uppercase tracking-[0.25em] text-xs mb-5">
              Our Philosophy
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Every project starts with a clear purpose.
            </h2>

            <p className="text-[#53616a] leading-relaxed mb-6">
              We approach energy infrastructure with a long-term perspective,
              recognizing that the decisions made today shape the systems of
              tomorrow.
            </p>

            <p className="text-[#53616a] leading-relaxed">
              Our focus remains on responsible development, practical thinking
              and opportunities that can deliver lasting value.
            </p>
          </div>

          <div className="bg-[#0b1922] p-10 md:p-14 text-white">
            <span className="text-[#b6d49b] text-xs uppercase tracking-[0.25em]">
              Our Commitment
            </span>

            <h3 className="font-serif text-3xl md:text-4xl leading-tight mt-8 mb-8">
              Building infrastructure for a more resilient energy future.
            </h3>

            <div className="border-t border-white/20 pt-7">
              <p className="text-white/60 text-sm leading-relaxed">
                We believe progress is built through collaboration, sound
                decisions and a commitment to meaningful outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1922] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          <div className="max-w-2xl">
            <p className="text-[#b6d49b] uppercase tracking-[0.25em] text-xs mb-5">
              Start a Conversation
            </p>

            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
              Have a project in mind?
            </h2>

            <p className="text-white/60 leading-relaxed">
              Let's explore how we can work together to advance your next energy
              or infrastructure opportunity.
            </p>
          </div>

          <Link
            to="/#contact"
            className="inline-flex items-center gap-4 bg-[#b6d49b] text-[#0b1922] px-8 py-5 hover:bg-white transition shrink-0"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
