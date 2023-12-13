const sinon = require('sinon');
const {calculateDiscount} = require('../../lib/modules/discount-voucher');

describe('calculateDiscount', () => {
  test('Caso de Prueba 1 - Descuento de Cantidad (Amount)', () => {
    // Configuración del mock de sesión
    const mockSession = {
      discountCode: 'DESC10',
      totalCartNetAmount: 100,
      totalCartDiscount: undefined,
    };

    // Configuración del mock de descuento
    const mockDiscount = {
      type: 'amount',
      value: 10,
    };

    const mockReq = {
        session: mockSession,
    };

    // Llamada a la función
    calculateDiscount(mockDiscount, mockReq);

    // Verificación del resultado
    expect(mockSession.totalCartDiscount).toBe(10);
  });
});

// Caso de Prueba 2: Descuento por Porcentaje (Percent)
describe('calculateDiscount', () => {
  test('Caso de Prueba 2 - Descuento por Porcentaje (Percent)', () => {
    // Configuración del mock de sesión
    const mockSession = {
      discountCode: 'DESC20',
      totalCartNetAmount: 200,
      totalCartDiscount: undefined,
    };

    // Configuración del mock de descuento
    const mockDiscount = {
      type: 'percent',
      value: 20,
    };

    const mockReq = {
        session: mockSession,
    };

    // Llamada a la función
    calculateDiscount(mockDiscount, mockReq);

    // Verificación del resultado
    expect(mockSession.totalCartDiscount).toBe(40); // 20% de 200 es 40
  });
});

// Caso de Prueba 3: Sin Descuento (Código de Descuento No Existente)
describe('calculateDiscount', () => {
  test('Caso de Prueba 3 - Sin Descuento (Código de Descuento No Existente)', () => {
    // Configuración del mock de sesión sin descuento
    const mockSession = {
      discountCode: undefined,
      totalCartNetAmount: 150,
      totalCartDiscount: undefined,
    };

    // Configuración del mock de descuento
    const mockDiscount = {
      type: 'percent',
      value: 10,
    };

    const mockReq = {
        session: mockSession,
    };

    // Llamada a la función
    calculateDiscount(mockDiscount, mockReq);

    // Verificación del resultado
    expect(mockSession.totalCartDiscount).toBe(0); // No debe haber descuento
  });
});
