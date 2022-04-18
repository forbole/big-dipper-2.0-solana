import React from 'react';
import dynamic from 'next/dynamic';
import { NoData } from '@components';
import { useScreenSize } from '@hooks';
import { InflationType } from '../../types';

const Desktop = dynamic(() => import('./components/desktop'));
const Mobile = dynamic(() => import('./components/mobile'));

const Inflation: React.FC<{inflation: InflationType } & ComponentDefault> = (props) => {
  const { isDesktop } = useScreenSize();

  if (!props.inflation) {
    return (
      <NoData />
    );
  }

  return (
    <>
      {isDesktop ? (
        <Desktop inflation={props.inflation} />
      ) : (
        <Mobile inflation={props.inflation} />
      )}
    </>

  );
};

export default Inflation;
