import React from "react";
import { useRouter } from 'next/router';
import serviceS2 from "@/images/s8.jpg";
import serviceS3 from "@/images/s7.jpg";
const ServiceDetailsContent3 = () => {
  const { locale } = useRouter();
  return (
    <div className="serviceArea">
      <h2>{locale === 'en-US' ? "Event and experiential" : "Évènementiel et expérientiel"}</h2>
      <img src={serviceS3} />
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
        <h3>{locale === 'en-US' ? "Private and warm" : "Privé et chaleureux"}</h3>
        <p>
          {locale === 'en-US' 
          ? "Do you have a launch project? Or a private party or live performance project? Rent our all-in-one creative spaces for a nominal fee of $100 per hour." 
          : "Vous avez un projet de lancement ? Ou un projet de soirée privée ou de performances live ? Louez nos espaces créatifs tout-en-un pour un tarif minime de 100$ par heure."}
        </p>
          <ul>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Real-time broadcasting | Live" : "100 comfortable seats stage room"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Real-time broadcasting | Live" : "Professional stage lighting"}
            </li>
            <li>
              <i className="fa fa-check-square"></i>{locale === 'en-US' ? "Real-time broadcasting | Live" : "Sound and video recording equipment"}
            </li>
          </ul>
        </div>
      </div>
      <p>
          {locale === 'en-US' 
          ? "Make your event a success by creating unforgettable moments in our extraordinary spaces." 
          : "Faites de votre évènement un succès en créant des moments inoubliables dans nos espaces hors du commun."}
        </p>
    </div>
  );
};

export default ServiceDetailsContent3;
