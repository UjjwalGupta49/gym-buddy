import React, { useEffect } from 'react';
import { Hero, WorkoutView, Human, Footer } from "@/components";

const Home: React.FC = () => {
  useEffect(() => {
    // Adding the Google Tag Manager script dynamically
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-N5FVKWZF2F';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-N5FVKWZF2F');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div>
      <Hero />
      <WorkoutView />
      <Human />
      <Footer />
    </div>
  );
};

export default Home;