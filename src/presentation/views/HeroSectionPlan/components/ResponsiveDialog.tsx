import * as React from 'react'
import { ReactNode } from 'react'

import { Sheet } from '@/components/sheet'
import { Drawer } from '@/presentation/views/HeroSectionPlan/components/Drawer'

import { useMediaQuery } from '../hook/useMediaQuery'

type ResponsiveDialogProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  children: ReactNode
}

export function ResponsiveDialog({ isOpen, onOpenChange, children }: ResponsiveDialogProps) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (isMobile) {
    return (
      <Drawer.Root isOpen={isOpen} onOpenChange={onOpenChange}>
        <Drawer.Content className="bg-[#024632] px-6 md:px-8 py-2 md:py-8 z-20">{children}</Drawer.Content>
      </Drawer.Root>
    )
  }

  return (
    <Sheet.Root isOpen={isOpen} onOpenChange={onOpenChange}>
      <Sheet.Content className="w-full md:max-w-[480px] bg-[#024632] rounded-l-[8px]">{children}</Sheet.Content>
    </Sheet.Root>
  )
}
