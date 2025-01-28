import * as React from 'react'
import { ReactNode } from 'react'

type SheetRootProps = {
  children: ReactNode
  className?: string
  isOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

type SheetTriggerProps = {
  children: ReactNode
  className?: string
  asChild?: boolean
}

type SheetContentProps = {
  children: ReactNode
  className?: string
  side?: 'top' | 'right' | 'bottom' | 'left'
}

type SheetHeaderProps = {
  children: ReactNode
  className?: string
}

type SheetFooterProps = {
  children: ReactNode
  className?: string
}

type SheetTitleProps = {
  children: ReactNode
  className?: string
}

type SheetDescriptionProps = {
  children: ReactNode
  className?: string
}

export const SheetRoot = ({ children, className = '', isOpen, onOpenChange }: SheetRootProps) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'} ${className}`}>
      <div className="bg-black/50 fixed inset-0" onClick={() => onOpenChange?.(false)} />
      {children}
    </div>
  )
}

export const SheetTrigger = ({ children, className = '', asChild }: SheetTriggerProps) => {
  return <div className={`cursor-pointer ${className}`}>{asChild ? children : <button>{children}</button>}</div>
}

export const SheetContent = ({ children, className = '', side = 'right' }: SheetContentProps) => {
  const sideClasses = {
    top: 'top-0 left-0 right-0',
    right: 'top-0 right-0 h-full',
    bottom: 'bottom-0 left-0 right-0',
    left: 'top-0 left-0 h-full',
  }

  return <div className={`fixed p-6 shadow-lg ${sideClasses[side]} ${className}`}>{children}</div>
}

export const SheetHeader = ({ children, className = '' }: SheetHeaderProps) => {
  return <div className={`mb-4 ${className}`}>{children}</div>
}

export const SheetFooter = ({ children, className = '' }: SheetFooterProps) => {
  return <div className={`mt-4 flex justify-end gap-2 ${className}`}>{children}</div>
}

export const SheetTitle = ({ children, className = '' }: SheetTitleProps) => {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
}

export const SheetDescription = ({ children, className = '' }: SheetDescriptionProps) => {
  return <p className={`text-sm text-gray-500 ${className}`}>{children}</p>
}

export const Sheet = {
  Root: SheetRoot,
  Trigger: SheetTrigger,
  Content: SheetContent,
  Header: SheetHeader,
  Footer: SheetFooter,
  Title: SheetTitle,
  Description: SheetDescription,
}
