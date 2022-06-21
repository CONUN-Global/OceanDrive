interface IErrorMessages {
  current: string;
  newError: string;
  confirmError: string;
}

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

  // New password and Confirm password don't match
  if (newPass !== confirmPass) {
    errs = { ...errs, confirmError: "Provided password doesn't match" };
  } else {
    errs = { ...errs, confirmError: '' };
  }

  return errs;
}

export default useValidate;
