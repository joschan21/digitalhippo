import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';

const handler = async (req: Request) => {
  try {
    const result = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      // @ts-expect-error context already passed from express middleware
      createContext: () => ({}),
    });

    // Devuelve la respuesta obtenida
    return new Response(JSON.stringify(result), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Maneja cualquier error y devuelve una respuesta de error apropiada
    console.error('Error handling request:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
};

export { handler as GET, handler as POST };
