import React, {FC, InputHTMLAttributes} from 'react';
import {useField} from "formik";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string,
  type: string,
  required?: boolean,
  className?: string
}

const FormInput: FC<IFormInput> = ({label, required, className, ...props}) => {

  const [field, meta] = useField(props.name)

  return (
    <div className={`mb-3 relative pb-3 space-y-1 ${className}`}>
      <label
        htmlFor={props.id || props.name}
        className="block font-medium text-lg">
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      <input
        className="input w-full"
        {...props}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
      {meta.error && meta.touched ?
        <span className="text-red-400 text-xs absolute">{meta.error}</span> : null
      }
    </div>
  );
};

export default FormInput;