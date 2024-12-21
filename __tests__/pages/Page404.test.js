/**
 * @jest-environment jsdom
 */

import { describe, it, expect, beforeEach } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Page404 from '../../src/pages/layouts/Page404'

describe('pages: [/404], template page, Page404', () => {
  beforeEach(() => {})

  it('page load with 404 texts', () => {
    // check translations texts are present
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>,
    )
    expect(screen.getByText('404')).toBeInTheDocument()
  })
})
