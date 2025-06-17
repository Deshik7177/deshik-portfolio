
import Link from 'next/link';

export function AboutSection() {
  return (
    <section id="about" className="pt-12 pb-20 bg-background" style={{ scrollMarginTop: '5rem' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn" style={{animationDelay: '0.2s'}}>
          <h2 className="text-4xl font-bold mb-4 font-headline">About Me</h2>
        </div>
        <div className="max-w-3xl mx-auto animate-fadeIn" style={{animationDelay: '0.4s'}}>
          <div className="p-8 rounded-xl glass-card text-lg text-muted-foreground leading-relaxed">
            <p className="mb-2">
              Hey! I’m Paila Dhana Deshik — a Computer Science Engineer and tech explorer with a curious brain and robot-loving heart.
            </p>
            <p className="mb-2">
              I work at the crossroads of software and hardware — from building Flask/Django-based web apps to designing smart systems with Raspberry Pi. I’m currently deep into backend dev, AI/ML, and automation, and I love taking real-world problems and turning them into projects that.
            </p>
            <p className="mb-6"> {/* mb-6 to give a bit more space before "My Tech Journey" */}
              Outside the compiler, you’ll probably catch me messing around in the Robotics Lab, obsessing over new tech, or trying to build something I barely understand...
            </p>

            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">My Tech Journey</h3>
            <p className="mb-2">
              It all started back in 2018, when I was in 7th grade. My school introduced something called ATL — the Atal Tinkering Lab. That place changed everything.
            </p>
            <p className="mb-2">
              For the first time, I touched circuits, sensors, and microcontrollers. We weren’t just studying science — we were building it. That’s when I realized: tech wasn’t just something you use... it was something you could create.
            </p>
            <p className="mb-2">
              Then came 11th grade. Python entered the chat 📲<br/>
              Our Computer Science subject was all about Python and SQL, and that’s where I truly got into coding. Once I started writing code, I couldn’t stop. I kept diving deeper — from simple logic problems to full-blown projects.
            </p>
            <p className="mb-2">
              College opened up a whole new world — <strong>web dev, AI, ML, NLP, cloud</strong>, and most importantly, <strong>robotics</strong>. Our college robotics lab became my happy place — a wild zone where hardware meets code and everything feels possible.
            </p>
            <p className="mb-6"> {/* mb-6 to give a bit more space before resume link */}
              Since then, I've been experimenting, failing, learning, and building — and honestly? That’s the part I love the most.
            </p>
            
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
