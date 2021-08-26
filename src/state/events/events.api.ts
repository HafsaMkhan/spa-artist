import { AxiosPromise, CancelToken } from "axios";
import { api } from "../../utils";

export const getEventsApi = (
  artist: string,
  cancelToken: CancelToken
): Promise<AxiosPromise> => {
  return api.get(`artists/${artist?.toLowerCase()}/events`, { cancelToken });
};
