import Product from './Product';
import AnimalCardResult from './Animal';
import Mailbox from './Mailbox';
import InboxStatus from './InboxStatus';
import AuthorList from './AuthorList';

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product />
      <Product />
      <Product />

      <h1>Животные</h1>
      <AnimalCardResult />

      <h1>Почта</h1>
      <Mailbox username="Лерка" messages={['Привет', 'Как дела?']} />
      <Mailbox
        username="Димка"
        messages={[
          'Э, чмо, где мои бабки',
          'Йо, ты чо?)))',
          'БАБКИ ГДЕ, ВАСЯ!!!',
        ]}
      />
      <h1>Более понтовая почта</h1>
      <InboxStatus
        username="Лерка"
        unreadMessages={['Блин, спать хочу', 'Мне СРОЧНО НУЖЕН СООН :DDDDDD)']}
      />
      <InboxStatus
        username="Димка"
        unreadMessages={['Тут флекс', 'Мой флекс', 'аргх)))']}
      />
      <InboxStatus username="Понтий Понтович" unreadMessages={[]} />
      <AuthorList />
    </div>
  );
}
