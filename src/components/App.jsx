import Product from './Product';
import AnimalCardResult from './Animal';
import Mailbox from './Mailbox';
import InboxStatus from './InboxStatus';
import AuthorList from './AuthorList';
import Alert from './alert';

const alertStyles = {
  backgroundColor: 'purple',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  margin: '10px 0',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  textTransform: 'uppercase',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  transition: 'background-color 0.3s ease',
};

export default function App() {
  return (
    <div>
      <h1 style={alertStyles}>Best selling</h1>

      <Product />
      <Product />
      <Product />

      <h1 style={alertStyles}>Животные</h1>
      <AnimalCardResult />

      <h1 style={alertStyles}>Почта</h1>
      <Mailbox username="Лерка" messages={['Привет', 'Как дела?']} />
      <Mailbox
        username="Димка"
        messages={[
          'Э, чмо, где мои бабки',
          'Йо, ты чо?)))',
          'БАБКИ ГДЕ, ВАСЯ!!!',
        ]}
      />
      <h1 style={alertStyles}>Более понтовая почта</h1>
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
      <AuthorList />

      <Alert variant="success">Успешно!</Alert>
      <Alert variant="error" outlined>
        Ошибка, но с обводкой
      </Alert>
      <Alert variant="info" elevated outlined>
        Инфа + стиль
      </Alert>
    </div>
  );
}
