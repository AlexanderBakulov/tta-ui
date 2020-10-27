

const _apiBase = 'http://localhost:9090/api';

const getResource = async (url) => {
  const res = await fetch(`${_apiBase}${url}`);

  if (!res.ok) {
  throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`)
  }
  return await res.json();
};

export {getResource};

