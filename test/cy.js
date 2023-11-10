cy.visit('http://localhost:1111/checkout/information');
cy.get('#customerLoginEmail').click();
cy.get('#customerLoginEmail').type('correo1@pepe.com');
cy.get('#customerLoginPassword').type('1');
cy.get('#customerLoginPassword').dblclick();
