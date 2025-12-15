import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    id: "hot-coffee",
    name: "Hot Coffee",
    items: [
      { name: "Espresso", description: "Double shot, bold and rich", price: "₹120" },
      { name: "Americano", description: "Espresso with hot water", price: "₹140" },
      { name: "Cappuccino", description: "Espresso, steamed milk, foam", price: "₹160" },
      { name: "Latte", description: "Espresso with steamed milk", price: "₹170" },
    ],
  },
  {
    id: "cold-coffee",
    name: "Cold Coffee",
    items: [
      { name: "Cold Brew", description: "Smooth 24h brew", price: "₹220" },
      { name: "Vietnamese Coffee", description: "Condensed milk", price: "₹180" },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Enso Coffee</title>
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-12 pt-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Crafted with Care
            </h1>

            <Button variant="outline" asChild>
              <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                View Full Menu (PDF)
              </a>
            </Button>
          </div>

          <Tabs defaultValue="hot-coffee">
            <TabsList className="flex justify-center gap-2 mb-8">
              {menuCategories.map((c) => (
                <TabsTrigger key={c.id} value={c.id}>
                  {c.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((c) => (
              <TabsContent key={c.id} value={c.id}>
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {c.items.map((item, i) => (
                    <div
                      key={item.name}
                      data-aos="fade-up"
                      data-aos-delay={i * 40}
                      className="p-5 rounded-xl bg-card"
                    >
                      <div className="flex justify-between mb-2">
                        <h3 className="font-serif font-semibold">{item.name}</h3>
                        <span className="text-accent font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Menu;
