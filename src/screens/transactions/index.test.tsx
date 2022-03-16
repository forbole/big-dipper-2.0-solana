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
  "data": {
    "transactions": [
      {
        "slot": 125056600,
        "signature": "AxVwePxYYKqGHSwrrpjwptp9km4N91fYtQcHgYvLNRKPEMp6ZNdQJd6wxA4KF3LHRbKS7iZwMWckmnT9YdATE2Y",
        "error": true,
        "block": {
          "timestamp": "2022-03-15T13:13:45"
        },
        "numInstructions": 1
      }
    ]
  }
};

const mockTransactionsDocument = jest.fn().mockResolvedValue({
  "data": {
    "transactions": [
      {
        "slot": 125056600,
        "signature": "AxVwePxYYKqGHSwrrpjwptp9km4N91fYtQcHgYvLNRKPEMp6ZNdQJd6wxA4KF3LHRbKS7iZwMWckmnT9YdATE2Y",
        "error": true,
        "block": {
          "timestamp": "2022-03-15T13:13:45"
        },
        "numInstructions": 1
      }
    ]
  }
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
