import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { TrustStats } from "../components/TrustStats";
import { Services } from "../components/Services";
import { About } from "../components/About";
import { Reviews } from "../components/Reviews";
import { Gallery } from "../components/Gallery";
import { Portfolio } from "../components/Portfolio";
import { Location } from "../components/Location";
import { Footer } from "../components/Footer";

export function LandingPage() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.title = "Santos Animal Clinic | Exceptional Veterinary Care";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Premium veterinary care in Hialeah, FL. We offer general consultations, surgery, dental care, grooming and more.');

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Santos Animal Clinic | Exceptional Veterinary Care' },
      { property: 'og:description', content: 'Premium veterinary care in Hialeah, FL. Schedule your visit today!' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1770836037793-95bdbf190f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXRlcmluYXJpYW4lMjBleGFtaW5pbmclMjBkb2d8ZW58MXx8fHwxNzgyNDg1OTAyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add JSON-LD Schema
    let script = document.querySelector('#local-business-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'local-business-schema';
      script.setAttribute('type', 'application/ld+json');
      script.innerHTML = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "VeterinaryCare",
        "name": "Santos Animal Clinic",
        "image": "https://images.unsplash.com/photo-1770836037793-95bdbf190f71",
        "@id": "",
        "url": "https://santosanimalclinic.com",
        "telephone": "+17866771838",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1550 W 84th St Ste 78",
          "addressLocality": "Hialeah",
          "addressRegion": "FL",
          "postalCode": "33014",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 25.8890,
          "longitude": -80.3150
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "09:00",
            "closes": "14:00"
          }
        ]
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <Services />
        <About />
        <Reviews />
        <Gallery />
        <Portfolio />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
