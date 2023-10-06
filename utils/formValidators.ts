export const checkUserName = (userName: string): string => {
  const reg = /^[A-Z][a-z]+\s[A-Z][a-z]+$/gm;
  if (!reg.test(userName)) {
    return 'Your name should be like in the example: Max Smith!';
  } else {
    return '';
  }
};

export const checkUserEmail = (emailValue: string): string => {
  const reg = /^\S+@\S+\.\S+$/;
  if (!reg.test(emailValue)) {
    return 'You have entered an invalid email address!';
  } else {
    return '';
  }
};
