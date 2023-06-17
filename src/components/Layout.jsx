import { Link } from "@inertiajs/react";

const Layout = ({children}) => (
<>
<nav className="border border-gray-400 mb-2 flex justify-center items-center">
       <ul className="flex gap-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/contact">Contact</Link></li>
       </ul>
</nav>
<main className="flex justify-center items-center">
       { children }
</main>
</>
)

export default page => <Layout>{page}</Layout>;