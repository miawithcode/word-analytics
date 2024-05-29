import { useState } from 'react';
import Stats from './Stats';
import Textarea from './Textarea';

const Container = () => {
  const [text, setText] = useState('');

  const numberOfWords = text.split(' ').filter((word) => word !== '').length;
  const numberOfCharacters = text.length;
  const numberOfTwitterCharacters = 220 - text.length;
  const numberOfFacebookCharacters = 2200 - text.length;

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats
        numberOfWords={numberOfWords}
        numberOfCharacters={numberOfCharacters}
        numberOfTwitterCharacters={numberOfTwitterCharacters}
        numberOfFacebookCharacters={numberOfFacebookCharacters}
      />
    </main>
  );
};

export default Container;
