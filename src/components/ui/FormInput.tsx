import React, { HTMLProps } from 'react';
import { useField } from 'formik';

interface FormInputProps extends HTMLProps<HTMLInputElement> {
  placeholder?: string
}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({
    label, required, className, ...props
  }, ref) => {
    const [field, meta] = useField(props.name!)

    return (
      <div className={`mb-3 relative pb-3 space-y-1 ${className}`}>
        <label
          htmlFor={props.id || props.name}
          className="block font-medium text-lg"
        >
          {label}
          {required && <span className="text-red-400"> *</span>}
        </label>
        <input
          className="input w-full"
          ref={ref}
          {...props}
          value={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
        />
        {meta.error && meta.touched
          ? <span className="text-red-400 text-xs absolute">{meta.error}</span> : null}
      </div>
    );
  },
);

FormInput.displayName = 'FormInput'

export default FormInput;
