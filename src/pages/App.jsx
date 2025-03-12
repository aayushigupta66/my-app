
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHub, LinkedIn, Send } from "@mui/icons-material";
import resume from '../assets/Aayushi Gupta Resume.pdf';


export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full">
    <div className="mx-auto max-w-screen-xl lg:px-12">

    <div className="text-gray-100 min-h-screen grid lg:grid-cols-5  gap-8">
      {/* Left Sticky Section - Hidden on Smaller Screens */}
      <aside className="hidden lg:flex col-span-2 h-screen sticky py-24 flex flex-col text-left h-screen sticky top-0 justify-between">
        <div>
        <h1 className="text-5xl font-bold text-white">Aayushi Gupta</h1>
        <h2 className="mt-3 text-xl font-bold text-gray-300">Fullstack Developer</h2>
        <p className="text-gray-400 mt-4 max-w-xs">
         I design and develop seamless digital experiences for web and mobile.
        </p>
        <nav className="mt-8 hidden lg:block" aria-label="In-page jump links">
          <ul className="space-y-4 text-sm font-bold text-gray-500 pt-10">
            {[
              { id: "about", label: "ABOUT" },
              { id: "experience", label: "EXPERIENCE" },
              { id: "projects", label: "PROJECTS" },
              // { id: "contact", label: "CONTACT" },
            ].map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`group flex items-center hover:text-white transition ${
                    activeSection === section.id ? "text-teal-400" : ""
                  }`}
                >
                  <span className="mr-4 h-px w-8 bg-gray-600 transition-all group-hover:w-16 group-hover:bg-gray-200"></span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 mt-6"
        >
          <a href="https://github.com/aayushigupta66/" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
            <GitHub fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/in/aayushigupta66/" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
            <LinkedIn fontSize="large" />
          </a>
          <a href="mailto:aayushigupta66@gmail.com" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
            <Send fontSize="large" />
          </a>
        </motion.div>
      </aside>

      {/* Right Scrollable Content - 50% Width */}
      <main className="w-full lg:col-span-3 mx-auto px-6 lg:py-24 py-12 space-y-24 lg:text-left gap-8">
      
      {/* Mobile Version of Aside Section */}
      <section className="block lg:hidden ">
              <h1 className="text-4xl font-bold text-white">Aayushi Gupta</h1>
              <h2 className="mt-3 text-lg font-bold text-gray-300">Fullstack Developer</h2>
              <p className="text-gray-400 mt-4 max-w-xs ">
                I design and develop seamless digital experiences for web and mobile.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 mt-6 "
              >
                <a href="https://github.com/aayushigupta66/" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
                  <GitHub fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/aayushigupta66/" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
                  <LinkedIn fontSize="large" />
                </a>
                <a href="mailto:aayushigupta66@gmail.com" rel="noopener noreferrer" target="_blank" className="text-gray-400 hover:text-white">
                  <Send fontSize="large" />
                </a>
              </motion.div>
            </section>

        <section id="about" className="lg:max-w-2xl">
          <h2 className="text-3xl font-bold text-white">About Me</h2>
          <p className="text-gray-400 mt-4">
          I'm a developer passionate about crafting intuitive user experiences, bringing designs to life with a deep appreciation for graphic design and software development. While I’m not a designer, I love contributing ideas and refining interfaces to create seamless, engaging products.
</p>
          <p className="text-gray-400 mt-4">
          Currently, I'm a Full-Stack Developer at <strong><a href="https://www.chime.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Chime</a></strong>, where I’ve worked across multiple growth teams to build and enhance features for the Chime mobile app. My favorite projects involve redesigning experiences—not just improving usability, but also building scalable, robust architectures that support future iterations.
</p>
          <p className="text-gray-400 mt-4">
          I’ve worked across various tech stacks—from frontend web development and design systems at <strong><a href="https://www.groupon.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Groupon</a></strong> to mobile and backend development at Chime. That said, I’m always excited to learn and grow my technical skill set, as the field is constantly evolving.          </p>
          <p className="text-gray-400 mt-4">
          Outside of work, you can find me playing pickleball, getting ultra-competitive over Ticket to Ride with my family, dancing <strong><a href="https://www.youtube.com/watch?v=i_YafcgiI9U" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">bhangra</a></strong>, aggressively whisking for the perfect matcha, or getting lost in a romantasy novel  <i>(currently obsessed with the <strong><a href="https://rebeccayarros.com/empyrean" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Empyrean series</a></strong> and just starting ACOTAR)</i>.


          </p>
         
        </section>
        
        <section id="experience" className="lg:max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <h3 className="text-lg font-bold text-white pt-4">🚧 Work in Progress 🚧</h3>
          <p className="text-gray-400 mt-4">
          This section is still a WIP—check back later for updates! In the meantime, feel free to take a look at my  
          <strong><a href={resume} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white"> resume </a></strong> or  
  <strong><a href="https://www.linkedin.com/in/aayushigupta66/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white"> LinkedIn </a></strong> for more details. 😊  
          </p>
          
        </section>
        
        <section id="projects" className="lg:max-w-2xl">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          
          <h3 className="text-lg font-bold text-white pt-4">🚧 Work in Progress 🚧</h3>
          <p className="text-gray-400 mt-4">
          This section is still a WIP—check back later for updates! In the meantime, feel free to take a look at my  
          <strong><a href={resume} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white"> resume </a></strong> or  
          <strong><a href="https://www.linkedin.com/in/aayushigupta66/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white"> LinkedIn </a></strong> for more details. 😊  
          </p>
         
        </section>
        
        {/* <section id="contact" className="lg:max-w-2xl ">
          <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur turpis at dolor viverra, sit amet hendrerit metus tincidunt.
          </p>
         
        </section> */}

          <p className="text-gray-400 mt-4 text-sm" >
          Taken design inspiration from <strong><a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Brittany Chiang</a></strong> and coded in <strong><a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Visual Studio Code</a></strong>. Built with <strong><a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Vite</a></strong> and <strong><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Tailwind CSS</a></strong>, deployed with <strong><a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">GitHub Pages</a></strong>. All text is set in the <strong><a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 text-white">Montserrat</a></strong> typeface.
          </p>
      </main>
    </div>
    </div>
    </div>
  );
}