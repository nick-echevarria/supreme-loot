import { InputHTMLAttributes } from 'react';
type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({
  label,
  ...otherProps
}: FormInputProps) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
