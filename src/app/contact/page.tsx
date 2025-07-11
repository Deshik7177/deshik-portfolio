
import { ContactForm } from '@/components/ContactForm';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { Mail, Phone } from 'lucide-react';
import { contactEmail } from '@/lib/data';

export const metadata = {
  title: "Contact Paila Dhana Deshik",
  description: "Get in touch with Paila Dhana Deshik for collaborations, projects, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="pt-12 pb-20 bg-gradient-to-br from-background via-background to-primary/5 dark:to-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-headline">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions, projects, or just want to connect? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="md:col-span-1 space-y-8 p-8 rounded-xl glass-card animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-semibold mb-6 font-headline">Contact Information</h2>
            
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <a href={`mailto:${contactEmail}`} className="text-lg text-muted-foreground hover:text-primary transition-colors break-all">
                  {contactEmail}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <a href="tel:+917731061414" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  +91 7731061414
                </a>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-semibold text-lg mb-3">Connect on Social Media</h3>
              <SocialIcons />
            </div>
          </div>
          
          <div className="md:col-span-1 p-8 rounded-xl glass-card animate-fadeIn" style={{ animationDelay: '0.5s' }}>
             <h2 className="text-2xl font-semibold mb-6 font-headline">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
