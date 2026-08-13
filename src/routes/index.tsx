import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DevBackground } from "@/components/portfolio/DevBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Impact } from "@/components/portfolio/Impact";
import { TechStack } from "@/components/portfolio/TechStack";
import { Skills } from "@/components/portfolio/Skills";
import { ResumeSection } from "@/components/portfolio/ResumeSection";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const TITLE = "Vishal Singla | Java Spring Boot Backend Developer";
const DESCRIPTION =
  "Java Backend Developer specializing in Spring Boot, REST APIs, Spring Security, Hibernate, MySQL, and scalable backend systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      {
        name: "keywords",
        content:
          "Java Backend Developer, Spring Boot, Spring Security, Hibernate, Spring Data JPA, REST APIs, MySQL, Vishal Singla",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Vishal Singla",
          jobTitle: "Java Backend Developer",
          email: "mailto:vishalsingla.it@gmail.com",
          telephone: "+91 8307218403",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Haryana",
            addressCountry: "India",
          },
          worksFor: { "@type": "Organization", name: "Incedo" },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "J.C. Bose University of Science and Technology, YMCA Faridabad",
          },
          knowsAbout: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Hibernate",
            "Spring Data JPA",
            "REST APIs",
            "MySQL",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-x-hidden"
    >
      <DevBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Impact />
      <Skills />
      <TechStack />
      <ResumeSection />
      <Contact />
      <Footer />
    </motion.main>
  );
}
