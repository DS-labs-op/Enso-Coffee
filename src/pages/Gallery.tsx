import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

import heroImage from "@/assets/hero-cafe.jpg";
import coldBrewImage from "@/assets/cold-brew.jpg";
import cheesecakeImage from "@/assets/cheesecake.jpg";

const galleryImages = [
  { src: heroImage, alt: "Cafe interior" },
  { src: coldBrewImage, alt: "Cold brew coffee" },
  { src: cheesecakeImage, alt: "Cheesecake dessert" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] =
    useState<typeof galleryImages[0] | null>(null);

  return (
    <>
      <Helmet>
        <title>Gallery | Enso Coffee</title>
      </Helmet>

      <Header />

      <main className="pt-20 md:pt-24 pb-16 min-h-screen bg-background">
        <div className="container mx-auto px-4">
          <div data-aos="fade-up" className="text-center mb-12 pt-8">
            <h1 className="font-serif text-4xl md:text-5xl font-bold">
              Our Space & Creations
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 40}
                onClick={() => setSelectedImage(img)}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <X className="absolute top-6 right-6 text-white" />
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh]"
            />
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Gallery;
