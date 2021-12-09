import React, {FC, InputHTMLAttributes} from 'react';
import {BsCheck} from "react-icons/bs";
import {useField} from "formik";

interface FormCheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  name: string,
  required?: boolean,
  className?: string
}

const FormCheckbox: FC<FormCheckbox> = ({label, required, className, ...props}) => {

  const [field, meta] = useField(props.name)

  return (
    <div className={`mb-5 relative space-y-1 ${className}`}>
      <label
        className="block text-sm text-gray-color cursor-pointer flex items-center"
        onPointerDown={e => e.preventDefault()}
      >
        <input
          value={field.value}
          checked={field.checked}
          onChange={field.onChange}
          onBlur={field.onBlur}
          type="checkbox"
          className="form-checkbox opacity-0 h-0 hidden"
          {...props}
        />
        <span
          className="border border-gray-300 w-4 h-4 inline-block rounded-sm mr-2 flex-center">
                    <BsCheck className="flex-shrink-0" size={20} color='#fff'/>
                  </span>
        <span>Я принимаю условие пользовательского соглашения</span>
        {required && <span className="text-red-400"> *</span>}
      </label>
      {meta.error && meta.touched ?
        <span className="text-red-400 text-xs absolute">{meta.error}</span> : null
      }
    </div>
  );
};

export default FormCheckbox;