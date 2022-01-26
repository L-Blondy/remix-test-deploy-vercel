import { Link, Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
   return {
      title: 'New Remix App',
   };
};

export default function App() {
   return (
      <html lang='en'>
         <head>
            <meta charSet='utf-8' />
            <meta name='viewport' content='width=device-width,initial-scale=1' />
            <Meta />
            <Links />
         </head>
         <body>
            <nav
               style={{
                  display: 'flex',
                  gap: '2rem',
               }}
            >
               <Link to='/'>Home</Link>
               <Link to='/posts'>Posts</Link>
            </nav>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
         </body>
      </html>
   );
}
