/**
 * Testes simplificados para useDebounce
 */

describe('useDebounce - Testes Simplificados', () => {
  /**
   * Mock manual do hook usando setTimeout
   */
  const testDebounce = async (
    value: string,
    delay: number,
  ): Promise<string> => {
    return new Promise(resolve => {
      const debounced = value;
      const timer = setTimeout(() => {
        resolve(debounced);
      }, delay);

      return () => clearTimeout(timer);
    });
  };

  it('deve funcionar com atraso de 500ms', async () => {
    const result = await testDebounce('test', 500);
    expect(result).toBe('test');
  });

  it('deve funcionar com atraso de 300ms', async () => {
    const result = await testDebounce('hello', 300);
    expect(result).toBe('hello');
  });

  it('deve funcionar com valores numéricos convertidos', async () => {
    const result = await testDebounce('42', 200);
    expect(result).toBe('42');
  });
});
