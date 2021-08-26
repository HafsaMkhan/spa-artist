import { FC } from "react";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ArtistInfoStyled,
  ArtistImg,
  ArtistDetailStyled,
  ArtistIconsDiv,
} from "./artistInfoCard.styled";
import { faCalendarAlt, faLink } from "@fortawesome/free-solid-svg-icons";

export const ArtistInfo: FC<{
  name: string;
  media: string;
  link: string;
  fbLink: string;
  upcomingEvents: number;
}> = ({ name, media, link, fbLink, upcomingEvents }) => {
  return (
      <ArtistInfoStyled>
        <ArtistImg>
          <img src={media} alt="Img" className="rounded-circle" />
        </ArtistImg>
        <ArtistDetailStyled>
          <p className="artist-name mb-3">{name}</p>
          <ArtistIconsDiv>
            <a href={fbLink} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faFacebook}
                size="lg"
                className="color-blue"
              />
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} size="lg" />
            </a>
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            <span className="event-text">{upcomingEvents} Events</span>
          </ArtistIconsDiv>
        </ArtistDetailStyled>
      </ArtistInfoStyled>
  );
};
