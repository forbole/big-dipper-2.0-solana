/* eslint-disable */
import React from 'react';
import renderer from 'react-test-renderer';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
TransactionDetailsDocument,
} from '@graphql/types';
import TransactionDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      tx: 3,
    },
  }),
}));

const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Logs: (props) => <div id="Logs" {...props} />,
}));

const mockTransactionDetailsDocument = jest.fn().mockResolvedValue({
  "data": {
    "transaction": [
      {
        "slot": 126542151,
        "success": false,
        "signature": "47vcSu9mH3mUPo5FRbv5dKkeDGCEV26H2V3GWSk25F8SrWwEFzcBvC9u1DpEJwx1k5apYF6uHL1Nv8PFZBZGzwzn",
        "fee": 15000,
        "logs": [
          "Program 11111111111111111111111111111111 invoke [1]",
          "Program 11111111111111111111111111111111 success",
        ],
        "block": {
          "timestamp": "2022-03-25T02:30:13"
        },
        "messages": [
          {
            "type": "createAccount"
          }
        ]
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks/List', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      TransactionDetailsDocument,
      mockTransactionDetailsDocument,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <TransactionDetails />
          </MockTheme>
        </ApolloProvider>,
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
