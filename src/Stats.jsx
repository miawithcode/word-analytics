const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label="Words" />
      <Stat number={stats.numberOfCharacters} label="Characters" />
      <Stat number={stats.numberOfTwitterCharacters} label="Twitter" />
      <Stat number={stats.numberOfFacebookCharacters} label="Facebook" />
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
