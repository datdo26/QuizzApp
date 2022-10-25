import * as Yup from 'yup';
export const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(5, 'Username must have min 5 characters')
    .max(10, 'Username have max 10 characters'),
});

//validate email
export const isValidEmail = stringEmail => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};
export const isValidUsername = stringUsername => {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]$/.test(stringUsername);
};

//validate password
export const isValidPassword = stringPassword => {
  return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(stringPassword);
};
