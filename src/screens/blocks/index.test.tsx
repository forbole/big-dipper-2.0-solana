/* eslint-disable */
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  createMockClient, createMockSubscription,
} from 'mock-apollo-client';
import { ApolloProvider } from '@apollo/client';
import renderer from 'react-test-renderer';
import {
  MockTheme, wait,
} from '@tests/utils';
import {
BlocksListenerDocument,
BlocksDocument,
} from '@graphql/types';
import Blocks from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  Layout: (props) => <div id="Layout" {...props} />,
  Box: (props) => <div id="Box" {...props} />,
  LoadAndExist: (props) => <div id="LoadAndExist" {...props} />,
  NoData: (props) => <div id="NoData" {...props} />,
}));

const mockBlocksListenerDocument = {
  data: {
    blocks: [
      {
        "slot": 109782714,
        "leader": "AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE",
        "hash": "ADWG9wFPM94Fa2H9LMdnnz6QXfXQpky4RQrxbz2beLmd",
        "timestamp": "2021-12-02T23:33:50",
        "numTxs": 1355,
      }
    ],
  },
};

const mockBlocksDocument = jest.fn().mockResolvedValue({
  data: {
    "blocks": [
      {
        "slot": 109782714,
        "leader": "AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE",
        "hash": "ADWG9wFPM94Fa2H9LMdnnz6QXfXQpky4RQrxbz2beLmd",
        "timestamp": "2021-12-02T23:33:50",
        "numTxs": 1377,
      }
    ],
    "total": {
      "aggregate": {
        "count": 145223
      }
    }
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Blocks', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    const mockSubscription = createMockSubscription();

    mockClient.setRequestHandler(
      BlocksListenerDocument,
      () => mockSubscription,
    );

    mockClient.setRequestHandler(
      BlocksDocument,
      mockBlocksDocument,
    );

    let component;

    renderer.act(() => {
      component = renderer.create(
        <RecoilRoot>
          <ApolloProvider client={mockClient}>
            <MockTheme>
              <Blocks />
            </MockTheme>
          </ApolloProvider>
        </RecoilRoot>,
      );
    });
    await wait();

    renderer.act(() => {
      mockSubscription.next(mockBlocksListenerDocument);
    });

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
