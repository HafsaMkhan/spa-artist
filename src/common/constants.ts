export interface GetStateInterface<T = any> {
  loading: boolean;
  error: unknown;
  data: T | null;
}

export const GetState: GetStateInterface = {
  loading: false,
  error: null,
  data: null,
};
