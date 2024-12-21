import React from 'react'
import Page404 from '../../../src/pages/layouts/Page404'

export default {
  title: 'pages/Page404',
  component: Page404,
  tags: ['autodocs'],
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (args: any) => <Page404 {...args} />

export const Base = Template.bind({})
