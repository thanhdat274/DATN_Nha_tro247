// This is an example of how to access a session from an API route
import { unstable_getServerSession } from 'next-auth/next';

import { authOptions } from '../auth/[...nextauth]';

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  console.log('session', session);

  res.send(JSON.stringify(session, null, 2));
}
