import Card3dDemo from "./project-card";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold leading-1.5">Proof of Work</h2>
          <p>
            Here are the solutions we’ve shipped that helped startups launch
            faster and scale smarter.
          </p>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mx-auto max-w-6xl px-6 mt-16">
        <Card3dDemo
          title="School Management"
          description="A web-based school management platform designed to streamline academic administration, attendance, fee tracking, and parent-teacher communication — enabling educational institutions to run more efficiently."
          image="/images/25293.jpg"
        />
        <Card3dDemo
          title="Ecommerce"
          description="A fully-customizable eCommerce application that supports product catalog, user-friendly shopping cart, secure payments, and order management — helping businesses deliver scalable online storefronts with smooth UX and transactional reliability."
          image="/images/29974.jpg"
        />
        <Card3dDemo
          title="Event Management"
          description="An event management system built for registration, scheduling, ticketing, and attendee engagement — featuring real-time dashboards, custom event pages, and notifications to help organizers run seamless in-person or virtual events."
          image="/images/19198080.jpg"
        />
      </div>
    </section>
  );
}
