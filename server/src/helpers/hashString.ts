import bcrypt from "bcrypt";

export const hashString = async (str: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(str, salt);
  str = hashedPassword;
  return str;
};

export const compareHashAndString = async (hash: string, str: string) => {
  return await bcrypt.compare(str, hash);
};
