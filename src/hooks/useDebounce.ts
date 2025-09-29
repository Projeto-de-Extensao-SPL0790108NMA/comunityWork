import { useState, useEffect } from 'react';

/**
 * @description
 * Um Custom Hook que implementa a lógica de "debouncing".
 * Ele recebe um valor (que muda rapidamente, como um texto de busca)
 * e um atraso em milissegundos. Ele retorna uma versão "atrasada" desse valor,
 * que só é atualizada depois que o valor original para de mudar pelo tempo do atraso.
 *
 * @param {T} value O valor a ser "debounceado".
 * @param {number} delay O atraso em milissegundos.
 * @returns {T} O valor "debounceado".
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
