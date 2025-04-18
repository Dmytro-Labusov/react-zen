const favAuthors = [
  { id: 'id-1', name: 'Marcus Aurelius' },
  { id: 'id-2', name: 'Ernest Hamingway' },
  { id: 'id-3', name: 'Jack London' },
  { id: 'id-4', name: 'George Orwell' },
  { id: 'id-5', name: 'Jules Verne' },
  { id: 'id-6', name: 'Isaac Asimov' },
  { id: 'id-7', name: 'F.c.fitzgerald' },
  { id: 'id-8', name: 'H, P, Lovecraft' },
  { id: 'id-9', name: 'Ray Bradbury' },
  { id: 'id-10', name: 'Arthur Conan Doyle' },
  { id: 'id-11', name: 'Stephen King' },
];

const AuthorsList = ({ authors }) => {
  return (
    <ul>
      {authors.map((author) => {
        return <li key={author.id}>{author.name}</li>;
      })}
    </ul>
  );
};

const AuthorsApp = () => {
  return (
    <div>
      <h1>Самые жеские авторы</h1>
      <AuthorsList authors={favAuthors} />
    </div>
  );
};

export default AuthorsApp;
