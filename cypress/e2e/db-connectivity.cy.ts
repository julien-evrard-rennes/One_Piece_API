describe('Connectivité base de données', () => {

  it('le serveur JSON répond bien', () => {
    cy.request({
      url: 'https://one-piece-api-w2x9.onrender.com/personnages',
      method: 'GET',
      failOnStatusCode: true,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

});  