import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return React.createElement(
    'section',
    {
      className:
        'min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden bg-black',},
    React.createElement(
      'div',
      { className: 'absolute left-0 top-[10%] w-full z-0' },
      React.createElement(
        'pre',
        {
          className: 'animate-code-right text-green-500 text-2xl font-mono opacity-70',
        },
        `const hero = () => {
  return 'Gustavo Machado Barrinha';
};`
      )
    ),

    React.createElement(
      'div',
      { className: 'absolute left-0 bottom-[10%] w-full z-0' },
      React.createElement(
        'pre',
        {
          className: 'animate-code-left text-green-500 text-2xl font-mono opacity-70',
        },
        `const hero = () => {
  return 'bem vindos ao meu portifólio';
};`
      )
    ),

React.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        className: 'max-w-3xl mx-auto relative z-10',
      },
      React.createElement(
        'h1',
        {
           className:
          'text-4xl md:text-6xl font-[Orbitron] mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-emerald-500 to-lime-400',
        },
        'Gustavo /'
        ),       React.createElement(
         'p',
      {
           className:
             'text-4xl md:text-1xl font-[Orbitron] mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-500 to-gray-400',
       } ,
      'Desenvolvedor de software, Designer Gráfico'
         ),
      React.createElement(
        'p',
        { className: 'text-xl md:text-2xl text-muted-foreground mb-8' },
        'e empreendedor nas horas vagas:)'
      ),

React.createElement(
        'div',
        {
          className: 'flex flex-col sm:flex-row gap-4 justify-center items-center mb-12',
        },
     React.createElement(
          Button,
          {
            variant: 'outline',
            size: 'lg',
            className:
              'group flex items-center gap-2 border-2 border-green-500 rounded-full px-6 py-3 hover:bg-green-800/100 transition-all',
          },
          React.createElement('img', {
            src: '/cur.ico',
            alt: 'Ícone',
            className: 'w-8 h-8',
          }),
          React.createElement('span', { className: 'text-black-700' }, 'Currículo')
        ),
     React.createElement(
          Button,
          {
            variant: 'outline',
            size: 'lg',
            className:
              'group flex items-center gap-2 border-2 border-green-500 rounded-full px-6 py-3 hover:bg-green-800/100 transition-all',
            asChild: true,
          },
          React.createElement(
            'a',
            { href: '#projects' },
            React.createElement('img', {
              src: '/prj.ico',
              alt: 'Ícone',
              className: 'w-8 h-8',
            }),
            React.createElement('span', { className: 'text-black-700' }, 'Projetos')
          )
        )
      ),

  React.createElement(
        'div',
        { className: 'flex justify-center gap-6 text-muted-foregroun' },
        React.createElement(
          motion.a,
          {
            whileHover: { scale: 1.1 },
            href: 'https://github.com/b4rrinhaa',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'transition-all transform hover:scale-110 hover:text-green-400 p-3 rounded-full shadow-lg bg-muted hover:bg-green-500/10',
          },
          React.createElement(Github, { className: 'w-6 h-6' })
        ),
        React.createElement(
          motion.a,
          {
            whileHover: { scale: 1.1 },
            href: '#',
            target: '_blank',
            rel: 'noopener noreferrer',
            className:
              'transition-all transform hover:scale-110 hover:text-green-400 p-3 rounded-full shadow-lg bg-muted hover:bg-green-500/10',
          },
          React.createElement(Linkedin, { className: 'w-6 h-6' })
        ),
        React.createElement(
          motion.a,
          {
            whileHover: { scale: 1.1 },
            href: 'mailto:gustavobarrinha.dev2024@gmail.com',
            className:
              'transition-all transform hover:scale-110 hover:text-green-400 p-3 rounded-full shadow-lg bg-muted hover:bg-green-500/10',
          },
          React.createElement(Mail, { className: 'w-6 h-6' })
        )
      )
    ),
 React.createElement(
      'style',
      null,
      `@keyframes move-right {
  0% { transform: translateX(-100%); opacity: 0.7; }
  100% { transform: translateX(100%); opacity: 0.7; }
}
@keyframes move-left {
  0% { transform: translateX(100%); opacity: 0.7; }
  100% { transform: translateX(-100%); opacity: 0.7; }
}
.animate-code-right {
  position: right;
  animation: move-right 15s linear infinite;
  white-space: nowrap;
  pointer-events: none;
}
.animate-code-left {
  position: left;
  animation: move-left 15s linear infinite;
  white-space: nowrap;
  pointer-events: none;
}`
    )
  );
};
export default Hero;
