import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import TabsHeader from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);

jest.mock('./component', () => ({
  SingleValidator: (props) => <div id="SingleValidator" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Validators/Tabs', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <TabsHeader
          items={[
            {
              validator: {
                address: 'desmosvaloper19dzz3wqakz7d0s550mvtjcdsde8nlhs4se98mt',
                name: 'moniker',
              },
              stake: 121212,
              stakePercent: 12,
              fee: 0.9,
              lastVote: 56969523,
              skipRate: 80,
              skipTotal: 100, // idk what this is atm,
              skipPercent: 55,
              condition: 90,
              status: 3,
              delegators: 100,
            },
          ]}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
