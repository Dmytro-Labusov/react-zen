function AnimalCard({ name, type, isCute }) {
  return (
    <div>
      <p>
        Это {name}, она {type},
      </p>
      <p>{isCute ? 'Она милая!' : 'Она не милая.'}</p>
    </div>
  );
}

export default function AnimalCardResult() {
  return (
    <div>
      <AnimalCard name="Лерка" type="Человек" isCute={true} />
      <AnimalCard name="Форфунтир" type="Жаба" isCute={false} />
      <AnimalCard name="Лора" type="Папугай" isCute={true} />
      <AnimalCard name="Маркиза" type="Котица" isCute={true} />
    </div>
  );
}
