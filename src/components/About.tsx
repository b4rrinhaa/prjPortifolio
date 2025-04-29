import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Palette, Terminal, Coffee, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Code2, label: "Desenvolvimento Web" },
  { icon: Figma, label: "Design Responsivo" },
  { icon: Terminal, label: "Clean Code" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Cpu, label: "Performance" },
  { icon: Coffee, label: "Resolução de problemas" },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-[Orbitron] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400">
          Sobre mim
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center text-left">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor apaixonado por criar soluções digitais que realmente impactam a vida das pessoas.
              Tenho experiência em desenvolvimento web, onde me dedico a construir interfaces bem pensadas, funcionais e com atenção aos detalhes.
              Estou sempre explorando novas ferramentas, testando abordagens diferentes e buscando evoluir como profissional e como pessoa.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha jornada na programação começou em 2024, quando percebi o quanto era fascinante entender o que acontece por trás das telas.
              Logo na primeira aula usando Portugol, já me peguei completamente envolvido.
              Desde então, venho me dedicando a projetos desafiadores que têm me ajudado a evoluir, tanto tecnicamente quanto na forma de pensar e resolver problemas.
            </p>
            <Button variant="outline" size="lg" className="mt-4 border-2 border-green-500 rounded-full hover:bg-green-800/100 transition-all">
              Saiba Mais
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-6 rounded-2xl border border-border/40 bg-card overflow-hidden cursor-pointer transition-all"
              >
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 blur-sm scale-105 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-start">
                  <skill.icon className="w-8 h-8 mb-3 text-primary transition-all group-hover:scale-110" />
                  <h3 className="font-medium text-base text-foreground">{skill.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
