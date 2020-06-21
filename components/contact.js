import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useForm } from '../hooks';
import { Form, Input, TextArea, CheckBox } from './form-elements';

export function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const [notCheckedMessage, setNotCheckedMessage] = useState(false);

  useEffect(() => {
    if (isChecked) {
      setNotCheckedMessage(false);
    }
  }, [isChecked]);

  const { state, handleChange } = useForm({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    subject: '',
    message: '',
    agree_to_privacy_policy: false,
  });

  return (
    <article className="relative overflow-hidden bg-white">
      <div className="relative max-w-xl px-4 py-12 mx-auto bg-gray-50 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="h2">Get in touch with our team</h2>
        </div>
        <div className="mt-12">
          <Form className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8">
            <Input
              name="first_name"
              label="First name"
              value={state.first_name}
              handleChange={handleChange}
            />
            <Input
              name="last_name"
              label="Last name"
              value={state.last_name}
              handleChange={handleChange}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              isFullWidth
              value={state.email}
              handleChange={handleChange}
            />
            <Input
              name="phone_number"
              label="Phone number"
              type="tel"
              isFullWidth
              value={state.phone_number}
              handleChange={handleChange}
            />
            <Input
              name="subject"
              label="Subject"
              isFullWidth
              value={state.subject}
              handleChange={handleChange}
            />
            <TextArea
              name="message"
              label="Message"
              value={state.message}
              handleChange={handleChange}
            />
            <div className="sm:col-span-2">
              <div className="flex items-start">
                <CheckBox
                  label="privacy-policy"
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  notCheckedMessage={notCheckedMessage}
                />
                <div className="ml-3">
                  <p className="text-base leading-6 text-gray-500">
                    By selecting this, you agree to the{' '}
                    <Link href="/privacy-policy/">
                      <a className="font-medium text-gray-700 focus:outline-none focus:underline">
                        Privacy Policy
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            <div className="flex sm:col-span-2">
              <button
                type="submit"
                className="bg-gray-800 px-4 w-full py-2.5 text-base leading-6 font-semibold transition duration-150 ease-in-out text-white rounded-none focus:shadow-outline focus:outline-none focus:bg-gray-700 hover:bg-gray-700 active:bg-gray-900"
              >
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </article>
  );
}
