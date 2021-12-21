/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import renderer from 'react-test-renderer';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
  TransactionsListenerDocument,
  TransactionsDocument,
} from '@graphql/types';
import Transactions from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  TransactionsList: (props) => <div id="TransactionsList" {...props} />,
  TransactionListDetails: (props) => <div id="TransactionListDetails" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

const mockTransactionsListenerDocument = {
  data: {
    transactions: [
      {
        "slot": 112385912,
        "hash": "648kfnNVKfEThUtyZypcKRdTmCAJ6ZYgeqQo9Tt5K99KW2y4s7dGrmqfsuBinKiMcjK746avsSrJu4Lgizm2ebPm",
        "error": true,
        "block": {
          "timestamp": "2021-12-20T04:05:46"
        },
        "messages": [
          {
            "type": "vote"
          }
        ]
      },
    ],
  },
};

const mockTransactionsDocument = jest.fn().mockResolvedValue({
  data: {
    transactions: [
      {
        "slot": 112385912,
        "hash": "648kfnNVKfEThUtyZypcKRdTmCAJ6ZYgeqQo9Tt5K99KW2y4s7dGrmqfsuBinKiMcjK746avsSrJu4Lgizm2ebPm",
        "error": true,
        "block": {
          "timestamp": "2021-12-20T04:05:46"
        },
        "messages": [
          {
            "type": "vote"
          }
        ]
      },
    ],
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Transactions', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      TransactionsListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      TransactionsDocument,
      mockTransactionsDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Transactions />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    renderer.act(() => {
      mockSubscription.next(mockTransactionsListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
