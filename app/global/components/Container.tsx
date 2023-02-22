import type { CSSProperties, FC, ReactNode } from 'react'

type ContainerWithParticlesProps = {
  children: ReactNode
  id?: string
  style?: CSSProperties
}

const Container: FC<ContainerWithParticlesProps> = props => {
  const { children, id, style } = props

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        userSelect: 'none',
        position: 'fixed',
        ...style
      }}
      id={id}
    >
      {children}
    </main>
  )
}

export { Container }
