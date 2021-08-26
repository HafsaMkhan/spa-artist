import { FC } from "react";
import { faFacebook, IconDefinition } from "@fortawesome/free-brands-svg-icons";
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
  const getIcon = (link: string, icon: IconDefinition, className?: string) =>
    link && (
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} size="lg" className={className} />
      </a>
    );

  return (
    <ArtistInfoStyled>
      <ArtistImg>
        <img src={media} alt="Img" className="rounded-circle" />
      </ArtistImg>
      <ArtistDetailStyled>
        <p className="artist-name mb-3">{name}</p>
        <ArtistIconsDiv>
          {getIcon(fbLink, faFacebook, "color-blue")}
          {getIcon(link, faLink)}
          <a href={`/${name}/events`}>
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            <span className="event-text">{upcomingEvents} Events</span>
          </a>
        </ArtistIconsDiv>
      </ArtistDetailStyled>
    </ArtistInfoStyled>
  );
};
