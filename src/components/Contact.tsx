import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission
    alert("Thank you for your inquiry! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Reach out to discuss how we can bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors text-center">
            <div className="inline-block p-3 bg-gold/10 rounded-lg mb-4">
              <Phone className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <div className="space-y-1">
              <p className="text-muted-foreground">(403) 986-2206</p>
              <p className="text-muted-foreground text-sm">(403) 755-3108</p>
              <p className="text-muted-foreground text-sm">(403) 598-1394</p>
            </div>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors text-center">
            <div className="inline-block p-3 bg-gold/10 rounded-lg mb-4">
              <Mail className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@triblade.com</p>
          </Card>

          <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors text-center">
            <div className="inline-block p-3 bg-gold/10 rounded-lg mb-4">
              <MapPin className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">44 Haliburton Crescent<br />Red Deer, AB T4N 6K3</p>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8 bg-card border-2 border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="border-border focus:border-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="border-border focus:border-gold"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input
                id="subject"
                placeholder="Project inquiry"
                className="border-border focus:border-gold"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                className="border-border focus:border-gold"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-foreground text-lg py-6"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
