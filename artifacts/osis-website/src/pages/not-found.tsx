import { Layout } from "@/components/layout";
import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70svh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="text-primary mb-6" size={64} />
        <h1 className="text-6xl font-display font-bold text-white uppercase mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/"
          className="px-8 py-3 bg-primary text-white font-display font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
