import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const images = [
    { src: "https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzgyNDg1OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Veterinarians", label: "Our Team" },
    { src: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MjQ0MDQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Dogs", label: "Happy Dogs" },
    { src: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgyNDY4NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Cats", label: "Happy Cats" },
    { src: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwY29uc3VsdGF0aW9uJTIwY2F0fGVufDF8fHx8MTc4MjQ5OTkwMnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Consultations", label: "Consultations" },
    { src: "https://images.unsplash.com/photo-1581982231900-6a1a46b744c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHdhaXRpbmclMjByb29tfGVufDF8fHx8MTc4MjQ5OTkwMXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Hospital", label: "Modern Hospital" },
    { src: "https://images.unsplash.com/photo-1770836037326-d2df574278b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJ5JTIwc3VyZ2VyeSUyMHJvb218ZW58MXx8fHwxNzgyNDk5ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Operating Room", label: "Surgery Room" },
    { src: "https://images.unsplash.com/photo-1611173622933-91942d394b04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBncm9vbWluZyUyMGJhdGh8ZW58MXx8fHwxNzgyNDk5OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Grooming", label: "Pet Grooming" },
    { src: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZ29sZGVuJTIwcmV0cmlldmVyJTIwZG9nfGVufDF8fHx8MTc4MjQ5OTkwMnww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Waiting Room", label: "Waiting Room" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 text-center mb-16">
        <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Take A Tour</span>
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Clinic Gallery</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05, duration: 0.5 }}
            className={`relative group overflow-hidden rounded-xl bg-slate-100 ${
              idx === 0 || idx === 3 ? "col-span-2 row-span-2 h-64 md:h-80" : "h-40 md:h-48"
            }`}
          >
            <ImageWithFallback
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg tracking-wide drop-shadow-md">
                {img.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
