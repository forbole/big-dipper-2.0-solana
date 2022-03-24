import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import Mobile from '.';

// ==================================
// mocks
// ==================================
jest.mock('@components', () => ({
  SingleBlockMobile: (props) => <div id="SingleBlockMobile" {...props} />,
  Loading: (props) => <div id="Loading" {...props} />,
  AvatarName: (props) => <div id="AvatarName" {...props} />,
}));

jest.mock('react-virtualized-auto-sizer', () => ({ children }: any) => children({
  height: 600, width: 600,
}));

// ==================================
// unit tests
// ==================================
describe('screen: Home/Blocks/Mobile', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <Mobile
          items={[
            {
              slot: 812768640,
              leader: {
                name: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
                address: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
              },
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              txs: 2,
              timestamp: '2021-09-13T20:06:17.363145',
            },
            {
              slot: 812768640,
              leader: {
                name: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
                address: 'desmosvaloper1rzhewpmmdl72lhnxj6zmxr4v94f522s4hyz467',
              },
              hash: '76nwV8zz8tLz97SBRXH6uwHvgHXtqJDLQfF66jZhQ857',
              txs: 2,
              timestamp: '2021-09-13T20:06:17.363145',
            },
          ]}
          itemCount={2}
          loadMoreItems={() => jest.fn()}
          isItemLoaded={() => true}
        />
      </MockTheme>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
