import { useCallback, useContext, useEffect, useState } from 'react';
import { GetStateInterface, GetState } from '../../common';
import { callCT, setCT } from '../../utils';
import { getArtistsApi } from './artists.api';
import { ArtistContext } from './artists.context';
import { GetArtistInterface } from './artists.interface';

export const useArtist = (artistName?: string) => {
  const [res, setRes] = useState<GetStateInterface<GetArtistInterface>>(GetState);
  const { artists } = useContext(ArtistContext);
  const actionName = 'GET_ARTIST';

  const getQueryArtist = useCallback(async () => {
    setRes((res) => ({ ...res, loading: true, error: null }));
    callCT(actionName);
    try {
      if (artistName) {
        const cacheArtist = artists.find((artist) => artist.name === artistName);
        if (cacheArtist) setRes({ loading: false, error: null, data: cacheArtist });
        else {
          const { data } = await getArtistsApi(artistName, setCT(actionName));
          setRes({ loading: false, error: null, data });
        }
      }
    } catch (error) {
      console.error(error);
      setRes({ loading: false, error, data: null });
    }
  }, [artistName]);

  useEffect(() => {
    artistName && getQueryArtist();
  }, [artistName, getQueryArtist]);

  return { res, getQueryArtist };
};
