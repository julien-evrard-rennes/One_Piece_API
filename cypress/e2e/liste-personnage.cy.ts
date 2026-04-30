describe('Liste des personnages', () => {

  beforeEach(() => {
    cy.visit('/listePersonnages');
  });

  it('affiche au moins 800 personnages', () => {
    cy.get('tr', { timeout: 15000 })
      .should('have.length.greaterThan', 800);
  });

  it('affiche Monkey D Luffy en premier', () => {
    cy.get('tbody tr').first()
      .should('contain.text', 'Luffy');
  });

});