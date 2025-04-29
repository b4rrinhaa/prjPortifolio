import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Palette, Terminal, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Code2, label: "Web Development" },
  { icon: Globe, label: "Design Responsivo" },
  { icon: Terminal, label: "Clean Code" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Cpu, label: "Performance" },
  { icon: Coffee, label: "Problem Solving" },
];

const Abouto = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden bg-gray-900"
    >
      {/* Código animado lateral direita */}
      <div className="absolute left-0 top-[10%] w-full z-0">
        <pre className="animate-code-right text-green-500 text-2xl font-mono opacity-70">
{`const sobre = () => {
  return 'quem sou eu, afinal???';
};`}
        </pre>
      </div>

      {/* Código animado lateral esquerda */}
      <div className="absolute left-0 bottom-[10%] w-full z-0">
        <pre className="animate-code-left text-green-500 text-2xl font-mono opacity-70">
{`const sobre = () => {
  return 'sou um desenvolvedor e muito mais';
};`}
        </pre>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full mx-auto relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 text-left py-12"
      >
        {/* Imagem centralizada e maior */}
        <img
          src="public\WhatsApp Image 2025-04-29 at 12.39.20.jpeg"
          alt="Foto de Gustavo Barrinha"
          className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-4 border-green-400 shadow-2xl"
        />

        {/* Texto */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-6xl font-[Orbitron] bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400">
            Quem Sou Eu
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Meu nome é Gustavo Machado Barrinha, mas pode me chamar só de Barrinha. Sou apaixonado por tecnologia e programação, mas, sinceramente, nada me empolga mais do que uma boa pelada com os amigos. Academia é meu segundo lar, onde recarrego as energias e cuido do corpo. E se tem uma coisa que faz meu coração bater mais forte, é meu time do coração, o Corinthians. VAI CORINTHIANS
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Acredito muito que cada ação no meu dia influencia diretamente no meu futuro, por isso evito perder tempo com coisas fúteis ou cair na procrastinação. Gosto de estar sempre em movimento, buscando ser um pouco melhor do que ontem.
          </p>
        </div>
      </motion.div>

      <style>{`
        @keyframes move-right {
          0% { transform: translateX(-100%); opacity: 0.7; }
          100% { transform: translateX(100%); opacity: 0.7; }
        }
        @keyframes move-left {
          0% { transform: translateX(100%); opacity: 0.7; }
          100% { transform: translateX(-100%); opacity: 0.7; }
        }
        .animate-code-right {
          animation: move-right 15s linear infinite;
          white-space: nowrap;
          pointer-events: none;
        }
        .animate-code-left {
          animation: move-left 15s linear infinite;
          white-space: nowrap;
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Abouto;
