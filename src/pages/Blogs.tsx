import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      id: "understanding-sip",
      title: "Understanding SIP: Your Path to Wealth",
      summary: "Learn how Systematic Investment Plans help you build wealth through disciplined investing and rupee cost averaging. Discover why SIPs are perfect for beginners.",
      category: "Basics",
      readTime: "5 min read"
    },
    {
      id: "compound-interest",
      title: "The Magic of Compound Interest",
      summary: "Discover how compound interest can multiply your wealth over time and why starting early matters. Albert Einstein called it the eighth wonder of the world.",
      category: "Concepts",
      readTime: "6 min read"
    },
    {
      id: "ppf-vs-nps",
      title: "PPF vs NPS: Which is Better for You?",
      summary: "A comprehensive comparison of Public Provident Fund and National Pension System for your retirement planning. Understand the tax benefits and returns.",
      category: "Comparison",
      readTime: "8 min read"
    },
    {
      id: "mutual-funds-guide",
      title: "Mutual Funds: A Beginner's Guide",
      summary: "Everything you need to know about mutual funds - types, risks, returns, and how to choose the right fund for your investment goals.",
      category: "Basics",
      readTime: "7 min read"
    },
    {
      id: "tax-saving-investments",
      title: "Best Tax-Saving Investment Options in 2025",
      summary: "Explore the top investment options under Section 80C and other tax-saving instruments. Maximize your returns while minimizing tax liability.",
      category: "Tax Planning",
      readTime: "6 min read"
    },
    {
      id: "risk-management",
      title: "Investment Risk Management Strategies",
      summary: "Learn how to balance risk and returns in your investment portfolio. Diversification strategies and risk assessment techniques explained.",
      category: "Strategy",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                Investment Insights
              </h1>
              <p className="text-muted-foreground text-lg">
                Learn about investing, financial planning, and wealth creation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="shadow-card hover:shadow-elevated transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {blog.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                    <CardDescription className="text-base">{blog.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/blogs/${blog.id}`}>
                      <Button variant="outline" className="w-full group">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blogs;
