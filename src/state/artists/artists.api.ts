import { AxiosPromise, CancelToken } from "axios";
import { api } from "../../utils";

export const getArtistsApi = (
  artist: string,
  cancelToken: CancelToken
): Promise<AxiosPromise> => {
  return api.get(`artists/${artist?.toLowerCase()}`, { cancelToken });
};
