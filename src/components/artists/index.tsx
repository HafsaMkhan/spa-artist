import { FC } from "react";
import { useParams } from "react-router-dom";
import { useArtist } from "src/state";
import { ArtistInfo } from "..";
import { FullScreenLoader } from "../loader";
import { NoSearchResults } from "../no-search-results";
import { ArtistsStyled } from "./artists.styled";

export const Artists: FC = () => {
  const { artist } = useParams<{ artist: string }>();
  const {
    res: { data, loading },
  } = useArtist(artist);

  return (
    <ArtistsStyled>
      {loading ? (
        <FullScreenLoader />
      ) : data ? (
        <ArtistInfo
          name={data.name}
          media={data.image_url}
          link={data.url}
          fbLink={data.facebook_url}
          upcomingEvents={data.upcoming_event_count}
        />
      ) : (
        <NoSearchResults />
      )}
    </ArtistsStyled>
  );
};
