/* eslint-disable import/no-dynamic-require */

const { default: templates, notFoundTemplate } = require(process.env
  .REACT_STATIC_TEMPLATES_PATH)
const { registerTemplates } = require('./browser')

registerTemplates(templates, notFoundTemplate)

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept(process.env.REACT_STATIC_TEMPLATES_PATH, () => {
    const { default: templates, notFoundTemplate } = require(process.env
      .REACT_STATIC_TEMPLATES_PATH)
    console.log(templates, notFoundTemplate)
    registerTemplates(templates, notFoundTemplate)
  })
}