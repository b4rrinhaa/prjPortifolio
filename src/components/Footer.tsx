import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/b4rrinhaa", // substitua pelo seu link real
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/seu-usuario", // substitua pelo seu link real
    },
  ];

  return (
    <footer className="bg-[#11114e] py-16 px-4 text-center text-muted-foreground relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-lime-300">
            Vamos Conversar?
          </h3>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Estou sempre aberto a novas oportunidades e parcerias interessantes.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-green-500 rounded-full hover:bg-green-800/100 transition-all"
            asChild
          >
            <a href="mailto:seuemail@exemplo.com">
              <Mail className="mr-2 h-4 w-4" />
              Entrar em Contato
            </a>
          </Button>
        </div>

        <div className="flex gap-6">
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <div
              key={i}
              className="relative group w-12 h-12 flex items-center justify-center rounded-full overflow-hidden cursor-pointer transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-green-400 via-emerald-400 to-lime-300 blur-sm scale-110" />
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors"
              >
                <Icon className="w-6 h-6" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .footer-glow::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle at center, rgba(34,197,94,0.1), transparent 70%);
          animation: slow-pulse 8s infinite alternate;
          z-index: 0;
        }

        @keyframes slow-pulse {
          0% { transform: scale(1); opacity: 0.2; }
          100% { transform: scale(1.1); opacity: 0.4; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
