interface IErrorMessages {
  current: string;
  newError: string;
  confirmError: string;
}

// Takes an Error Messages object (above), takes in a users password we have stored, the users current password as typed by the user,
// a new password, and a match copy of the new password
function useValidate(errs: IErrorMessages, userPassword: string, currentPass: string, newPass: string, confirmPass: string) {
  if (currentPass !== userPassword) {
    errs = { ...errs, current: 'Provided password is incorrect.' };
  } else {
    errs = { ...errs, current: '' };
  }

  if (newPass === userPassword) {
    errs = { ...errs, newError: 'Enter a password that you have not used before.' };
  } else {
    errs = { ...errs, newError: '' };
  }

  // New passwords must not be over 50
  if (newPass.length > 50 || confirmPass.length > 50) {
    errs = { ...errs, confirmError: 'Enter a password that is maximum 50 characters.', newError: 'Enter a password that is maximum 50 characters.' };
  } else {
    errs = { ...errs, newError: '', confirmError: '' };
  }

  // New password and Confirm password don't match
  if (newPass !== confirmPass) {
    errs = { ...errs, confirmError: "Provided passwords don't match.", newError: "Provided passwords don't match." };
  } else if (confirmPass.length < 50 || newPass.length < 50) {
    errs = { ...errs, confirmError: '' };
  }

  return errs;
}

export default useValidate;
