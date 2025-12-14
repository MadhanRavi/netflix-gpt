export const validateFormData = (email, password, name, signin) => {
  const emailValid = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(email);
  const passwordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,16}$/.test(password);
  const nameValid = /^[A-Za-z\s]+$/.test(name);

  if (!signin && !nameValid) return "Name is not valid";
  if (!emailValid && !passwordValid) return "Email & Password are not valid";
  if (!emailValid) return "Email is not valid";
  if (!passwordValid) return "Password is not valid";

  return null;
};
