import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Shield, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To simplify investment planning and make financial literacy accessible to everyone, regardless of their background or experience."
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Whether you're a beginner or experienced investor, our tools help you make informed decisions about your financial future."
    },
    {
      icon: Shield,
      title: "Educational Focus",
      description: "We prioritize education over promotion. All our tools and content are designed to help you learn and understand investing."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven",
      description: "Our calculators use realistic assumptions based on historical data to provide you with practical, actionable insights."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Finvestor</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">
              Empowering individuals to take control of their financial future through 
              education, transparent tools, and realistic projections.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none mb-16">
                <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Finvestor is a financial education platform designed to help individuals understand 
                  and compare different investment options. We believe that everyone should have access 
                  to clear, unbiased information about investing without complex jargon or hidden agendas.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our platform provides interactive calculators, comparison tools, and educational content 
                  that help you visualize your investment journey. Whether you're planning for retirement, 
                  saving for a home, or building wealth for your children's education, our tools give you 
                  the clarity you need to make confident decisions.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {values.map((value, index) => (
                  <Card key={index} className="shadow-card">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Investment Growth Simulator:</strong> Calculate potential returns based on your investment strategy with detailed year-by-year breakdowns.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Comparison Tools:</strong> Compare popular investment options like Fixed Deposits, Mutual Funds, PPF, and NPS side by side.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Educational Content:</strong> Learn about investing concepts, strategies, and best practices through our blog articles.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Visual Analytics:</strong> Interactive charts and tables that make complex financial data easy to understand.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-16 text-center">
                <h2 className="text-3xl font-bold mb-6">Important Disclaimer</h2>
                <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                  All calculations, projections, and information provided on Finvestor are for <strong>educational purposes only</strong>. 
                  We do not provide personalized financial advice, and our tools should not be considered as recommendations 
                  to invest in any specific product or strategy. Investment returns are subject to market risks, and past 
                  performance is not indicative of future results. Please consult with a qualified financial advisor before 
                  making any investment decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground text-lg mb-6">
              We'd love to hear from you. Reach out with any questions or feedback.
            </p>
            <a href="mailto:hello@finvestor.com" className="text-primary hover:underline text-lg font-medium">
              hello@finvestor.com
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
