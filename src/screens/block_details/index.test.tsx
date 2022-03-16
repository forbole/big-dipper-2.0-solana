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
        "slot": 125042260,
        "hash": "6G2U5iuU56dZS8nmHvv7n5RgYm8wTEdDm1srx5ZGdHy5",
        "proposer": "7Gjec4iDbTxLvVYNsRbZrrHdtyLByzdDJ1C5BmcMMBks",
        "timestamp": "2022-03-15T10:55:19",
        "numTxs": 713
      }
    ],
    "transaction": [
      {
        "slot": 125042260,
        "hash": "3FZ3GH7QcwvcQgdF8r6Ap6UHMgY49ga4aYfFzy2nEADKajLLzzYhUwvcvdLqMeYQaAYiDf3JnJpyVRYoMCb1Zv7u",
        "error": true,
        "block": {
          "timestamp": "2022-03-15T10:55:19"
        },
        "numInstructions": 1
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
