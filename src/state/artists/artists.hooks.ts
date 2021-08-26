import { useCallback, useEffect, useState } from "react";
import { callCT, setCT } from "src/utils";
import { getArtistsApi } from "./artists.api";
import { GetArtistInterface } from "./artists.interface";

export const useArtist = (artistName?: string) => {
  const [res, setRes] = useState<GetArtistInterface>();
  const actionName = "GET_ARTIST";

  const getQueryArtist = useCallback(async () => {
    callCT(actionName);
    try {
      if (artistName) {
        const { data } = await getArtistsApi(artistName, setCT(actionName));
        setRes(data);
      }
    } catch (error) {
      console.error(error);
    }
  }, [artistName]);

  useEffect(() => {
    artistName && getQueryArtist();
  }, [artistName, getQueryArtist]);

  return { res, getQueryArtist };
};
