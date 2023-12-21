import { User } from '../payload-types';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';
import { NextRequest } from 'next/server';

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value;

  const meRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
    {
      headers: {
        Authorization: `JWT ${token}`,
      },
    }
  );

  const responseText = await meRes.text();
  console.log(responseText); // Imprime el contenido de la respuesta

  try {
    const { user } = JSON.parse(responseText);
    return { user };
  } catch (error) {
    console.error('Error al analizar la respuesta JSON:', error);
    return { user: null }; // o manejar el error de acuerdo a tus necesidades
  }
};
