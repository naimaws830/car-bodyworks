import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Stevens",
    text: "Absolutely incredible work! My car looks better than the day I bought it. The team at Zircon went above and beyond to fix the damage from a parking lot incident.",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    text: "Professional, efficient, and the attention to detail is unmatched. They restored my vintage Mercedes to perfection. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Chen",
    text: "Best body shop in the area. Fair pricing, quick turnaround, and exceptional quality. They treated my car like it was their own.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it—hear from our satisfied customers.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-border bg-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="pt-2 border-t border-border">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
