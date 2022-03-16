import React from 'react';
import renderer from 'react-test-renderer';
import { MockTheme } from '@tests/utils';
import SingleTransaction from '.';

// ==================================
// unit tests
// ==================================
describe('components: SingleTransaction', () => {
  it('matches snapshot', () => {
    const component = renderer.create(
      <MockTheme>
        <SingleTransaction
          slot={<div>slot</div>}
          hash="hash"
          time="2021-07-13T08:00:00"
          numInstructions="1,000"
          instructions={[
            {
              type: <div>type</div>,
              message: <div>message</div>,
            },
          ]}
          result={<div>result</div>}
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
