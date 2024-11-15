import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import React from 'react'
import { useRouter } from 'next/router';
import { getLocalizedStaticProps } from '@/utils/getLocalizedStaticProps';
import toast from 'react-hot-toast';

const test = () => {
  const t = useTranslations("Test");
  const router = useRouter();

  const changeLocale = (locale: string) => {
    router.push(router.pathname, router.pathname, { locale });
    toast.success(`Language changed to ${locale === 'en' ? 'English' : 'Dutch'}`);
  };

  return (
    <div className='m-20'>
        <h1>{t("title")}</h1>
        <h1>{t("about me")}</h1>
        <div className="mt-4 space-x-4">
          <button
            onClick={() => {
              changeLocale('en');
              toast('Test toast message!');
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            English
          </button>
          <button
            onClick={() => changeLocale('nl')}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Dutch
          </button>
        </div>
    </div>
  )
}

export default test

export const getStaticProps = getLocalizedStaticProps;
