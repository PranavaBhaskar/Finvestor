import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calculator, TrendingUp } from "lucide-react";

const Simulator = () => {
  const [inputs, setInputs] = useState({
    principal: 100000,
    monthlySIP: 5000,
    years: 10,
    returnRate: 12
  });

  const [results, setResults] = useState<any>(null);

  const calculateInvestment = () => {
    const { principal, monthlySIP, years, returnRate } = inputs;
    const monthlyRate = returnRate / 100 / 12;
    const months = years * 12;

    // Calculate future value with SIP
    let totalInvested = principal;
    let currentValue = principal;
    const yearlyData = [];

    for (let year = 1; year <= years; year++) {
      for (let month = 1; month <= 12; month++) {
        currentValue = currentValue * (1 + monthlyRate) + monthlySIP;
        totalInvested += monthlySIP;
      }
      
      yearlyData.push({
        year: year,
        invested: Math.round(totalInvested),
        value: Math.round(currentValue)
      });
    }

    const finalAmount = Math.round(currentValue);
    const totalReturns = Math.round(finalAmount - totalInvested);

    setResults({
      finalAmount,
      totalInvested: Math.round(totalInvested),
      totalReturns,
      chartData: yearlyData
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
                <Calculator className="h-8 w-8 text-primary" />
                Investment Growth Simulator
              </h1>
              <p className="text-muted-foreground text-lg">
                Calculate and visualize your investment returns over time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Card */}
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle>Investment Details</CardTitle>
                  <CardDescription>Enter your investment parameters</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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

                  <div className="space-y-2">
                    <Label htmlFor="return">Expected Annual Return (%)</Label>
                    <Input
                      id="return"
                      type="number"
                      step="0.5"
                      value={inputs.returnRate}
                      onChange={(e) => setInputs({...inputs, returnRate: Number(e.target.value)})}
                    />
                  </div>

                  <Button 
                    onClick={calculateInvestment} 
                    className="w-full bg-gradient-hero hover:opacity-90"
                    size="lg"
                  >
                    Calculate Returns
                  </Button>

                  <p className="text-xs text-muted-foreground text-center pt-2">
                    * For educational purposes only. Not financial advice.
                  </p>
                </CardContent>
              </Card>

              {/* Results Card */}
              {results && (
                <Card className="shadow-elevated">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Investment Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Final Maturity Amount</p>
                        <p className="text-3xl font-bold text-primary">
                          ₹{results.finalAmount.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-4">
                        <p className="text-sm text-muted-foreground mb-1">Total Invested</p>
                        <p className="text-2xl font-semibold">
                          ₹{results.totalInvested.toLocaleString('en-IN')}
                        </p>
                      </div>

                      <div className="bg-accent/10 rounded-lg p-4 border border-accent">
                        <p className="text-sm text-muted-foreground mb-1">Total Returns (Profit)</p>
                        <p className="text-2xl font-semibold text-accent">
                          ₹{results.totalReturns.toLocaleString('en-IN')}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {((results.totalReturns / results.totalInvested) * 100).toFixed(2)}% gain
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Chart */}
            {results && (
              <Card className="mt-8 shadow-elevated">
                <CardHeader>
                  <CardTitle>Growth Over Time</CardTitle>
                  <CardDescription>Visualizing your investment journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={results.chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                        <YAxis label={{ value: 'Amount (₹)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip formatter={(value: number) => `₹${value.toLocaleString('en-IN')}`} />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="invested" 
                          stroke="hsl(var(--secondary))" 
                          strokeWidth={2}
                          name="Total Invested"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={3}
                          name="Investment Value"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Breakdown Table */}
                  <div className="mt-8 overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b">
                        <tr className="text-left">
                          <th className="pb-2 font-semibold">Year</th>
                          <th className="pb-2 font-semibold text-right">Amount Invested</th>
                          <th className="pb-2 font-semibold text-right">Investment Value</th>
                          <th className="pb-2 font-semibold text-right">Returns</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.chartData.map((data: any) => (
                          <tr key={data.year} className="border-b last:border-0">
                            <td className="py-2">{data.year}</td>
                            <td className="py-2 text-right">₹{data.invested.toLocaleString('en-IN')}</td>
                            <td className="py-2 text-right font-semibold">₹{data.value.toLocaleString('en-IN')}</td>
                            <td className="py-2 text-right text-accent">
                              ₹{(data.value - data.invested).toLocaleString('en-IN')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Simulator;
