const sinon = require('sinon');
const { indexCustomers } = require('../../lib/indexing');

describe('indexCustomers', () => {
  test('Caso de Prueba 1 - Índice Vacío', async () => {
    // Configuración del mock de la base de datos
    const mockDb = {
      customers: {
        find: sinon.stub().returns({ toArray: sinon.stub().resolves([]) }),
      },
    };

    // Configuración de la aplicación
    const mockApp = {
      db: mockDb,
      customersIndex: undefined,
    };

    // Llamada a la función
    await indexCustomers(mockApp);

    // Verificación del resultado
    expect(mockApp.customersIndex).toBeDefined();
    expect(mockApp.customersIndex.toJSON()).toEqual({}); // Considerando que el índice es un objeto Lunr
  });

  test('Caso de Prueba 2 - Índice con Clientes', async () => {
    // Datos de prueba (clientes)
    const mockCustomers = [
      { _id: 'id1', email: 'cliente1@example.com', firstName: 'Cliente', lastName: 'Uno', phone: '1234567890' },
      { _id: 'id2', email: 'cliente2@example.com', firstName: 'Cliente', lastName: 'Dos', phone: '1234567890' },
      { _id: 'id3', email: 'cliente2@example.com', firstName: 'Cliente', lastName: 'Tres', phone: '1234567890' },
    ];

    // Configuración del mock de la base de datos
    const mockDb = {
      customers: {
        find: sinon.stub().returns({ toArray: sinon.stub().resolves(mockCustomers) }),
      },
    };

    // Configuración de la aplicación
    const mockApp = {
      db: mockDb,
      customersIndex: undefined,
    };

    // Llamada a la función
    await indexCustomers(mockApp);

    // Verificación del resultado
    expect(mockApp.customersIndex).toBeDefined();

    // Verifica que el índice contiene los documentos de clientes
    for (const customer of mockCustomers) {
      const results = mockApp.customersIndex.search(`id:${customer._id}`);
      expect(results).toHaveLength(1);
    }
  });
});