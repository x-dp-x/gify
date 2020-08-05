import Fetch from 'unfetch';

export const fetch = async (endpoint: string) => {
  const response = await Fetch(endpoint);
  return response.json();
};
