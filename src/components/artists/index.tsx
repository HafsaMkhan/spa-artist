import { FC, useContext } from "react";
import { SearchContext, useArtist } from "src/state";
import { ArtistInfo } from "..";
import { ArtistsStyled } from "./artists.styled";

export const Artists: FC = () => {
  const { searchValue } = useContext(SearchContext);
  const { res } = useArtist(searchValue);
  console.log(res);

  return (
    <ArtistsStyled>
      {res && (
        <ArtistInfo
          name={res.name}
          media={res.image_url}
          link={res.url}
          fbLink={res.facebook_url}
          upcomingEvents={res.upcoming_event_count}
        />
      )}
    </ArtistsStyled>
  );
};
