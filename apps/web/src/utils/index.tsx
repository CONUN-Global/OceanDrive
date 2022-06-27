export const nameShortener  = (givenName: string, requiredLength: number) => {
  let name;
  const len = givenName.length;
  if (len > requiredLength) {
    const arr = givenName.split('');
    arr.splice(15, len - (requiredLength-3), '.', '.', '.');
    const longName = arr.join('');
    name = longName;
  } else {
    name = givenName;
  }

  return name;
}
