import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();

  const blogContent: { [key: string]: any } = {
    "understanding-sip": {
      title: "Understanding SIP: Your Path to Wealth",
      category: "Basics",
      readTime: "5 min read",
      content: `
        <h2>What is a Systematic Investment Plan (SIP)?</h2>
        <p>A Systematic Investment Plan (SIP) is a disciplined investment approach that allows you to invest a fixed amount regularly in mutual funds. Instead of investing a lump sum, you invest smaller amounts at regular intervals (usually monthly).</p>

        <h2>How Does SIP Work?</h2>
        <p>When you start a SIP, a fixed amount is automatically debited from your bank account on a specified date each month and invested in your chosen mutual fund. This automation ensures discipline and removes the emotional aspect of investing.</p>

        <h2>Benefits of SIP</h2>
        <ul>
          <li><strong>Rupee Cost Averaging:</strong> By investing regularly, you buy more units when prices are low and fewer when prices are high, averaging out your purchase cost.</li>
          <li><strong>Disciplined Investing:</strong> SIPs instill financial discipline by automating your investments.</li>
          <li><strong>Power of Compounding:</strong> Starting early allows your returns to generate their own returns over time.</li>
          <li><strong>Flexibility:</strong> You can start, stop, or modify your SIP amount as per your financial situation.</li>
          <li><strong>Low Entry Barrier:</strong> Start investing with as little as ₹500 per month.</li>
        </ul>

        <h2>Who Should Invest in SIPs?</h2>
        <p>SIPs are ideal for:</p>
        <ul>
          <li>Beginners who want to start investing with small amounts</li>
          <li>Working professionals with regular monthly income</li>
          <li>Long-term goal planners (retirement, children's education, home purchase)</li>
          <li>Risk-averse investors who prefer gradual wealth building</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To start a SIP:</p>
        <ol>
          <li>Complete your KYC (Know Your Customer) verification</li>
          <li>Choose a mutual fund based on your goals and risk appetite</li>
          <li>Decide your SIP amount and frequency</li>
          <li>Set up auto-debit from your bank account</li>
          <li>Monitor your investments regularly</li>
        </ol>

        <p><em>Remember: SIPs work best when maintained over the long term. Don't stop during market downturns; that's when you accumulate more units at lower prices!</em></p>
      `
    },
    "compound-interest": {
      title: "The Magic of Compound Interest",
      category: "Concepts",
      readTime: "6 min read",
      content: `
        <h2>What is Compound Interest?</h2>
        <p>Compound interest is when you earn interest not just on your principal amount, but also on the interest you've already earned. It's often called the "eighth wonder of the world" because of its powerful wealth-building potential.</p>

        <h2>The Power of Compounding</h2>
        <p>Let's understand with an example: If you invest ₹10,000 at 10% annual interest:</p>
        <ul>
          <li><strong>Year 1:</strong> ₹10,000 + ₹1,000 (interest) = ₹11,000</li>
          <li><strong>Year 2:</strong> ₹11,000 + ₹1,100 (interest on ₹11,000) = ₹12,100</li>
          <li><strong>Year 3:</strong> ₹12,100 + ₹1,210 = ₹13,310</li>
        </ul>
        <p>Notice how the interest amount keeps growing because you're earning interest on your interest!</p>

        <h2>The Importance of Time</h2>
        <p>Time is the most crucial factor in compounding. The earlier you start, the more time your money has to grow exponentially.</p>
        <p>Example: Two friends, Amit and Priya:</p>
        <ul>
          <li><strong>Amit</strong> starts investing ₹5,000/month at age 25 for 10 years (total investment: ₹6 lakhs)</li>
          <li><strong>Priya</strong> starts at age 35 and invests ₹5,000/month for 20 years (total investment: ₹12 lakhs)</li>
        </ul>
        <p>At 12% annual returns by age 55, Amit will have approximately ₹1.76 crores, while Priya will have ₹1.49 crores. Amit invested half the amount but earned more because he started earlier!</p>

        <h2>Maximizing Compound Interest</h2>
        <ol>
          <li><strong>Start Early:</strong> Even small amounts invested early can grow significantly</li>
          <li><strong>Be Consistent:</strong> Regular investments amplify the compounding effect</li>
          <li><strong>Stay Invested:</strong> Don't withdraw; let your money work for you</li>
          <li><strong>Reinvest Returns:</strong> Keep your returns invested to compound further</li>
          <li><strong>Increase Contributions:</strong> Gradually increase your investment amounts</li>
        </ol>

        <h2>The 72 Rule</h2>
        <p>Want to know how long it takes to double your money? Divide 72 by your annual return rate:</p>
        <ul>
          <li>At 8% return: 72 ÷ 8 = 9 years to double</li>
          <li>At 12% return: 72 ÷ 12 = 6 years to double</li>
        </ul>

        <p><em>The key takeaway: Time in the market beats timing the market. Start investing today and let compound interest work its magic!</em></p>
      `
    },
    "ppf-vs-nps": {
      title: "PPF vs NPS: Which is Better for You?",
      category: "Comparison",
      readTime: "8 min read",
      content: `
        <h2>Overview</h2>
        <p>Both PPF (Public Provident Fund) and NPS (National Pension System) are popular long-term investment options with tax benefits. However, they serve different purposes and have distinct features.</p>

        <h2>Public Provident Fund (PPF)</h2>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Lock-in Period:</strong> 15 years (extendable)</li>
          <li><strong>Interest Rate:</strong> Currently 7.1% (revised quarterly by government)</li>
          <li><strong>Investment Limit:</strong> Minimum ₹500, Maximum ₹1.5 lakh per year</li>
          <li><strong>Tax Benefits:</strong> EEE (Exempt-Exempt-Exempt) status - no tax at any stage</li>
          <li><strong>Risk:</strong> Zero risk, government-backed</li>
        </ul>

        <h3>Pros:</h3>
        <ul>
          <li>Completely safe and government-guaranteed</li>
          <li>Tax-free returns</li>
          <li>Loan facility after 3rd year</li>
          <li>Partial withdrawal after 7th year</li>
        </ul>

        <h3>Cons:</h3>
        <ul>
          <li>Long lock-in period</li>
          <li>Lower returns compared to market-linked instruments</li>
          <li>Annual investment capped at ₹1.5 lakh</li>
        </ul>

        <h2>National Pension System (NPS)</h2>
        <h3>Key Features:</h3>
        <ul>
          <li><strong>Lock-in Period:</strong> Until 60 years of age</li>
          <li><strong>Expected Returns:</strong> 9-12% (market-linked, not guaranteed)</li>
          <li><strong>Investment Limit:</strong> Minimum ₹500, no maximum limit</li>
          <li><strong>Tax Benefits:</strong> Deduction up to ₹2 lakh under 80CCD</li>
          <li><strong>Risk:</strong> Market-linked, moderate to high based on asset allocation</li>
        </ul>

        <h3>Pros:</h3>
        <ul>
          <li>Higher potential returns</li>
          <li>Additional tax deduction of ₹50,000</li>
          <li>Flexible investment options</li>
          <li>Professional fund management</li>
        </ul>

        <h3>Cons:</h3>
        <ul>
          <li>Market-linked returns (can be volatile)</li>
          <li>Only 60% corpus available at maturity; 40% must buy annuity</li>
          <li>More complex than PPF</li>
          <li>Partial taxation at withdrawal</li>
        </ul>

        <h2>Which One Should You Choose?</h2>

        <h3>Choose PPF if you:</h3>
        <ul>
          <li>Prefer zero-risk investments</li>
          <li>Want complete tax exemption</li>
          <li>Need liquidity options (loan/partial withdrawal)</li>
          <li>Are risk-averse</li>
        </ul>

        <h3>Choose NPS if you:</h3>
        <ul>
          <li>Can tolerate market volatility</li>
          <li>Want higher potential returns</li>
          <li>Need additional tax deduction beyond ₹1.5 lakh</li>
          <li>Are planning specifically for retirement</li>
        </ul>

        <h2>Can You Invest in Both?</h2>
        <p>Absolutely! Many financial advisors recommend a balanced approach:</p>
        <ul>
          <li>Use PPF for safe, guaranteed returns</li>
          <li>Use NPS for higher growth potential</li>
          <li>Combine both to balance safety and returns</li>
        </ul>

        <p><em>Ultimately, your choice depends on your risk appetite, financial goals, and investment horizon. Consider consulting a financial advisor for personalized advice.</em></p>
      `
    }
  };

  const blog = blogContent[id || ""] || {
    title: "Blog Post Not Found",
    category: "Unknown",
    readTime: "N/A",
    content: "<p>This blog post doesn't exist yet. Check back soon for more content!</p>"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>

            <Card className="shadow-elevated">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {blog.readTime}
                  </span>
                </div>

                <h1 className="text-4xl font-bold mb-8">{blog.title}</h1>

                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  style={{
                    lineHeight: "1.8"
                  }}
                />

                <div className="mt-12 pt-8 border-t">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Disclaimer:</strong> This article is for educational purposes only and should not be 
                    considered as financial advice. Please consult with a qualified financial advisor before making 
                    any investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Link to="/blogs">
                <Button variant="outline" size="lg">
                  Read More Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
