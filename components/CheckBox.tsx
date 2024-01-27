import React, { useState } from 'react';
import camelCase from 'camelcase';
import FormLabel from './FormLabel';

export interface CheckBoxProps {
  label: string;
}

const CheckBox = ({ label }: CheckBoxProps) => {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <div className="form-control">
      <FormLabel label={label} />
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input
          id={camelCase(label)}
          type="checkbox"
          checked={check}
          className="checkbox"
          /* if checkbox state change is needed, handle such event */
          onChange={() => setCheck(!check)}
        />
      </label>
    </div>
  );
};

export default CheckBox;
