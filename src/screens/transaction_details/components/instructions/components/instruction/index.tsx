import React from 'react';
import { InstructionType } from '../../../../types';

const Instruction: React.FC<{instruction: InstructionType[]} & ComponentDefault> = (props) => {
  return (
    <div>
      <div>title and everything</div>
      <div>body</div>
    </div>
  );
};

export default Instruction;
