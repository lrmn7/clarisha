export default (error?: string | Error): string => {
  let str = 'unknown error';

  if (error) {
    if (typeof error === 'string') {
      str = `🚫 oops: ${error}`;
    } else if (error instanceof Error) {
      str = `🚫 oops: ${error.message}`;
    }
  }

  return str;
};
