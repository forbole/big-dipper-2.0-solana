import React from 'react';
import classnames from 'classnames';
import numeral from 'numeral';
import * as R from 'ramda';
import Big from 'big.js';
import { useRecoilValue } from 'recoil';
import { readMarket } from '@recoil/market';
import {
  Typography,
  Divider,
} from '@material-ui/core';
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import useTranslation from 'next-translate/useTranslation';
import { Box } from '@components';
import { formatNumber } from '@utils/format_token';
import { chainConfig } from '@configs';
import { useStyles } from './styles';
import { BalanceType } from '../../../../types';
import { formatBalanceData } from './utils';

const Balance: React.FC<BalanceType & ComponentDefault> = (props) => {
  const { t } = useTranslation('accounts');
  const {
    classes, theme,
  } = useStyles();
  const market = useRecoilValue(readMarket);
  const formattedChartData = formatBalanceData(props);

  const empty = {
    key: 'empty',
    value: 2400,
    background: theme.palette.custom.charts.zero,
    display: '',
  };

  const backgrounds = [
    theme.palette.custom.charts.one,
    theme.palette.custom.charts.two,
    theme.palette.custom.charts.three,
    theme.palette.custom.charts.four,
  ];

  const formatData = formattedChartData.map((x, i) => ({
    ...x,
    background: backgrounds[i],
  }));

  const notEmpty = formatData.some((x) => Big(x.value).gt(0));

  const dataCount = formatData.filter((x) => Big(x.value).gt(0)).length;
  const data = notEmpty ? formatData : [...formatData, empty];
  const totalAmount = `$${numeral(market.price * numeral(props.total.value).value()).format('0,0.00')}`;

  return (
    <Box className={classnames(props.className, classes.root)}>
      <Typography variant="h2">
        {t('balance')}
      </Typography>
      <div className={classes.chartWrapper}>
        <div className={classes.chart}>
          <ResponsiveContainer width="99%">
            <PieChart>
              <Pie
                dataKey="value"
                data={data}
                isAnimationActive={false}
                innerRadius="90%"
                outerRadius="100%"
                cornerRadius={40}
                paddingAngle={dataCount > 1 ? 5 : 0}
                fill="#82ca9d"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.background}
                    stroke={entry.background}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={classes.legends}>
          {data.map((x) => {
            if (x.key.toLowerCase() === 'empty') {
              return null;
            }

            return (
              <div key={x.key} className="legends__single--container">
                <div className="single__label--container">
                  <div className="legend-color" style={{ background: x.background }} />
                  <Typography variant="body1">
                    {t(x.key)}
                  </Typography>
                </div>
                <Typography variant="body1">
                  {x.display}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Divider className={classes.divider} />
        <div className={classes.total}>
          <div className="total__single--container">
            <Typography variant="h3" className="label">
              {t('total', {
                unit: props.total.displayDenom.toUpperCase(),
              })}
            </Typography>
            <Typography variant="h3">
              {formatNumber(props.total.value, props.total.exponent)}
            </Typography>
          </div>
          <div className="total__secondary--container total__single--container">
            <Typography variant="body1" className="label">
              $
              {numeral(market.price).format('0,0.[00]', Math.floor)}
              {' '}
              /
              {' '}
              {R.pathOr('', ['tokenUnits', chainConfig.primaryTokenUnit, 'display'], chainConfig).toUpperCase()}
            </Typography>
            <Typography variant="body1">
              {totalAmount}
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Balance;
