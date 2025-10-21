import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Hammer, Paintbrush, Sparkles, Star } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Dent & Scratch Repair",
    description: "Professional removal of dents, dings, and scratches using advanced PDR techniques and precision bodywork.",
  },
  {
    icon: Paintbrush,
    title: "Paint Restoration",
    description: "Color-matched paint correction and restoration to bring back your vehicle's original finish and luster.",
  },
  {
    icon: Sparkles,
    title: "Full Body Polishing",
    description: "Multi-stage polishing process that removes imperfections and creates a mirror-like shine.",
  },
  {
    icon: Star,
    title: "Custom Detailing",
    description: "Comprehensive interior and exterior detailing packages tailored to your vehicle's specific needs.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From minor touch-ups to complete transformations, we offer a full range of professional services.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="border-border hover:border-accent hover:shadow-lg transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
