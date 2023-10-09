import create from 'zustand';

const useApiStore = create((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async (url, method, body = null) => {
    set({ isLoading: true, error: null });
    try {
      const options = {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('La solicitud no se pudo completar.');
      }

      const jsonData = await response.json();
      set({ data: jsonData });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      set({ error: error.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useApiStore;
