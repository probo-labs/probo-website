'use client'

import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from 'remark-gfm'

type CodeProps = React.ComponentPropsWithoutRef<'code'> & {
  node?: { properties?: { className?: string[] } }
  inline?: boolean
}

function isBlockCode(className?: string | string[]): boolean {
  if (!className) return false
  const classes = Array.isArray(className) ? className : [className]
  return classes.some((c) => typeof c === 'string' && c.startsWith('language-'))
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeHighlight]}
        components={{
          pre: ({ children, ...props }) => (
            <pre
              className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-sm"
              {...props}
            >
              {children}
            </pre>
          ),
          code: ({ children, className, node, inline, ...props }: CodeProps) => {
            const isBlock =
              inline === false || isBlockCode(node?.properties?.className ?? className)
            if (isBlock) {
              return (
                <code
                  className="block bg-transparent p-0 text-slate-100"
                  {...props}
                >
                  {children}
                </code>
              )
            }
            return (
              <code
                className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-slate-800"
                {...props}
              >
                {children}
              </code>
            )
          },
          img: ({ src, alt, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt || ''}
              className="my-4 rounded-lg"
              {...props}
            />
          ),
          a: ({ children, href, ...props }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
