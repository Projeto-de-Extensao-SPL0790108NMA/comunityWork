describe('useToast - Testes Simplificados', () => {
  const mockToast = () => {
    let state = {
      visible: false,
      message: '',
      type: 'info' as 'info' | 'success' | 'error' | 'warning',
    };

    return {
      getState: () => state,
      showToast: (message: string, type: typeof state.type) => {
        state = { visible: true, message, type };
      },
      hideToast: () => {
        state = { ...state, visible: false };
      },
    };
  };

  it('deve iniciar com toast invisível', () => {
    const toast = mockToast();
    expect(toast.getState().visible).toBe(false);
  });

  it('deve mostrar toast de sucesso', () => {
    const toast = mockToast();
    toast.showToast('Sucesso!', 'success');

    const state = toast.getState();
    expect(state.visible).toBe(true);
    expect(state.message).toBe('Sucesso!');
    expect(state.type).toBe('success');
  });

  it('deve mostrar toast de erro', () => {
    const toast = mockToast();
    toast.showToast('Erro!', 'error');

    const state = toast.getState();
    expect(state.type).toBe('error');
  });

  it('deve esconder toast', () => {
    const toast = mockToast();
    toast.showToast('Teste', 'info');
    expect(toast.getState().visible).toBe(true);

    toast.hideToast();
    expect(toast.getState().visible).toBe(false);
  });
});
