import { Card } from "@/components/ui/card";
import { Building2, Hammer, Radio, Wrench } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Concrete Contracting",
    description: "Expert concrete services for residential, commercial, and industrial projects. From foundations to decorative finishes, we deliver durable, high-quality concrete work.",
  },
  {
    icon: Building2,
    title: "General Contracting",
    description: "Comprehensive construction management and execution for projects of all sizes. We handle every aspect from planning to completion with precision and expertise.",
  },
  {
    icon: Radio,
    title: "Vibration Control",
    description: "Specialized vibration monitoring and control services to protect structures and ensure compliance with industry standards during construction activities.",
  },
  {
    icon: Wrench,
    title: "Project Management",
    description: "Professional oversight ensuring your project stays on schedule, within budget, and meets the highest quality standards from start to finish.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your unique requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card hover:shadow-xl transition-all duration-300 border-2 hover:border-gold group"
              >
                <div className="mb-4 inline-block p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <Icon className="h-8 w-8 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
