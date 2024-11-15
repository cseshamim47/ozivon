import { GetStaticPropsContext } from "next";

export async function getLocalizedStaticProps(context: GetStaticPropsContext) {
  const { locale } = context;

  // Load locale-specific messages
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
}
