import React from "react";
import { useRouter } from 'next/router';
import serviceS2 from "@/images/s10.jpg";
import serviceS3 from "@/images/s9.jpg";
const ServiceDetailsContent4 = () => {
  const { locale } = useRouter();
  return (
    <div className="serviceArea">
      <h2>{locale === 'en-US' ? "Design and recording of albums" : "Conception et enregistrement d'albums"}</h2>
      <img src={serviceS3} />
      <div className="row gaping">
        <div className="col-lg-6 col-sm-12 col-md-6">
          <img src={serviceS2} />
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6">
          <h3>{locale === 'en-US' ? "Search for artists and grants" : "Recherche d'artistes et subventions"}</h3>
          <p>
            {locale === 'en-US' 
            ? "You have a musical album project? Trust us throughout the process and development of your album project. We have experience in finding grants, finding artists, designing and producing musical albums." 
            : "Vous avez un projet d'album musical ? Faites-nous confiance tout au long du processus et du développement de votre projet d'album. Nous avons l'expérience en recherche de subventions, recherche d'artistes, en conception et en réalisation d'albums musicaux."}
          </p>
        </div>
      </div>
      <p>
        {locale === 'en-US' 
        ? "Make your album a personal pride and a local product of high musical quality." 
        : "Faites de votre album une fierté personnelle et un produit local de haute qualité musicale."}
      </p>
    </div>
  );
};

export default ServiceDetailsContent4;
