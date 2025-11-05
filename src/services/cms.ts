import type { BlogPost, CaseStudy } from "@/types/content";

// Dynamically import all blog posts using Vite's glob import
const blogPostsModules = import.meta.glob<BlogPost>(
  "@/content/blog/*.json",
  { eager: true }
);

// Dynamically import all markdown files as raw text
const markdownModules = import.meta.glob<string>(
  "@/content/blog/*.md",
  { 
    eager: true,
    query: '?raw',
    import: 'default'
  }
);

// Convert imported data to typed objects
// Vite's glob import for JSON files returns the JSON object directly as default
const blogPostsData: BlogPost[] = Object.values(blogPostsModules).map(
  (module) => {
    const post = (module as any).default || module as BlogPost;
    // Load markdown content if contentPath exists
    if (post.contentPath) {
      // Try different path formats that Vite might use
      const markdownPath1 = `@/content/blog/${post.contentPath}`;
      const markdownPath2 = `/src/content/blog/${post.contentPath}`;
      const markdownPath3 = `./${post.contentPath}`;
      
      // Check all possible paths
      const markdownModule = markdownModules[markdownPath1] || 
                            markdownModules[markdownPath2] ||
                            Object.entries(markdownModules).find(([path]) => 
                              path.includes(post.contentPath!)
                            )?.[1];
      
      if (markdownModule) {
        // Markdown content is loaded as string
        post.content = typeof markdownModule === 'string' ? markdownModule : String(markdownModule);
      } else {
        // Fallback: if markdown not found, keep original HTML content
        console.warn(`Markdown file not found for: ${post.contentPath}`);
      }
    }
    return post;
  }
);

// Import case studies
import caseStudy1 from "@/content/case-studies/deutsche-bahn.json";
import caseStudy2 from "@/content/case-studies/sew-eurodrive.json";
import caseStudy3 from "@/content/case-studies/intel-software.json";
import caseStudy4 from "@/content/case-studies/zucchetti.json";
import caseStudy5 from "@/content/case-studies/solute.json";

const caseStudiesData: CaseStudy[] = [
  caseStudy1 as CaseStudy,
  caseStudy2 as CaseStudy,
  caseStudy3 as CaseStudy,
  caseStudy4 as CaseStudy,
  caseStudy5 as CaseStudy,
];

// Import logo images
import dbLogo from "@/assets/clients/db.png";
import sewLogo from "@/assets/clients/sew.png";
import intelLogo from "@/assets/clients/intel.png";
import zucchettiLogo from "@/assets/clients/zucchetti.png";
import soluteLogo from "@/assets/clients/solute.png";

// Helper to map logo paths to imported images
const logoMap: Record<string, string> = {
  '/src/assets/clients/db.png': dbLogo,
  '/src/assets/clients/sew.png': sewLogo,
  '/src/assets/clients/intel.png': intelLogo,
  '/src/assets/clients/zucchetti.png': zucchettiLogo,
  '/src/assets/clients/solute.png': soluteLogo,
};

// Process case studies to resolve logo paths
const processedCaseStudies = caseStudiesData.map(study => ({
  ...study,
  logo: logoMap[study.logo] || study.logo,
}));

class CMSService {
  // Blog Posts
  getAllBlogPosts(): BlogPost[] {
    return blogPostsData.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPostsData.find(post => post.slug === slug);
  }

  getBlogPostById(id: string): BlogPost | undefined {
    return blogPostsData.find(post => post.id === id);
  }

  getFeaturedBlogPosts(): BlogPost[] {
    return blogPostsData
      .filter(post => post.featured)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  getBlogPostsByCategory(category: string): BlogPost[] {
    if (category === "All") return this.getAllBlogPosts();
    return blogPostsData
      .filter(post => post.category === category)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  searchBlogPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return blogPostsData.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      (post.content && post.content.toLowerCase().includes(lowercaseQuery)) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getBlogCategories(): string[] {
    const categories = new Set(blogPostsData.map(post => post.category));
    return Array.from(categories).sort();
  }

  // Case Studies
  getAllCaseStudies(): CaseStudy[] {
    return processedCaseStudies;
  }

  getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return processedCaseStudies.find(study => study.slug === slug);
  }

  getCaseStudyById(id: string): CaseStudy | undefined {
    return processedCaseStudies.find(study => study.id === id);
  }

  getFeaturedCaseStudies(): CaseStudy[] {
    return processedCaseStudies.filter(study => study.featured);
  }
}

export const cms = new CMSService();

