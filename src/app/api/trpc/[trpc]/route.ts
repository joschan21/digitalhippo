import { appRouter } from '@/trpc';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextApiResponse } from 'next';

const handler = async (req: Request, res: NextApiResponse) => {
  try {
    const result = await fetchRequestHandler({
      endpoint: '/api/trpc',
      req,
      router: appRouter,
      // @ts-expect-error context already passed from express middleware
      createContext: () => ({}),
    });

    // Devuelve la respuesta
    res.status(200).json(result);
  } catch (error) {
    // Maneja cualquier error
    console.error('Error en el manejador de la ruta:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { handler as GET, handler as POST };
