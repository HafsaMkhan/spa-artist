import React from 'react';
import { faFacebook, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ArtistInfoStyled,
  ArtistImg,
  ArtistDetailStyled,
  ArtistIconsDiv,
} from './artistInfoCard.styled';
import { faCalendarAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import { ShouldRender } from 'should-render';

export const ArtistInfo: React.FC<{
  name: string;
  media: string;
  link: string;
  fbLink: string;
  upcomingEvents: number;
}> = ({ name, media, link, fbLink, upcomingEvents }) => {
  const getIcon = (
    link: string,
    icon: IconDefinition,
    label: string,
    className?: string
  ) => (
    <ShouldRender if={link}>
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={icon} size="lg" className={className} />
        <span className="event-text">{label}</span>
      </a>
    </ShouldRender>
  );

  return (
    <ArtistInfoStyled>
      <ArtistImg>
        <img src={media} alt="Img" className="rounded-circle" />
      </ArtistImg>
      <ArtistDetailStyled>
        <p className="artist-name mb-3">{name}</p>
        <ArtistIconsDiv>
          {getIcon(fbLink, faFacebook, 'Fb', 'color-blue')}
          {getIcon(link, faLink, 'Web')}
          {getIcon(link, faCalendarAlt, `${upcomingEvents} Events`)}
        </ArtistIconsDiv>
      </ArtistDetailStyled>
    </ArtistInfoStyled>
  );
};
