import { motion } from "motion/react";
import { 
  Stethoscope, Syringe, Shield, Activity, 
  Smile, FlaskConical, Search, AlertCircle, 
  Scissors, Cpu, Pill, HeartPulse 
} from "lucide-react";

export function Services() {
  const services = [
    { icon: Stethoscope, title: "General Consultations", desc: "Comprehensive health checks for your pets." },
    { icon: Syringe, title: "Vaccinations", desc: "Core and non-core vaccines tailored to your pet's lifestyle." },
    { icon: Shield, title: "Preventive Care", desc: "Keeping your pet healthy and preventing future diseases." },
    { icon: Activity, title: "Surgery", desc: "Safe, advanced surgical procedures with expert monitoring." },
    { icon: Smile, title: "Dental Care", desc: "Professional teeth cleaning and oral health treatments." },
    { icon: FlaskConical, title: "Laboratory", desc: "In-house lab for quick and accurate results." },
    { icon: Search, title: "Diagnostics", desc: "Advanced imaging and diagnostic services." },
    { icon: AlertCircle, title: "Emergency Care", desc: "Immediate veterinary attention when every second counts." },
    { icon: Scissors, title: "Pet Grooming", desc: "Professional grooming to keep them looking their best." },
    { icon: Cpu, title: "Microchipping", desc: "Permanent identification for your peace of mind." },
    { icon: Pill, title: "Pharmacy", desc: "Fully stocked pharmacy for your pet's medication needs." },
    { icon: HeartPulse, title: "Wellness Exams", desc: "Routine exams to ensure a long, healthy life." },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Comprehensive Veterinary Care</h2>
          <p className="text-slate-600 text-lg">
            We offer a wide range of modern veterinary services to ensure your furry family members stay healthy and happy at every stage of their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100"
            >
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors duration-300">
                <svc.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">{svc.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {svc.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
