const Mailbox = ({ username, messages }) => {
  return (
    <>
      <p>Здарова {username}</p>
      {messages.length > 0 && (
        <p>
          У тебя {messages.length} непрочитанных сообщений, {username}
        </p>
      )}
    </>
  );
};

export default Mailbox;
