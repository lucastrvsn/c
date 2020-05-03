declare module '*.scss' {
  interface CSSModuleClassNames {
    [className: string]: string
  }
  const classNames: CSSModuleClassNames
  export = classNames
}
