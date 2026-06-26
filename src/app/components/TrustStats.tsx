import { motion } from "motion/react";
import { Star, MessageSquareHeart, Users, ShieldCheck } from "lucide-react";

export function TrustStats() {
  const stats = [
    {
      icon: <MessageSquareHeart className="w-8 h-8 text-emerald-500" />,
      value: "188+",
      label: "Verified Reviews",
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />,
      value: "4.6 ★",
      label: "Google Rating",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      value: "Thousands",
      label: "of Happy Pets",
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-500" />,
      value: "Professional",
      label: "Veterinary Team",
    },
  ];

  return (
    <section className="relative z-20 -mt-16 mb-16 px-6 lg:px-12">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center text-center ${idx !== 0 ? "pt-6 md:pt-0" : ""}`}
              >
                <div className="mb-4 bg-slate-50 p-4 rounded-full">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
