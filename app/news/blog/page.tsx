import { BlogHero } from "@/components/blog/blog-hero";
import { BlogList } from "@/components/blog/blog-list";
import { NewsletterSignup } from "@/components/blog/newsletter-signup";

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <BlogHero />
      <BlogList />
      <NewsletterSignup />
    </main>
  );
}
