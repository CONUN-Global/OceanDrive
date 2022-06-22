// Takes a transaction ID and returns a shortened ID (0x7UY0...9488)
// optional values for determining start and end character count
export default function splitKey(key: string, startChars = 6, endChars = 4) {
  return key.substring(0, startChars) + '....' + key.substring(key.length - endChars, key.length);
}
