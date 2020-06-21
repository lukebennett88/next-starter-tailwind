import React from 'react';
import PropTypes from 'prop-types';

export function Form({
  action = '/success/',
  children,
  className,
  name = 'contact_form',
}) {
  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action={action}
      className={className}
      method="POST"
      name={name}
    >
      <input type="hidden" name="form-name" value="contact" />
      {children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
};
