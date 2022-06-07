let scrollToBottom = require('scroll-to-bottomjs')

describe(`Visual tests`, () => {
  it('Should take a snapshot of the home page', () => {
    cy.visit('/')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 80, timing: 10 })
    )
    cy.get("img[alt='Developer']").should('be.visible')
    cy.get('.meilisearch-logo-footer').should('be.visible')
    cy.percySnapshot('home-responsive', { widths: [375, 1024, 1440] })
  })

  it('Should take a snapshot of the pricing page', () => {
    cy.visit('/pricing')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot('pricing-responsive', { widths: [375, 1024, 1440] })
  })

  it('Should take a snapshot of the privacy policy page', () => {
    cy.visit('/privacy-policy')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot('privacy-policy')
  })

  it('Should take a snapshot of the terms of use page', () => {
    cy.visit('/terms-of-use')
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow => scrollToBottom({ remoteWindow: cyWindow }))
    cy.percySnapshot('terms-of-use')
  })

  it('Should take a snapshot of the 404 page', () => {
    cy.visit('/test', { failOnStatusCode: false })
    cy.percySnapshot('404')
  })
})
