import { motion } from "motion/react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzgyNDg1OTAyfDA&ixlib=rb-4.1.0&q=80&w=1920&utm_source=figma&utm_medium=referral"
          alt="Veterinarian examining dog"
          className="w-full h-full object-cover"
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Exceptional Veterinary Care for Every Stage of Your Pet's Life
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-10 leading-relaxed font-light">
            Your pet deserves compassionate care, advanced medicine and experienced professionals dedicated to keeping every family member healthy and happy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/17866771838"
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule on WhatsApp
            </a>
            <a
              href="tel:+17866771838"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
