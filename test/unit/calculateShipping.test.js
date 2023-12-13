const { calculateShipping } = require('../../lib/modules/shipping-basic');

describe('calculateShipping', () => {
  test('Caso de Prueba 1 - Carrito con Suscripción (Envío Gratuito)', () => {
    const mockReq = {
      session: { cartSubscription: true },
    };
    calculateShipping(100, {}, mockReq);
    expect(mockReq.session.totalCartShipping).toBe(0);
  });

  test('Caso de Prueba 2 - Compra que Alcanza el Umbral de Compra Gratuita', () => {
    const mockReq = { session: {} };
    calculateShipping(120, {}, mockReq);
    expect(mockReq.session.totalCartShipping).toBe(0);
  });

  test('Caso de Prueba 3 - Compra sin País Establecido (Estimación de Envío Nacional)', () => {
    const mockReq = { session: {} };
    calculateShipping(80, {}, mockReq);
    expect(mockReq.session.totalCartShipping).toBe(10); // Costo de envío nacional
  });

  test('Caso de Prueba 4 - Compra con País Diferente al Predeterminado (Envío Internacional)', () => {
    const mockReq = { session: { customerCountry: 'Spain' } };
    calculateShipping(150, {}, mockReq);
    expect(mockReq.session.totalCartShipping).toBe(25); // Costo de envío internacional
  });

  test('Caso de Prueba 5 - Compra con País Igual al Predeterminado (Envío Nacional)', () => {
    const mockReq = { session: { customerCountry: 'Australia' } };
    calculateShipping(60, {}, mockReq);
    expect(mockReq.session.totalCartShipping).toBe(10); // Costo de envío nacional
  });
});
