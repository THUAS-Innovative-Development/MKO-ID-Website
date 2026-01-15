/* eslint-disable @typescript-eslint/no-explicit-any, @next/next/no-img-element, jsx-a11y/alt-text */
// no runtime React import needed; MDX produces React elements via JSX here
// Using public/ assets: resolve markdown image/PDF paths to /images/* served by Vercel

export function MDComponents(basePath = '') {
  // normalize basePath (no trailing slash, but keep leading slash if present)
  if (basePath && basePath.endsWith('/')) basePath = basePath.slice(0, -1)

  return {
    // resolve relative image paths against the provided basePath
    img: (props: any) => {
      const src: string = props.src || ''
      // absolute or remote URLs: use as-is
      if (src.startsWith('/') || src.startsWith('http://') || src.startsWith('https://')) {
        return <img {...props} src={src} />
      }

      // otherwise resolve against basePath
      const resolved = (basePath ? basePath + '/' : '/') + src.replace(/^\.\/?/, '')
      // ensure only a single leading slash
      const single = resolved.replace(/\/+/g, '/')
      return <img {...props} src={single} />
    },

    // remap heading levels so files that use H1 become H2 on the site, H2 -> H3, etc.
    h1: (props: any) => (
      <h2 className="mt-6 mb-2 text-2xl font-semibold">{props.children}</h2>
    ),
    h2: (props: any) => (
      <h3 className="mt-5 mb-2 text-xl font-semibold">{props.children}</h3>
    ),
    h3: (props: any) => (
      <h4 className="mt-4 mb-1 text-lg font-semibold">{props.children}</h4>
    ),
    h4: (props: any) => (
      <h5 className="mt-3 mb-1 text-base font-semibold">{props.children}</h5>
    ),
    // small paragraph tweaks (optional)
    p: (props: any) => (
      <p className="mt-2 mb-2 leading-relaxed">{props.children}</p>
    ),

    // inline code and fenced code blocks (no external highlighter)
    // - fenced blocks will preserve the language class (e.g. language-js)
    //   so external highlighters (or CSS) can style them if added later.
    // - inline code renders with a small rounded background.
    code: ({ className, children, ...props }: any) => {
      const codeString = String(children).replace(/\n$/, '')

      // Block (fenced) code typically has a language-... className
      if (className && className.startsWith('language-')) {
        return (
          <pre
            className={
              'my-4 overflow-x-auto rounded-md bg-[#0f172a] text-sm font-mono text-white p-4 ' +
              (className || '')
            }
          >
            <code className={className} {...props}>
              {codeString}
            </code>
          </pre>
        )
      }

      // Inline code
      return (
        <code
          {...props}
          className={(className ? className + ' ' : '') + 'rounded bg-muted px-1 py-0.5 text-sm font-mono'}
        >
          {codeString}
        </code>
      )
    },

    // table support with simple responsive styling
    table: (props: any) => (
      <div className="my-4 w-full overflow-x-auto">
        <table className="w-full table-auto border-collapse">{props.children}</table>
      </div>
    ),
    thead: (props: any) => <thead className="bg-muted text-muted-foreground">{props.children}</thead>,
    tbody: (props: any) => <tbody className="bg-card">{props.children}</tbody>,
    tr: (props: any) => <tr className="border-b last:border-b-0">{props.children}</tr>,
    th: (props: any) => (
      <th className="px-3 py-2 text-left text-sm font-semibold">{props.children}</th>
    ),
    td: (props: any) => <td className="px-3 py-2 align-top text-sm">{props.children}</td>,

    // list support (unordered, ordered, and task lists)
    ul: (props: any) => <ul className="mt-2 ml-6 list-disc space-y-1">{props.children}</ul>,
    ol: (props: any) => <ol className="mt-2 ml-6 list-decimal space-y-1">{props.children}</ol>,
    li: (props: any) => {
      // react-markdown + remark-gfm passes a `checked` prop for task list items
      const { checked } = props as any
      if (typeof checked === 'boolean') {
        return (
          <li className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked}
              readOnly
              className="mt-1 h-4 w-4 rounded border"
              aria-hidden="true"
            />
            <span className="flex-1">{props.children}</span>
          </li>
        )
      }

      return <li className="ml-0">{props.children}</li>
    },
    // link styling: underline links from markdown for visibility
    a: (props: any) => (
      <a
        {...props}
        className={
          (props.className ? props.className + ' ' : '') +
          'text-primary underline underline-offset-2 hover:opacity-90'
        }
      >
        {props.children}
      </a>
    ),
  }
}

export default MDComponents;
