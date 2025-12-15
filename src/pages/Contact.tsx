import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    visitDate: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    window.location.href = `https://wa.me/918155033301?text=${msg}`;
  };

  return (
    <>
      <Helmet>
        <title>Contact | Enso Coffee</title>
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <div
            data-aos="fade-up"
            className="text-center max-w-xl mx-auto mb-12 pt-8"
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="60"
            className="max-w-xl mx-auto bg-card p-6 rounded-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                placeholder="Phone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <Textarea
                placeholder="Message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <Button type="submit" className="w-full">
                <Send className="h-4 w-4" />
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
