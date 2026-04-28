import cy from "@angular/common/locales/extra/cy";


describe('Liste des personnages', () => {

  beforeEach(() => {
    cy.visit('/listePersonnages');
  });

  it('affiche au moins 800 personnages', () => {
    cy.get('.personnage-card', { timeout: 15000 })
      .should('have.length.greaterThan', 800);
  });

  it('affiche Monkey D Luffy en premier', () => {
    cy.get('.personnage-card').first()
      .should('contain.text', 'Luffy');
  });

  it('intercepte l\'appel API et vérifie la réponse', () => {
    cy.intercept('GET', '**/characters/fr').as('getPersonnages');
    cy.visit('/listePersonnages');
    cy.wait('@getPersonnages').then((interception) => {
      expect(interception.response?.statusCode).to.equal(200);
      expect(interception.response?.body.length).to.be.greaterThan(800);
    });
  });

});