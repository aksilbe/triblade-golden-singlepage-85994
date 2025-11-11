import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description: "A state-of-the-art 50,000 sq ft office building featuring sustainable design and cutting-edge facilities.",
  },
  {
    title: "Luxury Residential Estate",
    category: "Residential",
    description: "Custom-built luxury homes with premium finishes and modern architectural design.",
  },
  {
    title: "Industrial Warehouse",
    category: "Industrial",
    description: "Large-scale warehouse facility with advanced logistics infrastructure and safety features.",
  },
  {
    title: "Retail Shopping Center",
    category: "Commercial",
    description: "Multi-tenant retail space designed for maximum foot traffic and customer experience.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of our most remarkable construction achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 border-2 hover:border-gold group"
            >
              <div className="h-64 bg-gradient-to-br from-muted to-gold/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-gold/30">
                  {index + 1}
                </span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
