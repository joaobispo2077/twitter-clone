import React from 'react';

import { Container } from './styles';

type NewsProps = {
  range: string;
  headline: string;
  image?: string;
};
// Assuntos do momento no Brasil
const News: React.FC<NewsProps> = ({ range, headline, image }: NewsProps) => {
  return (
    <Container>
      <div>
        <span>{range}</span>
        <strong>{headline}</strong>
      </div>

      {image && <img src={image} alt={headline} />}
    </Container>
  );
};

export default News;
