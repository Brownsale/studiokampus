import React, { Fragment } from "react";
import { useRouter } from 'next/router';

const ServiceSidebar4 = () => {
  const { locale } = useRouter();
  return (
    <Fragment>
      <aside className="widget categories">
      <h3 className="widget_title">{locale === 'en-US' ? "Ideal for events:" : "Idéal pour évènement :"}</h3>
        <div className="meipaly_categorie_widget">
          <ul>
            <li>
              <a>{locale === 'en-US' ? "Atrium 65 seats" : "Atrium 65 places"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Reception room" : "Salle de réception"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Technical equipment" : "Équipement technique"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Lighting and special effects" : "Éclairage et effets spéciaux"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Relaxation area and kitchen" : "Espace de relaxation et cuisine"}</a>
            </li>
            <li>
              <a>{locale === 'en-US' ? "Outdoor terrace" : "Terrasse extérieure"}</a>
            </li>
          </ul>
        </div>
      </aside>
      <aside className="widget categories">
        <div className="meipaly_services_help">
          <h4>{locale === 'en-US' ? "To reserve the room :" : "Pour réserver la salle :"}</h4>
          <p>
            {locale === 'en-US'
              ? "Contact us to rent our spaces perfect for private events, album launches or vernissages."
              : "Contactez-nous pour louer nos espaces parfaits pour les évènements privés, les lancements d'albums ou les vernissages."}
          </p>
          <h2>514-243-1855</h2>
        </div>
      </aside>
    </Fragment>
  );
};

export default ServiceSidebar4;
