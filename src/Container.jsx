import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';
import { FACEBOOK_MAX_CHARACTERS, TWITTER_MAX_CHARACTERS } from './constants';

const Container = () => {
  const [text, setText] = useState('');

  const stats = {
    numberOfWords: text.split(' ').filter((word) => word !== '').length,
    numberOfCharacters: text.length,
    numberOfTwitterCharacters: TWITTER_MAX_CHARACTERS - text.length,
    numberOfFacebookCharacters: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
