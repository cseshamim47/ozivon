import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslations } from 'next-intl';

type QuestionKey = 'nobuyer' | 'whyozivon' | 'fees' | 'buyerbackout';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('FAQ');

  const faqKeys: QuestionKey[] = ['nobuyer', 'whyozivon', 'fees', 'buyerbackout'];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 lg:py-28 bg-gradient-to-r from-blue-100 md:from-yellow-500">
      <div className="container">
        <SectionTitle title={t('title')} center />
        <div className="w-full">
          {faqKeys.map((key, index) => (
            <div key={index} className="mb-4 border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full py-3 text-lg font-medium text-left text-gray-800 hover:text-primary"
              >
                {t(`questions.${key}.question`)}
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-3 text-gray-600">
                  {t(`questions.${key}.answer`)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
