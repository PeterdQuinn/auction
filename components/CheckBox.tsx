import React, { useState } from 'react';
import camelCase from 'camelcase';
import FormLabel from './FormLabel';

export interface CheckBoxProps {
  label: string;
}

const CheckBox = ({ label }: CheckBoxProps) => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <FormLabel label={label}>
      <input
        className="checkbox checkbox-secondary"
        checked={check}
        id={camelCase(label)}
        /* if checkbox state change is needed, handle such event */
        onChange={() => setCheck(!check)}
        type="checkbox"
      />
    </FormLabel>
  );
};

export default CheckBox;
