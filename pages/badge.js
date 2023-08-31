// components/BadgeComponent.js
import React, { useEffect } from 'react';
import styles from './Badge.module.css'; // Importer le fichier de styles CSS


const BadgeComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={styles.centeredContainer}> {/* Appliquer la classe de style pour centrer */}
    <div
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="e7f27b9d-d06b-4a78-9f79-3853577f0e07"
      data-share-badge-host="https://www.credly.com"
    ></div>
  </div>

  );
};

export default BadgeComponent;
