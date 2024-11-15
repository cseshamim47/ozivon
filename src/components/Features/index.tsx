import SectionTitle from '../Common/SectionTitle';
import SingleFeature from './SingleFeature';
import featuresData from './featuresData';
import { useTranslations } from 'next-intl';



const Features = () => {
  const t = useTranslations('Features');

  return (
    <>
      <section id="howWorks" className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-100 md:from-yellow-500">
        <div className="container">
          <SectionTitle title={t('title')} center />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-2">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
