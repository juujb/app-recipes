import React from 'react';
import PropTypes from 'prop-types';

export default function EmbedVideo({ url }) {
  const STRING_ID_LENGTH = 32;
  const allow = `accelerometer;
  autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture`;
  const id = url.slice(STRING_ID_LENGTH);
  return (
    <iframe
      width="360"
      src={ `https://www.youtube.com/embed/${id}` }
      title="YouTube video player"
      frameBorder="0"
      allow={ allow }
      allowFullScreen="allowfullscreen"
    />
  );
}

EmbedVideo.propTypes = {
  url: PropTypes.string.isRequired,
};
