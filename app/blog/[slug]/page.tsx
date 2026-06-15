import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://karolmodelski.pl/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `https://karolmodelski.pl/blog/${post.slug}/#article`,
        "isPartOf": {
          "@type": "WebPage",
          "@id": `https://karolmodelski.pl/blog/${post.slug}/#webpage`,
          "url": `https://karolmodelski.pl/blog/${post.slug}`,
          "name": `${post.title} | Blog Karol Modelski`
        },
        "headline": post.title,
        "description": post.excerpt,
        "inLanguage": "pl-PL",
        "mainEntityOfPage": `https://karolmodelski.pl/blog/${post.slug}`,
        "author": {
          "@type": "Person",
          "@id": "https://karolmodelski.pl/#person",
          "name": "Karol Modelski",
          "url": "https://karolmodelski.pl"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://karolmodelski.pl/#business"
        },
        "datePublished": post.date
      }
    ]
  };

  return (
    <div className="bg-slate-950 min-h-[100dvh] text-slate-50 selection:bg-blue-500/30 flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Tło i Gradienty */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950 pointer-events-none -z-10"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen opacity-50 pointer-events-none -z-10"></div>
      
      <div className="mx-auto max-w-4xl px-4 pt-12 sm:pt-20 pb-24 flex-1 w-full">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Powrót do Bazy Wiedzy
        </Link>
        <article className="rounded-xl sm:rounded-2xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-xl p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <header className="mb-8 sm:mb-12 border-b border-slate-800 pb-8 sm:pb-10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
               <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium">
                 {post.category}
               </span>
               <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                 <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-700"></span> {post.readingTime} czytania
               </span>
               <span className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400">
                 <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-slate-700"></span> {post.date}
               </span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] text-balance">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-sm sm:prose-lg prose-invert max-w-none 
                          prose-headings:font-bold prose-headings:text-slate-100 
                          prose-p:text-slate-300 prose-p:leading-relaxed 
                          prose-a:text-blue-400 hover:prose-a:text-blue-300 
                          prose-strong:text-white prose-strong:font-bold
                          prose-li:text-slate-300
                          prose-blockquote:border-l-blue-500 prose-blockquote:bg-slate-900/50 prose-blockquote:px-4 sm:prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-300 prose-blockquote:font-normal
                          prose-hr:border-slate-800">
            <MDXRemote source={post.content} />
          </div>
        </article>
      </div>

    </div>
  );
}
