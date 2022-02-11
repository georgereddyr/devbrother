const componentProps = [
  {
    name: 'select option',
    type: 'select',
    required: true,
    placeholder: 'Select',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' }
    ],
  },

  {
    name: 'Login',
    type: 'text',
    required: true,
    placeholder: 'Login',
    validations: {
      onChange: [
        {
          name: 'minLength',
          minLength: 6,
        },
      ],
    },
    id: 'login'
  },

  {
    name: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Email',
    validations: {
      onChange: [
        {
          name: 'minLength',
          minLength: 6,
        },
      ],
    },
    id: 'email'
  },

  {
    name: 'password',
    type: 'password',
    required: true,
    placeholder: 'Password',
    validations: {
      onChange: [
        {
          name: 'minLength',
          minLength: 8,
        },
        {
          name: 'password',
        },
      ],
    },
    id: 'password'
  },
  {
    name: 'passwordConfirmation',
    type: 'password',
    required: true,
    placeholder: 'Confirm Password',
    id: 'passwordConfirmation'
  },

  {
    name: 'checkbox',
    type: 'checkbox',
    value: '??',
    required: true,
    id: 'chk'
  }
];

export default componentProps;