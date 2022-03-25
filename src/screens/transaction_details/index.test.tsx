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
  Messages: (props) => <div id="Messages" {...props} />,
}));

const mockTransactionDetailsDocument = jest.fn().mockResolvedValue({
  data: {
    "transaction": [
      {
        "slot": 112756074,
        "success": false,
        "signature": "5oNqh9epbE8AmCqVUr2hb238dyoqBKninb8cyMwwqgTQ5dckAkSqaA3JVhHm8ZK7AjcFp2X1PwvSyVbYGdqBLYGm",
        "fee": 5000,
        "block": {
          "timestamp": "2021-12-22T14:33:14"
        },
        "messages": [
          {
            "type": "vote"
          }
        ]
      }
    ]
  },
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
