import { useEffect } from 'react';

interface BlogContentProps {
  content: string;
}

const BlogContent = ({ content }: BlogContentProps) => {
  useEffect(() => {
    // Inject styles for embedded content (tables, etc.)
    const styleId = 'blog-content-embedded-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .blog-content {
          color: hsl(var(--foreground));
          line-height: 1.75;
        }
        
        .blog-content h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
          color: hsl(var(--foreground));
        }
        
        .blog-content h1:first-child {
          margin-top: 0;
        }
        
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
          color: hsl(var(--foreground));
        }
        
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          line-height: 1.4;
          color: hsl(var(--foreground));
        }
        
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          line-height: 1.4;
          color: hsl(var(--foreground));
        }
        
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.75;
          color: hsl(var(--foreground));
        }
        
        .blog-content p:last-child {
          margin-bottom: 0;
        }
        
        .blog-content strong {
          font-weight: 600;
          color: hsl(var(--foreground));
        }
        
        .blog-content em {
          font-style: italic;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin-top: 1rem;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        
        .blog-content ul {
          list-style-type: disc;
        }
        
        .blog-content ol {
          list-style-type: decimal;
        }
        
        .blog-content li {
          margin-bottom: 0.5rem;
          line-height: 1.75;
          color: hsl(var(--foreground));
        }
        
        .blog-content li > ul,
        .blog-content li > ol {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .blog-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s;
        }
        
        .blog-content a:hover {
          color: #962C5D;
        }
        
        .blog-content code {
          background-color: hsl(var(--muted));
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-size: 0.875em;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          color: hsl(var(--foreground));
        }
        
        .blog-content pre {
          background-color: hsl(var(--muted));
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin-top: 1.25rem;
          margin-bottom: 1.25rem;
          line-height: 1.5;
        }
        
        .blog-content pre code {
          background: none;
          padding: 0;
          font-size: 0.875rem;
        }
        
        .blog-content blockquote {
          border-left: 4px solid hsl(var(--primary));
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: hsl(var(--muted-foreground));
          font-style: italic;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }
        
        .blog-content figure {
          margin: 1.5rem 0;
        }
        
        .blog-content figure img {
          margin: 0;
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.875rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.75rem;
          border: 1px solid hsl(var(--border));
          text-align: left;
        }
        
        .blog-content table th {
          background-color: hsl(var(--muted));
          font-weight: 600;
        }
        
        .blog-content hr {
          border: none;
          border-top: 1px solid hsl(var(--border));
          margin: 2rem 0;
        }
        
        /* Preserve embedded styles from content (like tables with custom classes) */
        .blog-content [data-rt-embed-type] {
          margin: 1.5rem 0;
        }
        
        .blog-content [data-rt-embed-type] iframe {
          width: 100%;
          max-width: 100%;
          border-radius: 0.5rem;
        }
        
        /* Style embedded divs with custom classes */
        .blog-content div[class*="table"],
        .blog-content div[class*="container"] {
          margin: 1.5rem 0;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;

