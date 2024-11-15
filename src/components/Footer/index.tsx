"use client";

import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <>
      <footer className="wow fadeInUp relative z-10 bg-primary" data-wow-delay=".1s">
        <div className="container">
          <div className="py-8">
            <p className="text-center text-base text-white">
              {t('copyright')}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
