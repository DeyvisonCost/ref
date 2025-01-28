import * as React from 'react'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Accordion } from './Accordion'

jest.mock('swiper/react', () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SwiperSlide: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

jest.mock('swiper/modules', () => ({
  Autoplay: jest.fn(),
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}))
jest.mock('swiper/css', () => jest.fn())
jest.mock('swiper/css/pagination', () => jest.fn())
jest.mock('swiper/css/navigation', () => jest.fn())

describe('Accordion tests', () => {
  it('should render Accordion component', async () => {
    render(<Accordion title="Teste titulo" description="Teste descrição" />)

    expect(screen.getByText('Teste titulo')).toBeDefined()
  })

  it('should open Accordion component', async () => {
    render(<Accordion title="Teste titulo" description="Teste descrição" />)

    expect(screen.getByText('Teste titulo')).toBeDefined()
    expect(screen.queryByText('add')).toBeDefined()
    expect(screen.queryByText('remove')).toBeNull()

    await userEvent.click(screen.getByText('Teste titulo'))
    expect(screen.queryByText('remove')).toBeDefined()
    expect(screen.queryByText('add')).toBeNull()
  })

  it('should close Accordion component after opening', async () => {
    render(<Accordion title="Teste titulo" description="Teste descrição" />)

    expect(screen.getByText('Teste titulo')).toBeDefined()
    expect(screen.queryByText('add')).toBeDefined()
    expect(screen.queryByText('remove')).toBeNull()

    await userEvent.click(screen.getByText('Teste titulo'))
    expect(screen.queryByText('remove')).toBeDefined()
    expect(screen.queryByText('add')).toBeNull()

    await userEvent.click(screen.getByText('Teste titulo'))
    expect(screen.queryByText('add')).toBeDefined()
    expect(screen.queryByText('remove')).toBeNull()
  })
})
