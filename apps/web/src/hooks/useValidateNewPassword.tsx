const ErrMsg = {
  incorrect: 'Provided password is incorrect.',
  new: 'Enter a password that you have not used before.',
  length: 'Enter a password that is maximum 50 characters.',
  match: "Provided passwords don't match.",
};

function useValidate(userPassword: string, currentPass: string, newPass: string, confirmPass: string) {
  let errs = { current: '', newError: '', confirmError: '' };

  if (currentPass !== userPassword) {
    errs = { ...errs, current: ErrMsg.incorrect };
  }

  if (newPass === userPassword) {
    errs = { ...errs, newError: ErrMsg.new };
  }

  if (newPass.length > 50 || confirmPass.length > 50) {
    errs = { ...errs, confirmError: ErrMsg.length, newError: ErrMsg.length };
  }

  if (newPass !== confirmPass) {
    errs = { ...errs, confirmError: ErrMsg.match, newError: ErrMsg.match };
  }

  return errs;
}

export default useValidate;
