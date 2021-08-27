import { AxiosError, AxiosResponse } from 'axios';

export interface GetStateInterface<T = any> {
  loading: boolean;
  error: AxiosResponse<any> | AxiosError | null;
  data: T | null;
}

export const GetState: GetStateInterface = {
  loading: false,
  error: null,
  data: null,
};
