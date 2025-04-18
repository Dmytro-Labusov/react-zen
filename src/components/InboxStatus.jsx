const InboxStatus = ({ username, unreadMessages }) => {
  return (
    <>
      <p>Здарова {username}</p>
      <p>
        {unreadMessages.length > 0
          ? `у тебя , ${username} ${unreadMessages.length} непрочитанных сообщений`
          : `Ты нафиг никому не нужен, ${username}`}
      </p>
    </>
  );
};

export default InboxStatus;
