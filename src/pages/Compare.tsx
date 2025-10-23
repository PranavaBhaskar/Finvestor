import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, Award } from "lucide-react";

const Compare = () => {
  const [inputs, setInputs] = useState({
    principal: 100000,
    monthlySIP: 5000,
    years: 10
  });

  const [results, setResults] = useState<any>(null);

  const investmentOptions = [
    { name: "Fixed Deposit", rate: 6.5, description: "Low risk, guaranteed returns" },
    { name: "Mutual Fund", rate: 12, description: "Moderate risk, market-linked" },
    { name: "PPF", rate: 7.1, description: "Government-backed, tax-free" },
    { name: "NPS", rate: 10, description: "Retirement-focused, tax benefits" }
  ];

  const calculateComparison = () => {
    const { principal, monthlySIP, years } = inputs;
    const months = years * 12;

    const comparisonData = investmentOptions.map(option => {
      const monthlyRate = option.rate / 100 / 12;
      let totalInvested = principal;
      let currentValue = principal;

      for (let month = 1; month <= months; month++) {
        currentValue = currentValue * (1 + monthlyRate) + monthlySIP;
        totalInvested += monthlySIP;
      }

      const finalAmount = Math.round(currentValue);
      const returns = Math.round(finalAmount - totalInvested);

      return {
        name: option.name,
        description: option.description,
        rate: option.rate,
        finalAmount,
        totalInvested: Math.round(totalInvested),
        returns,
        returnPercentage: ((returns / totalInvested) * 100).toFixed(2)
      };
    });

    // Sort by final amount descending
    comparisonData.sort((a, b) => b.finalAmount - a.finalAmount);

    setResults(comparisonData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <BarChart3 className="h-8 w-8 text-primary" />
                Investment Comparison Tool
              </h1>
              <p className="text-muted-foreground text-lg">
                Compare popular investment options side by side
              </p>
            </div>

            {/* Input Card */}
            <Card className="shadow-elevated mb-8">
              <CardHeader>
                <CardTitle>Investment Parameters</CardTitle>
                <CardDescription>Enter your investment details to compare options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="principal">Initial Investment (₹)</Label>
                    <Input
                      id="principal"
                      type="number"
                      value={inputs.principal}
                      onChange={(e) => setInputs({...inputs, principal: Number(e.target.value)})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sip">Monthly SIP (₹)</Label>
                    <Input
                      id="sip"
                      type="number"
                      value={inputs.monthlySIP}
                      onChange={(e) => setInputs({...inputs, monthlySIP: Number(e.target.value)})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="years">Investment Duration (Years)</Label>
                    <Input
                      id="years"
                      type="number"
                      value={inputs.years}
                      onChange={(e) => setInputs({...inputs, years: Number(e.target.value)})}
                    />
                  </div>
                </div>

                <Button 
                  onClick={calculateComparison} 
                  className="w-full mt-6 bg-gradient-hero hover:opacity-90"
                  size="lg"
                >
                  Compare Investments
                </Button>
              </CardContent>
            </Card>

            {/* Investment Options Reference */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {investmentOptions.map((option, idx) => (
                <Card key={idx}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{option.name}</CardTitle>
                    <CardDescription className="text-sm">{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">{option.rate}%</p>
                    <p className="text-xs text-muted-foreground">Expected annual return</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Results */}
            {results && (
              <>
                {/* Chart */}
                <Card className="shadow-elevated mb-8">
                  <CardHeader>
                    <CardTitle>Comparison Chart</CardTitle>
                    <CardDescription>Final maturity amounts across investment options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={results}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                          <Legend />
                          <Bar dataKey="totalInvested" fill="hsl(var(--secondary))" name="Total Invested" />
                          <Bar dataKey="finalAmount" fill="hsl(var(--primary))" name="Final Amount" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* Comparison Table */}
                <Card className="shadow-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Detailed Comparison
                      {results[0] && (
                        <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
                          <Award className="h-4 w-4 text-accent" />
                          {results[0].name} performs best
                        </span>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="border-b">
                          <tr className="text-left">
                            <th className="pb-3 font-semibold">Investment Type</th>
                            <th className="pb-3 font-semibold text-right">Rate</th>
                            <th className="pb-3 font-semibold text-right">Total Invested</th>
                            <th className="pb-3 font-semibold text-right">Final Amount</th>
                            <th className="pb-3 font-semibold text-right">Returns</th>
                            <th className="pb-3 font-semibold text-right">Gain %</th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.map((result: any, idx: number) => (
                            <tr 
                              key={idx} 
                              className={`border-b last:border-0 ${idx === 0 ? 'bg-accent/5' : ''}`}
                            >
                              <td className="py-3">
                                <div className="flex items-center gap-2">
                                  {idx === 0 && <Award className="h-4 w-4 text-accent" />}
                                  <span className={idx === 0 ? 'font-semibold' : ''}>{result.name}</span>
                                </div>
                              </td>
                              <td className="py-3 text-right">{result.rate}%</td>
                              <td className="py-3 text-right">₹{result.totalInvested.toLocaleString('en-IN')}</td>
                              <td className="py-3 text-right font-semibold">₹{result.finalAmount.toLocaleString('en-IN')}</td>
                              <td className="py-3 text-right text-accent font-medium">
                                ₹{result.returns.toLocaleString('en-IN')}
                              </td>
                              <td className="py-3 text-right text-accent font-medium">
                                {result.returnPercentage}%
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-xs text-muted-foreground mt-6 text-center">
                      * Returns are estimated based on historical averages. Actual returns may vary.
                      For educational purposes only. Not financial advice.
                    </p>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Compare;
