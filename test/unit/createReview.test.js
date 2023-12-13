const sinon = require('sinon');
const {ObjectID} = require('mongodb');
const {createReview} = require('../../lib/modules/reviews-basic');

describe('createReview', () => {
  test('Caso de Prueba 1 - Revisión Existente para el Mismo Usuario y Producto', async () => {
    // Configuración del mock de solicitud con revisión previa
    const mockReq = {
      app: {
        db: {
          reviews: {
            countDocuments: sinon.stub().resolves(1), // Simula una revisión previa
          },
        },
      },
      body: {
        product: new ObjectID().toHexString(),
        title: 'Test Title',
        description: 'Test Description',
        rating: 5,
      },
      session: {
        customerId: new ObjectID().toHexString(),
      },
    };

    // Llamada a la función
    const result = await createReview(mockReq);

    // Verificación del resultado
    expect(result).toEqual({ error: 'Review already submitted' });
  });

  // Caso de Prueba 2: Palabras Ofensivas en el Título
  test('Caso de Prueba 2 - Palabras Ofensivas en el Título', async () => {
    // Configuración del mock de solicitud con título ofensivo
    const mockReq = {
      app: {
        db: {
          reviews: {
            countDocuments: sinon.stub().resolves(0), // Sin revisión previa
          },
        },
      },
      body: {
        product: new ObjectID().toHexString(),
        title: 'Offensive Word',
        description: 'Test Description',
        rating: 5,
      },
      session: {
        customerId: new ObjectID().toHexString(),
      },
    };

    // Llamada a la función
    const result = await createReview(mockReq);

    // Verificación del resultado
    expect(result).toEqual({ error: 'Review was declined. Please check inputs' });
  });

  // Caso de Prueba 3: Creación Exitosa de Nueva Revisión
  test('Caso de Prueba 3 - Creación Exitosa de Nueva Revisión', async () => {
    // Configuración del mock de solicitud con datos válidos
    const mockReq = {
      app: {
        db: {
          reviews: {
            countDocuments: sinon.stub().resolves(0), // Sin revisión previa
            insertOne: sinon.stub().resolves({ /* datos simulados de revisión creada */ }),
          },
        },
      },
      body: {
        product: new ObjectID().toHexString(),
        title: 'Test Title',
        description: 'Test Description',
        rating: 5,
      },
      session: {
        customerId: new ObjectID().toHexString(),
      },
    };

    // Llamada a la función
    const result = await createReview(mockReq);

    // Verificación del resultado
    expect(result).toEqual({ /* datos simulados de revisión creada */ });
  });
});
