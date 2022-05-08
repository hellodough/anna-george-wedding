import React, { FormEvent, useState } from "react";
import { camelCase, capitalize } from "lodash";

export const InputField = ({
  text,
  value,
  error,
  onFieldChange
}: {
  text: string;
  value?: string;
  error?: boolean;
  onFieldChange?: (updatedName: string) => void;
}) => {
  const convertedField: string = camelCase(text);
  const [curVal, setCurVal] = useState(value);

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    setCurVal(e.currentTarget.value);
    if(onFieldChange) {
      onFieldChange(e.currentTarget.value);
    }
  };

  const displayError = error && !curVal;

  return (
    <div>
      <div className="p-1 text-left">
        <label htmlFor={convertedField}>{text}</label>
      </div>
      <input
        name={convertedField}
        type="text"
        className={`border-solid border rounded-md px-3 py-2 w-full${
          displayError ? " border-red-700" : " border-black"
        }`}
        value={curVal}
        onChange={onChange}
      />
      {displayError && !curVal && (
        <p className="text-red-700 pt-1">{`Please enter a valid ${text}`}</p>
      )}
    </div>
  );
};
