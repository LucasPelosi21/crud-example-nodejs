import bcrypt from 'bcrypt';

export async function hashPassword(pass: string) {
  const hash = await bcrypt.hash(pass, 10);
  return hash;
}

export async function comparePassword(pass: string, hash: string) {
  const result = await bcrypt.compare(pass, hash);
  return result;
}
