import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import { NextSeo } from 'next-seo';
import {
  Layout,
  LoadAndExist,
} from '@components';

const Epoch = () => {
  const { t } = useTranslation('epoch');

  return (
    <>
      <NextSeo
        title={t('epoch')}
        openGraph={{
          title: t('epoch'),
        }}
      />
      <Layout navTitle={t('epoch')}>
        <LoadAndExist
          loading={false}
          exists
        >
          {}
        </LoadAndExist>
      </Layout>
    </>
  );
};

export default Epoch;
