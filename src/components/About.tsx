import { Card } from "@/components/ui/card";
import { Award, CheckCircle2, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold text-sm font-semibold tracking-widest uppercase">
              About Triblade
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Building Trust Through Excellence
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2007 by Robert and Paulette Daley, Triblade Construction Inc. 
              has established itself as Red Deer's trusted leader in concrete contracting, 
              general construction, and vibration control services.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              With 18 years of experience, our commitment to quality, safety, and client satisfaction 
              drives everything we do. From initial consultation to project completion, we ensure 
              flawless execution at every stage.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Quality Craftsmanship</h4>
                  <p className="text-muted-foreground">
                    Every project is executed with meticulous attention to detail
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Timely Delivery</h4>
                  <p className="text-muted-foreground">
                    We respect deadlines and deliver projects on schedule
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Client-Focused Approach</h4>
                  <p className="text-muted-foreground">
                    Your satisfaction is our top priority from start to finish
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors">
              <Award className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
              <p className="text-muted-foreground">Completed Projects</p>
            </Card>
            <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors">
              <Users className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">1000+</h3>
              <p className="text-muted-foreground">Satisfied Clients</p>
            </Card>
            <Card className="p-6 bg-card border-2 border-border hover:border-gold transition-colors sm:col-span-2">
              <CheckCircle2 className="h-12 w-12 text-gold mb-4" />
              <h3 className="text-3xl font-bold text-foreground mb-2">18 Years</h3>
              <p className="text-muted-foreground">Of Industry Excellence Since 2007</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
