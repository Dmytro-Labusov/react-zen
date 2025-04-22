import clsx from 'clsx';
import css from './Alert.module.css';

const Alert = ({ variant = 'info', outlined, elevated, children }) => {
  return (
    <p
      className={clsx(css.alert, css[variant], {
        'is-outlined': outlined,
        'is-elevated': elevated,
      })}
    >
      {children}
    </p>
  );
};

export default Alert;
