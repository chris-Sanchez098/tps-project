const sinon = require('sinon');
const { fixProductIds } = require('../../lib/testhelper');

describe('fixProductIds', () => {
  test('Caso de Prueba 1 - Agregar Identificadores de Producto (ProductIndex Par)', async () => {
    // Configuración del mock de variantes y productos específicos
    const mockJsonVariants = [{ name: 'Variant1' }, { name: 'Variant2' }];
    const mockProducts = [
      { _id: 'product1', name: 'Product1' },
      { _id: 'product2', name: 'Product2' },
      { _id: 'product3', name: 'Product3' },
    ];

    // Llamada a la función
    const result = await fixProductIds(mockJsonVariants, mockProducts);

    // Verificación del resultado
    expect(result).toHaveLength(4); // Se esperan 4 variantes (2 variantes x 2 productos)
    expect(result[0].product).toBe('product1'); // La primera variante debe tener el identificador de product1
    expect(result[1].product).toBe('product1'); // La segunda variante debe tener el identificador de product1
    expect(result[2].product).toBe('product3'); // La tercera variante debe tener el identificador de product3
    expect(result[3].product).toBe('product3'); // La cuarta variante debe tener el identificador de product3
  });
});
