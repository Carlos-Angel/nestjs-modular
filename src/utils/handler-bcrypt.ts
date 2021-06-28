import * as bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const isMatchPasswords = async (hash, password) => {
  return await bcrypt.compare(hash, password);
};
