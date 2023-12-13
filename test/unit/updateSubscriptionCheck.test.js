const { updateSubscriptionCheck } = require('../../lib/cart');

describe('updateSubscriptionCheck', () => {
  beforeEach(() => {
    // Inicializamos los objetos de contexto antes de cada prueba
    global.mockReq = {
      session: {
        cart: undefined,
        cartSubscription: undefined,
      },
    };
    global.mockRes = undefined;
  });

  test('Camino 1 - Carrito Vacío', () => {
    updateSubscriptionCheck(global.mockReq, global.mockRes);
    expect(global.mockReq.session.cartSubscription).toBeNull();
  });

  test('Camino 2 - Carrito con Elementos (Subcamino 2.1)', () => {
    global.mockReq.session.cart = {
      item1: { productSubscription: true },
    };
    updateSubscriptionCheck(global.mockReq, global.mockRes);
    expect(global.mockReq.session.cartSubscription).toBe(true);
  });

  test('Camino 2 - Carrito con Elementos (Subcamino 2.2)', () => {
    global.mockReq.session.cart = {
      item2: { productSubscription: false },
    };
    updateSubscriptionCheck(global.mockReq, global.mockRes);
    expect(global.mockReq.session.cartSubscription).toBeNull();
  });

  afterEach(() => {
    // Limpiamos los objetos de contexto después de cada prueba
    global.mockReq = undefined;
    global.mockRes = undefined;
  });
});
