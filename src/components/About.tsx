import { Wrench, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Wrench,
    title: "Skilled Technicians",
    description: "Certified professionals with years of expertise"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "100% satisfaction guarantee on all services"
  },
  {
    icon: Sparkles,
    title: "Premium Finish",
    description: "Showroom-quality results every time"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Heading */}
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              At Zircon Car Bodyworks, we combine cutting-edge technology with old-school 
              craftsmanship to deliver exceptional results. Our expert team specializes in 
              body repair, precision paintwork, and premium detailing services that restore 
              your vehicle to its original glory—or better.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10">
                    <highlight.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
