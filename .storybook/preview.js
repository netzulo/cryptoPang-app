import './../public/output.css'
import 'animate.css'
import './../src/assets/css/tmpl.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
