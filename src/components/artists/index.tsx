import { FC, useContext } from "react";
import { SearchContext, useArtist } from "src/state";
import { ArtistInfo } from "..";
import { FullScreenLoader } from "../loader";
import { ArtistsStyled } from "./artists.styled";

export const Artists: FC = () => {
  const { searchValue } = useContext(SearchContext);
  const {
    res: { data, loading },
  } = useArtist(searchValue);

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
        <div className="not-found">
          <img
            src="/images/not-found.png"
            className="img-fluid"
            alt="No Search Results"
          />
        </div>
      )}
    </ArtistsStyled>
  );
};
