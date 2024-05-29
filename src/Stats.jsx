const Stats = () => {
  return (
    <section className="stats">
      <Stat number={0} label="Words" />
      <Stat number={0} label="Characters" />
      <Stat number={280} label="Twitter" />
      <Stat number={2200} label="Facebook" />
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
