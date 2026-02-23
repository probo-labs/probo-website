import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import { Container } from '@/components/Container'
import { MarkdownContent } from '@/components/MarkdownContent'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

function formatDate(isoDate: string): string {
  const d = new Date(isoDate)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    return { title: 'Post not found' }
  }
  return {
    title: `${post.title} — ProboLabs.ai`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Container className="py-16">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Blog
          </Link>
          <header className="mt-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">
              {post.topic ? `${post.topic} · ` : ''}
              {formatDate(post.date)}
            </p>
          </header>
          <div className="mt-10">
            <MarkdownContent content={post.content} />
          </div>
        </div>
      </Container>
    </main>
  )
}
