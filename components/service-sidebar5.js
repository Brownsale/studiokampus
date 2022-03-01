import React, { Fragment } from "react";
import { useRouter } from 'next/router';

const ServiceSidebar5 = () => {
  const { locale } = useRouter();
  return (
    <Fragment>
      <aside className="widget categories">
      <h3 className="widget_title">{locale === 'en-US' ? "Perfect for artists:" : "Idéal pour les artistes :"}</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>{locale === 'en-US' ? "Conception and Design" : "Conception et Design"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Recherche d'artistes" : "Recherche d'artistes"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Grant research" : "Recherche de subvention"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Press releases and launches" : "Relations de presse et lancements"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Publishing and distribution" : "Édition et diffusion"}</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>{locale === 'en-US' ? "For album design :" : "Pour la conception d'album :"}</h4>
          <p>
            {locale === 'en-US'
              ? "Contact our design and production team to support you through the development of your album."
              : "Contactez notre équipe de conception et de réalisation pour vous supporter à travers le développement de votre album."}
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar5;
