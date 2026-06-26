import { motion } from "motion/react";
import { CheckCircle2, Target, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const highlights = [
    "Professional veterinary care",
    "Highly trained staff",
    "Reasonable and transparent prices",
    "Excellent, personalized attention",
    "Unwavering commitment to every pet",
    "Clean, safe, and modern environment",
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/owner.jpg"
                alt="Owner of Santos Animal Clinic"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                  <span className="font-bold text-xl">10+</span>
                </div>
                <p className="font-bold text-slate-800 leading-tight">Years of Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Caring for Pets Like Family
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              As a proudly Latino-owned business, we are deeply committed to providing personalized, warm, and professional care to every family that walks through our doors. We believe in treating your pets with the same love and dedication as if they were our own.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-slate-800">Our Mission</h3>
                </div>
                <p className="text-slate-600">
                  To provide compassionate, modern and trustworthy veterinary care while treating every pet as a member of our own family.
                </p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-emerald-500">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="w-6 h-6 text-emerald-500" />
                  <h3 className="text-xl font-bold text-slate-800">Our Vision</h3>
                </div>
                <p className="text-slate-600">
                  To become one of Florida's most trusted veterinary clinics through innovation, compassion and excellence in animal healthcare.
                </p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
