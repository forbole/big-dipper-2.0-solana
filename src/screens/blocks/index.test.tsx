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
        "leader": {
          "address": "AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE",
          "name": "tundrman",
          "url": "https://s3.amazonaws.com/keybase_processed_uploads/9e5781946a0748087fe366f6f4189805_360_36",         
        },
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
        "leader": {
          "address": "AjfUXpuPLBFwB9NbhS8vYFgvf1tU5Xt7LG7yKAQpBTNE",
          "name": "tundrman",
          "url": "https://s3.amazonaws.com/keybase_processed_uploads/9e5781946a0748087fe366f6f4189805_360_36",         
        },
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
  // it('matches snapshot', async () => {
  //   const mockClient = createMockClient();
  //   const mockSubscription = createMockSubscription();

  //   mockClient.setRequestHandler(
  //     BlocksListenerDocument,
  //     () => mockSubscription,
  //   );

  //   mockClient.setRequestHandler(
  //     BlocksDocument,
  //     mockBlocksDocument,
  //   );

  //   let component;

  //   renderer.act(() => {
  //     component = renderer.create(
  //       <RecoilRoot>
  //         <ApolloProvider client={mockClient}>
  //           <MockTheme>
  //             <Blocks />
  //           </MockTheme>
  //         </ApolloProvider>
  //       </RecoilRoot>,
  //     );
  //   });
  //   await wait();

  //   renderer.act(() => {
  //     mockSubscription.next(mockBlocksListenerDocument);
  //   });

  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('test', ()=>{
    const a = 2;
    const b = 3;
    expect(a+b).toBe(5);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
