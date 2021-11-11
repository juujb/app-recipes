import React from 'react';
import PropTypes from 'prop-types';

export default function EmbedVideo({ url }) {
  console.log(url);
  const allow = `accelerometer;
  autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture`;
  return (
    <iframe
      width="360"
      src={ url }
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
