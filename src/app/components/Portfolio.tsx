import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const projects = [
    {
      name: "Bella",
      image: "https://images.unsplash.com/photo-1592468257342-8375cb556a69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBoZWFsdGh5JTIwdGVldGh8ZW58MXx8fHwxNzgyNDk5OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      procedure: "Dental Cleaning",
      result: "Healthy Smile",
    },
    {
      name: "Max",
      image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZ29sZGVuJTIwcmV0cmlldmVyJTIwZG9nfGVufDF8fHx8MTc4MjQ5OTkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      procedure: "Emergency Surgery",
      result: "Full Recovery",
    },
    {
      name: "Luna",
      image: "https://images.unsplash.com/photo-1515002246390-7bf7e8f87b54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwY2F0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzgyNDY4NTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      procedure: "Vaccination Plan",
      result: "Healthy & Protected",
    },
    {
      name: "Rocky",
      image: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRvZyUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MjQ0MDQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      procedure: "Orthopedic Surgery",
      result: "Excellent Recovery",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Work & Happy Patients</h2>
          <p className="text-slate-600 text-lg">
            Real stories, real recoveries. We are proud of the care we provide and the joy of seeing our patients go home happy and healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <ImageWithFallback
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{project.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Info className="w-5 h-5 text-blue-500" />
                    <span>{project.procedure}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <Check className="w-5 h-5 text-emerald-500 font-bold" />
                    <span className="font-semibold text-slate-800">{project.result}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
