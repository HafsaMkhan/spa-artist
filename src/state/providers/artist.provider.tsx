import { FC, useEffect, useState } from 'react';
import { GetArtistInterface } from '..';
import { ArtistContext } from '..';

export const ArtistProvider: FC<any> = (props) => {
  const [artists, setArtist] = useState<Array<GetArtistInterface>>([]);

  const pushToHistory = (artist: GetArtistInterface) => {
    const artistArr = artists?.filter((a) => a.id !== artist.id);
    artistArr.push(artist);
    if (artistArr.length > 10) artistArr.slice(artistArr.length - 10);
    setArtist(artistArr);
    localStorage.setItem('artists', JSON.stringify(artistArr));
  };

  useEffect(() => {
    const inMemoryArtist = JSON.parse(localStorage.getItem('artists') || '[]');
    inMemoryArtist && setArtist(inMemoryArtist);
  }, []);

  const value = { artists, pushToHistory };

  return (
    <ArtistContext.Provider value={value}>{props.children}</ArtistContext.Provider>
  );
};
