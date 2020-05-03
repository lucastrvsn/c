import React from 'react'
import s from './Alert.module.scss'

export type AlertProps = {
  kind: 'info' | 'positive' | 'negative' | 'warning'
}

export const Alert = ({
  children,
  kind,
  ...rest
}: React.PropsWithChildren<AlertProps>) => (
  <div className={s.alert} {...rest}>
    {children}
  </div>
)

Alert.defaultProps = {
  kind: 'info'
}
