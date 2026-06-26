import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Reviews() {
  const reviews = [
    {
      text: "Muy satisfecha con ese equipo excelente en todos los aspectos se los recomiendo 100 por ciento y me encantó la grooming excelente servicio gracias por su atención bendiciones para ese equipo excelente",
      author: "Yarisleidis Valdes",
    },
    {
      text: "Excelente clínica veterinaria. Gracias a Dios y al increíble equipo de esta clínica, mi perrita Kiara se salvó de una piometra, una condición muy grave. Desde el primer momento fueron rápidos, profesionales y muy humanos. Me explicaron todo con claridad, actuaron a tiempo y trataron a mi perrita como si fuera suya. Estaré eternamente agradecida. Los recomiendo 100%.",
      author: "Eglys Daniela MM",
    },
    {
      text: "Excelente servicio como siempre. Llevo varios años visitándolos con mis 3 perritas y siempre obtengo el mejor servicio y la mejor atención. Una de mis perritas tuvo una cirugía y fue excelente. Muy satisfecha.",
      author: "Glenda Garcia",
    },
    {
      text: "Excelente servicio en Santos clinic, es la segunda vez que traemos nuestros dálmatas y los reciben con mucho amor. El personal es muy atento. 100% recomendado.",
      author: "Reynol Del Corral",
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-blue-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Side: Stats */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400" />
              ))}
            </div>
            <div className="text-5xl font-bold mb-2">4.6</div>
            <p className="text-blue-200 text-lg mb-8">Google Rating based on 188+ reviews</p>
            

          </div>

          {/* Right Side: Review Cards */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-blue-800/50 p-8 rounded-2xl border border-blue-700 backdrop-blur-sm"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-blue-50 text-lg italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="font-semibold text-white">— {review.author}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
