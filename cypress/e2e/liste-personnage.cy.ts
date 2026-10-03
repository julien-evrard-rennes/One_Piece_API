describe('Liste des personnages', () => {

  beforeEach(() => {
    cy.visit('/listePersonnages');
  });

  it('affiche au moins 700 personnages', () => {
    cy.get('tr', { timeout: 30000 })
      .should('have.length.greaterThan', 700);
  });

  it('affiche Monkey D Luffy en premier', () => {
    cy.get('tbody tr').first()
      .should('contain.text', 'Luffy');
  });

});