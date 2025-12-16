import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Jenish G.",
    rating: 5,
    text: "I found the perfect place for coffee lovers where every sip feels deliciously fresh and indulgent. The specialty beans with unique aromas truly stand out, making each cup memorable, especially when you just want to unwind or catch up with friends.",
    date: "2 weeks ago",
  },
  {
    name: "Milan M.",
    rating: 5,
    text: "Must visit cafe for core coffee lovers. One of the top 10 cafe for coffee in surat. Coffee/Cheesecake/Ambience is 10 out of 10.",
    date: "5 month ago",
  },
  {
    name: "Priyen N.",
    rating: 5,
    text: "The espresso here gives a strong caffeine kick, yet so refreshing. Loved every bite perfect with a variety of beverages and shakes. Great service and atmosphere at Enso Coffee. Barista ashraf 🫀",
    date: "2 month ago",
  },
];

const Reviews = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground">4.8 on Google Reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 md:p-8 rounded-xl shadow-md relative"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
                <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <span className="text-accent font-semibold text-sm">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://maps.google.com/?q=Enso+Coffee+Katargam+Surat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 font-medium transition-colors inline-flex items-center gap-2"
          >
            See all reviews on Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
