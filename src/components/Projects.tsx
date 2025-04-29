import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Projetos/Funcionários",
    description: "Relaciona os funcionarios com seus devidos projetos",
    tech: ["SpringBoot", "JavaScript", "MySql"],
    github: "https://github.com/b4rrinhaa/prjSondagem",
    demo: "#",
    image: "https://eduvem.com/wp-content/uploads/2022/07/image-8-1024x682.png",
  },
  {
    title: "Cadastro de alunos e cursos",
    description: "Cadastra os alunos em seus devidos cursos (ManyToOne)",
    tech: ["SpringBoot", "MySQL", "JavaScript"],
    github: "https://github.com/b4rrinhaa/prjEscola",
    demo: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvh-ARIZcnv0M8StA48NK8kXf_YJm8aQ7o_Q&s",
  },
  {
    title: "Funcionarios/Departamentos",
    description: "Relaciona papéis do funcionario de acordo com seu departamento.",
    tech: ["SpringBoot"],
    github: "https://github.com/b4rrinhaa/prjEmpresa",
    demo: "#",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3P3XjtRJ5BNHXT7CqwOfEREAeoe2NNGmHw&s",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black py-20 px-4 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-[Orbitron] text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-300">
          Meus Projetos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl border border-border/50 overflow-hidden bg-card hover:border-primary/50 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 z-0 group-hover:opacity-100 opacity-0 transition-all duration-300 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 blur-md opacity-20 scale-110" />
              </div>

              <div className="relative z-10 p-6 space-y-4">
                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <Button
                    size="sm"
                    className="bg-black hover:bg-zinc-900 transition-all rounded-full text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
