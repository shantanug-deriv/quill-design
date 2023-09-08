import clsx from 'clsx'

export const AppLayout = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx('bg-semantic-background-primary-container', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default AppLayout
