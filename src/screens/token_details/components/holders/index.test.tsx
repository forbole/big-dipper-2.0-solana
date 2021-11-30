import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Box: (props) => <div id="Box" {...props} />,
  TransactionListDetails: (props) => <div id="TransactionListDetails" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Transactions/List', () => {
  it('matches snapshot', async () => {
    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <MockTheme>
            <Transactions
              data={[
                {
                  address: 'address',
                  quantity: 5,
                  percentage: 30,
                  value: 24534,
                },
              ]}
              loadNextPage={jest.fn()}
              hasNextPage={false}
              isNextPageLoading={false}
            />
          </MockTheme>
        </RecoilRoot>,
      );
    });
    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
