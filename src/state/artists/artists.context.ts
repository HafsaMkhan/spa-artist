import { createContext } from 'react';
import { GetArtistInterface } from './artists.interface';

export const ArtistContext = createContext({
  artists: [] as GetArtistInterface[],
  pushToHistory: (artist: GetArtistInterface) => {
    return;
  },
});
