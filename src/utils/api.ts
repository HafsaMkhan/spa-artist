import axios, { CancelToken } from 'axios';

const cancelToken = axios.CancelToken;
const CancellationTokens: any = {};

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://rest.bandsintown.com',
  params: { app_id: process.env.REACT_APP_API_KEY || 'abc' },
});

export const setCT = (actionName: string): CancelToken => {
  return new cancelToken((ct: any) => (CancellationTokens[actionName] = ct));
};

export const callCT = (actionName: string): void => {
  if (CancellationTokens[actionName]) {
    CancellationTokens[actionName]();
  }
};
