import { render, screen } from '@testing-library/react'

import { Fill } from './index'

import Heading from 'components/typography/heading'
import { StandaloneAndroidIcon } from '@deriv/quill-icons/Standalone'

const title = 'Accordion Title'
const subtitle = 'Accordion Subtitle'
const content = () => <Heading.H2>Content</Heading.H2>
const icon = StandaloneAndroidIcon

describe('Accordion - Fill', () => {
  beforeEach(() => {
    render(
      <Fill title={title} subtitle={subtitle} content={content} icon={icon} />,
    )
  })

  it('should render title correctly', () => {
    expect(screen.getByText(title)).toBeInTheDocument()
  })

  it('should render subtitle correctly', () => {
    expect(screen.getByText(subtitle)).toBeInTheDocument()
  })

  it('should render content correctly', () => {
    const content = screen.getByRole('heading', { name: 'Content', level: 2 })
    expect(content).toBeInTheDocument()
  })

  it('should render icon correctly', () => {
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByTestId('chevron')).toBeInTheDocument()
  })
})
