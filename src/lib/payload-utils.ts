import { User } from '../payload-types'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { NextRequest } from 'next/server'

export const getServerSideUser = async (
  cookies: NextRequest['cookies'] | ReadonlyRequestCookies
) => {
  const token = cookies.get('payload-token')?.value

  try {
    const meRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: `JWT ${token}`,
        },
      }
    );
  
    if (!meRes.ok) {
      throw new Error(`Error: ${meRes.status} - ${meRes.statusText}`);
    }
  
    const { user } = await meRes.json();
  
    return { user };
  } catch (error) {
    console.error('Error al realizar la solicitud:', error);
    return { user: null };
  }
}