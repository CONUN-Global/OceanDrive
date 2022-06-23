interface IErrorMessages {
  current: string;
  newError: string;
  confirmError: string;
}

// Takes an Error Messages object (above), takes in a users password we have stored, the users current password as typed by the user,
// a new password, and a match copy of the new password
function useValidate(userPassword: string, currentPass: string, newPass: string, confirmPass: string) {
  let errs = { current: '', newError: '', confirmError: '' };
  if (currentPass !== userPassword) {
    errs = { ...errs, current: 'Provided password is incorrect.' };
  } else {
    errs = { ...errs, current: '' };
  }

  if (newPass === userPassword) {
    // REUSED PASS
    errs = { ...errs, newError: 'Enter a password that you have not used before.' };
  } else if (newPass.length > 50 || confirmPass.length > 50) {
    // OVER 50 CHARS
    errs = { ...errs, confirmError: 'Enter a password that is maximum 50 characters.', newError: 'Enter a password that is maximum 50 characters.' };
  } else {
    errs = { ...errs, newError: '' };
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
