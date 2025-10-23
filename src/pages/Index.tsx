import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, BarChart3, PieChart, Calculator, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredBlogs = [
    {
      title: "Understanding SIP: Your Path to Wealth",
      summary: "Learn how Systematic Investment Plans help you build wealth through disciplined investing and rupee cost averaging.",
      link: "/blogs/understanding-sip"
    },
    {
      title: "The Magic of Compound Interest",
      summary: "Discover how compound interest can multiply your wealth over time and why starting early matters.",
      link: "/blogs/compound-interest"
    },
    {
      title: "PPF vs NPS: Which is Better?",
      summary: "A comprehensive comparison of Public Provident Fund and National Pension System for your retirement planning.",
      link: "/blogs/ppf-vs-nps"
    }
  ];

  const features = [
    {
      icon: Calculator,
      title: "Investment Simulator",
      description: "Calculate your investment growth with detailed projections and visual charts."
    },
    {
      icon: BarChart3,
      title: "Compare Options",
      description: "Compare different investment vehicles to find the best fit for your goals."
    },
    {
      icon: PieChart,
      title: "Visual Analytics",
      description: "See your financial future through interactive charts and comprehensive tables."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Visualize Your Financial Future
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                Make informed investment decisions with powerful calculators and comparison tools
              </p>
              <Link to="/simulator">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                  Start Simulation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Smart Tools for Smart Investors
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to understand and plan your investments
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blogs Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Investment Insights
              </h2>
              <p className="text-muted-foreground text-lg">
                Learn from our curated financial education content
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <Card key={index} className="shadow-card hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{blog.title}</CardTitle>
                    <CardDescription className="text-base">{blog.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={blog.link}>
                      <Button variant="outline" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/blogs">
                <Button variant="outline" size="lg">
                  View All Blogs
                  <TrendingUp className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your Financial Future?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Start using our tools to visualize and compare your investment options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/simulator">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Investment Simulator
                </Button>
              </Link>
              <Link to="/compare">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Compare Investments
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
