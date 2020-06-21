import { useState } from 'react';

export function useForm(initialState) {
  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return { handleChange, state };
}
