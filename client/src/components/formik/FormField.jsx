import React from 'react';
import './FormField.css';
import { Field } from 'formik';
import classNames from 'classnames';
const FormField = ({
  rows,
  name,
  type,
  as,
  placeholder,
  label,
  form,
  labelIcon,
  children,
}) => {
  const { errors, touched } = form;
  const error = errors?.[name] && touched?.[name];
  return (
    <div className="form-input">
      {label && (
        <p className="input-label">
          {labelIcon} {label}
        </p>
      )}
      <div className="field-wrapper">
        <Field
          rows={rows}
          as={as}
          name={name}
          type={type}
          className={classNames('field input-outline', {
            'input-error-outline': error,
          })}
          placeholder={placeholder}>
          {children}
        </Field>
      </div>
      {form && error && (
        <div className="error-wrapper">
          <p className="error-text">* {errors?.[name]}</p>
        </div>
      )}
    </div>
  );
};

export default FormField;
