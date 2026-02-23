import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import { Container } from '@/components/Container'

function formatDate(isoDate: string): string {
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Blog
        </h1>
        <ul className="mt-10 space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-slate-200 p-6 transition hover:bg-slate-50 hover:border-slate-300"
              >
                <h2 className="text-xl font-semibold text-slate-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-slate-600">{post.excerpt}</p>
                <p className="mt-3 text-sm text-slate-500">
                  {post.topic ? `${post.topic} · ` : ''}
                  {formatDate(post.date)}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  )
}
