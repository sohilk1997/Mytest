export const validateNumbers = string => {
  const charReg = /^\d+$/;
  if (string === '' || !charReg.test(String(string).toLowerCase())) {
    return false;
  }
  return true;
};
export const validationStrings = {
  allFieldsReq: 'Please fill all required fields',
  onlyNumberValid: 'Balance accepts digits only',
  noBalance: 'Insufficient balance in your wallet',
  appName: 'Ethereum App',
  onSuccess: 'Successfully transferred ethereum',
  onError: 'Something went wrong',
};
