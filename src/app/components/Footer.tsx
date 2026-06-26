import { HeartPulse, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="bg-emerald-500 p-2 rounded-xl">
                <HeartPulse className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Santos <span className="text-emerald-500">Animal Clinic</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Premium veterinary care treating every pet as a cherished member of our own family.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/santosanimalclinic/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us', 'Reviews', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="hover:text-emerald-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>1550 W 84th St Ste 78<br />Hialeah, FL 33014</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="tel:+17866771838" className="hover:text-emerald-500 transition-colors">+1 786-677-1838</a>
              </li>

            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Book an Appointment</h3>
            <p className="text-slate-400 mb-6">Skip the wait and schedule your visit via text message today.</p>
            <a 
              href="sms:+17866771838" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-md w-full"
            >
              Schedule via Text
            </a>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Santos Animal Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
