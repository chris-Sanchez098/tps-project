const sinon = require('sinon');
const {updateSubscriptionCheck, updateTotalCart } = require('../../lib/cart');

describe('updateTotalCart', () => {
    test('Caso de Prueba 1 - Carrito Vacío', async () => {
        // Configuración del mock de sesión (carrito vacío)
        const mockSession = {
          totalCartAmount: 10, // Valor previo
          totalCartItems: 5,   // Valor previo
          totalCartProducts: 3, // Valor previo
          cart: null,           // Carrito vacío
          totalCartNetAmount: undefined,
          totalCartShipping: undefined,
          totalCartDiscount: undefined,
          discountCode: undefined,
        };
    
        // Configuración del mock de aplicación
        const mockApp = {
          db: {}, // Puedes agregar más mocks según sea necesario
        };
    
        // Llamada a la función
        await updateTotalCart({ app: mockApp, session: mockSession }, undefined);
    
        // Verificación del resultado
        expect(mockSession.totalCartAmount).toBe(10); // No debe cambiar
        expect(mockSession.totalCartItems).toBe(5);    // No debe cambiar
        expect(mockSession.totalCartProducts).toBe(3); // No debe cambiar
        expect(mockSession.totalCartNetAmount).toBeUndefined();
        expect(mockSession.totalCartShipping).toBeUndefined();
        expect(mockSession.totalCartDiscount).toBeUndefined();
        expect(mockSession.discountCode).toBeUndefined();
    });

    test('Caso de Prueba 2 - Carrito con Elementos', async () => {
    // Configuración del mock de sesión (carrito con elementos)
        const mockSession = {
        totalCartAmount: 20, // Valor previo
        totalCartItems: 7,   // Valor previo
        totalCartProducts: 5, // Valor previo
        cart: {
            item1: { totalItemPrice: 15, quantity: 2 },
            item2: { totalItemPrice: 10, quantity: 1 },
        }, // Carrito con elementos
        totalCartNetAmount: undefined,
        totalCartShipping: undefined,
        totalCartDiscount: undefined,
        discountCode: 'DESC10',
        };

        // Configuración del mock de la base de datos
        const mockDb = {
        discounts: {
            findOne: sinon.stub().resolves({ /* datos simulados de descuento */ }),
        },
        // Puedes agregar más configuraciones según sea necesario
        };

        // Configuración del mock de la aplicación
        const mockApp = {
        db: mockDb,
        // Puedes agregar más configuraciones según sea necesario
        };

        // Configuración del mock de descuento
        const mockDiscountModule = {
        calculateDiscount: sinon.stub(),
        };

        // Configuración del mock de módulos cargados
        const mockLoadedModules = {
        shipping: {
            calculateShipping: sinon.stub(),
        },
        discount: mockDiscountModule,
        };

        // Llamada a la función
        await updateTotalCart({ app: mockApp, session: mockSession }, undefined);

        // Verificación del resultado
        expect(mockSession.totalCartAmount).toBe(20); // No debe cambiar
        expect(mockSession.totalCartItems).toBe(3);    // Se espera que cambie
        expect(mockSession.totalCartProducts).toBe(5); // No debe cambiar
        expect(mockSession.totalCartNetAmount).toBe(20); // Se espera que sea igual a totalCartAmount inicial
        // Puedes agregar más verificaciones según sea necesario
        sinon.assert.calledOnce(mockLoadedModules.shipping.calculateShipping);
        sinon.assert.calledWith(mockDiscountModule.calculateDiscount, sinon.match.any, sinon.match.any);
    });
});
