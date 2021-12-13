import React from 'react';
import renderer from 'react-test-renderer';
import {
  MockTheme,
  wait,
} from '@tests/utils';
import { ApolloProvider } from '@apollo/client';
import { createMockClient } from 'mock-apollo-client';
import {
  EpochDocument,
} from '@graphql/types';
import Epoch from '.';

// ==================================
// mocks
// ==================================
const mockI18n = {
  t: (key: string) => key,
  lang: 'en',
};
jest.mock('next-translate/useTranslation', () => () => mockI18n);
jest.mock('@components', () => ({
  Box: (props) => <div id="box" {...props} />,
}));

jest.mock('next-translate/Trans', () => (
  (props) => <div id="Trans" {...props} />
));

const mockEpoch = jest.fn().mockResolvedValue({
  data: {
    average_time: 0.5312172714745062,
    slot: 110782714,
  },
});

// ==================================
// unit tests
// ==================================
describe('screen: Home/Epoch', () => {
  it('matches snapshot', async () => {
    const mockClient = createMockClient();
    mockClient.setRequestHandler(
      EpochDocument,
      mockEpoch,
    );

    // const component = renderer.create(
    //   <ApolloProvider client={mockClient}>
    //     <MockTheme>
    //       <Epoch />
    //     </MockTheme>
    //   </ApolloProvider>,
    // );

    let component;
    renderer.act(() => {
      component = renderer.create(
        <ApolloProvider client={mockClient}>
          <MockTheme>
            <Epoch />
          </MockTheme>
        </ApolloProvider>,
      );
    });

    await wait();

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // epochNumber -> expect 256
    // expect(component.root.findByProps({ className: 'makeStyles-chartLabel' }).children[2]).toEqual('256');
    // epochRate
    // expect(component.root.findByProps({ className: 'makeStyles-chartPercentLabel'}).children[0]).toEqual('73');
    // epochTime
    // expect(component.root.findByProps({ id: 'Trans' }).props.values.time).toEqual('33h 43m');

    console.log(component.root.findByProps({ id: 'Trans' }).props.values.time);
    console.log(component.root.findByProps({ className: 'makeStyles-chartLabel' }).children[2]);
    console.log(component.root.findByProps({ className: 'makeStyles-chartPercentLabel' }).children[0]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
