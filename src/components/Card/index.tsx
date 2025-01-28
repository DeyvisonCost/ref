import * as React from 'react'
import { ReactNode } from 'react'

type CardRootProps = {
  children: ReactNode
  className?: string
}

type CardHeaderProps = {
  children: ReactNode
  className?: string
}

type CardTitleProps = {
  children: ReactNode
  className?: string
}

type CardContentProps = {
  children: ReactNode
  className?: string
}

type CardFooterProps = {
  children: ReactNode
  className?: string
}

export const CardRoot = ({ children, className = '' }: CardRootProps) => {
  return <div className={`${className}`}>{children}</div>
}

export const CardHeader = ({ children, className = '' }: CardHeaderProps) => {
  return <div className={`${className}`}>{children}</div>
}

export const CardTitle = ({ children, className = '' }: CardTitleProps) => {
  return <h3 className={`${className}`}>{children}</h3>
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return <div className={`${className}`}>{children}</div>
}

export const CardFooter = ({ children, className = '' }: CardFooterProps) => {
  return <div className={`${className}`}>{children}</div>
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Footer: CardFooter,
}
