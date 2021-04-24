import clsx from 'clsx';
import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

import styles from '~/styles/components/common/Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { variant, className, children, ...rest },
  ref,
) => (
  <button
    ref={ref}
    className={clsx(styles.container, styles[variant], className)}
    type="button"
    {...rest}
  >
    {children}
  </button>
);

export default forwardRef(Button);
