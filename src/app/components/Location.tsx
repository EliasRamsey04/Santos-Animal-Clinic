import { motion } from "motion/react";
import { MapPin, Clock, Navigation, MessageCircle, Phone } from "lucide-react";

export function Location() {
  return (
    <section id="location" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 space-y-10"
          >
            <div>
              <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Our Location & Hours</h2>
              <p className="text-slate-600 text-lg">
                We are conveniently located in Palm Spring Lakes, providing top-tier veterinary care to the Hialeah community.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    1550 W 84th St Ste 78<br />
                    Hialeah, FL 33014<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Working Hours</h3>
                  <ul className="text-slate-600 space-y-1">
                    <li className="flex justify-between w-56">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold text-slate-800">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between w-56">
                      <span>Saturday:</span>
                      <span className="font-semibold text-slate-800">9:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between w-56 text-red-500 font-medium pt-1">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a 
                href="https://maps.google.com/?q=1550+W+84th+St+Ste+78,+Hialeah,+FL+33014" 
                target="_blank" 
                rel="noreferrer"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-5 h-5" />
                Open in Google Maps
              </a>
              <a 
                href="sms:+17866771838" 
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                Text Us
              </a>
              <a 
                href="tel:+17866771838" 
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-7/12"
          >
            <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <iframe 
                src="https://maps.google.com/maps?q=1550%20W%2084th%20St%20Ste%2078,%20Hialeah,%20FL%2033014&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Santos Animal Clinic"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
