import Link from 'next/link'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-full px-3 py-1 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
    >
      {children}
    </Link>
  )
}
