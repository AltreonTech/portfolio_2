export default function StatsSection() {
  return (
    <section id="stats" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold leading-1.5">
            Altreon in numbers
          </h2>
          <p>
            Empowering businesses with scalable software, custom solutions, and
            modern development experiences.
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
          <div className="space-y-4">
            <div className="text-5xl font-bold">30+</div>
            <p className="text-md text-white/90 font-semibold">
              Businesses Served
            </p>
            <p>
              Powering digital transformation across multiple industries and use
              cases.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">98%</div>
            <p className="text-md text-white/90 font-semibold">
              Client Satisfactions
            </p>
            <p>
              Long-term partnerships with startups, SMEs, and enterprise teams
              worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-5xl font-bold">5+</div>
            <p className="text-md text-white/90 font-semibold">
              Years of Expertise
            </p>
            <p>
              Engineering secure, future-ready software systems with modern
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
