/* eslint-disable */
import React from 'react';
import { createMockClient } from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
BlockDetailsDocument,
} from '@graphql/types';
import BlockDetails from '.';

// ==================================
// mocks
// ==================================
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      height: 300,
    },
  }),
}));

jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
}));

jest.mock('./components', () => ({
  Overview: (props) => <div id="Overview" {...props} />,
  Transactions: (props) => <div id="Transactions" {...props} />,
  Signatures: (props) => <div id="Signatures" {...props} />,
}));

const mockAverageBlockTime = jest.fn().mockResolvedValue({
  "data": {
    "block": [
      {
        "slot": 125048761,
        "hash": "4YJBguXbyjWNQ6o9SCCmUWab9KbxgAkmKdopCikRNSd7",
        "timestamp": "2022-03-15T11:57:26",
        "validator": [
          {
            "address": "9QU2QSxhb24FUX3Tu2FpczXjpK3VYrvRudywSZaM29mF"
          }
        ],
        "numTxs": 1421
      }
    ],
    "transaction": [
      {
        "slot": 125048761,
        "hash": "58HLKDvyHw7yrE9ZDp9RfZdf2muzWzbF5zqoB6QAiN5L6pNuFMbWvW7MkUbhqKXTLZJhEDcWggtST2nciixxBbr8",
        "error": false,
        "block": {
          "timestamp": "2022-03-15T11:57:26"
        },
        "numInstructions": 2
      }
    ]
  }
});

// ==================================
// unit tests
// ==================================
describe('screen: BlockDetails', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      BlockDetailsDocument,
      mockAverageBlockTime,
    );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <BlockDetails />
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
