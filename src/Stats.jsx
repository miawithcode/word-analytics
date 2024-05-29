const Stats = ({
  numberOfWords,
  numberOfCharacters,
  numberOfTwitterCharacters,
  numberOfFacebookCharacters,
}) => {
  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters" />
      <Stat number={numberOfTwitterCharacters} label="Twitter" />
      <Stat number={numberOfFacebookCharacters} label="Facebook" />
    </section>
  );
};

const Stat = ({ number, label }) => {
  return (
    <section className="stat">
      <span className="stat-number">{number}</span>
      <h2 className="stat-label">{label}</h2>
    </section>
  );
};

export default Stats;
