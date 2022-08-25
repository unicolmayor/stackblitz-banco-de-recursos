export default async (options) => {
  return await fetch(`${options.url}`, {
    method: options.method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: options.token,
    },
  }).then((r) => r.json());
};
