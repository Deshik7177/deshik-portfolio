
import Link from 'next/link';

export function AboutSection() {
  return (
    <section id="about" className="pt-12 pb-16 bg-background" style={{ scrollMarginTop: '5rem' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="p-8 rounded-xl glass-card text-lg text-muted-foreground leading-relaxed">
            <p className="mb-2">
              Hey, I’m Paila Dhana Deshik — just a kid who walked into a school lab back in 7th grade and never looked back.
            </p>
            <p className="mb-2">
              My tech journey kicked off in 2018 when my school introduced something called the Atal Tinkering Lab (ATL) — a space filled with wires, circuits, sensors, and ideas waiting to come alive. That’s where I first touched electronics and got a glimpse of what it means to build things that move, blink, and respond.
            </p>
            <p className="mb-2">
              By 11th grade, I got officially introduced to Python through my CS subject — and that’s where it all clicked. From writing basic scripts to exploring SQL databases, I found myself deep in the rabbit hole. I didn’t just learn coding — I got hooked on solving real problems with logic and curiosity.
            </p>
            <p className="mb-2">
              Fast forward to college — now I’m diving headfirst into the world of Web Development, AI, Machine Learning, and NLP, experimenting with everything I can get my hands on. But the real plot twist? I found my second home in my college’s Robotics Lab. That’s where hardware and code collide — and where I feel most alive.
            </p>
            <p className="mb-2">
              Right now, I’m exploring how code can interact with the real world — whether it’s building smart systems with Raspberry Pi, training models to understand language, or creating fullstack apps that solve real-world problems. I’m not just chasing trends. I’m chasing impact.
            </p>

            <div className="mt-4 mb-2">
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">💭 Core Values:</h3>
              <p>Curiosity. Consistency. Chaos-taming through code.</p>
            </div>

            <div className="mt-4 mb-2">
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">🤖 What I Love:</h3>
              <p>Python, Robotics, Flask/Django, Docker, AI, and automating anything that moves.</p>
            </div>

            <div className="mt-4 mb-2">
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">🧠 Current Mode:</h3>
              <p>Learning → Building → Breaking → Rebuilding → Documenting → Repeating.</p>
            </div>

            <div className="mt-4 mb-2">
              <h3 className="text-xl font-semibold font-headline text-foreground mb-2">🎯 Next Up:</h3>
              <p>Working with real teams, shipping real products, and building things people actually use.</p>
            </div>
            
            <p className="mt-4">
              For a more structured look at my skills, educational background, and professional experience, please visit my{' '}
              <Link href="/resume" className="text-primary hover:underline font-medium">
                Resume page
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
