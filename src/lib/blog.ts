import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog')

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  topic?: string
}

export interface BlogPost extends BlogPostMeta {
  content: string
}

function getSlugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, '')
}

function parseFrontmatter(content: string): { data: Record<string, string | undefined>; content: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return { data: {}, content }
  }
  const [, front, body] = match
  const data: Record<string, string | undefined> = {}
  for (const line of front.split(/\r?\n/)) {
    const m = line.match(/^(\w+):\s*(.*)$/)
    if (m) {
      const value = m[2].replace(/^['"]|['"]$/g, '').trim()
      data[m[1]] = value
    }
  }
  return { data, content: body ?? '' }
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return []
  }
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))
  const posts: BlogPostMeta[] = files.map((filename) => {
    const filePath = path.join(CONTENT_DIR, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data } = parseFrontmatter(fileContent)
    return {
      slug: getSlugFromFilename(filename),
      title: data.title ?? '',
      date: data.date ?? '',
      excerpt: data.excerpt ?? '',
      topic: data.topic,
    }
  })
  return posts.sort((a, b) => (b.date > a.date ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = parseFrontmatter(fileContent)
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    excerpt: data.excerpt ?? '',
    topic: data.topic,
    content,
  }
}
