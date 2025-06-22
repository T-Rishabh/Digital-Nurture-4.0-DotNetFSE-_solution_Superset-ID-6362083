using System;
using System.Collections.Generic;

namespace FinancialForecastingApp
{
    class Program
    {
        private static Dictionary<int, double> memo = new Dictionary<int, double>();

        static void Main(string[] args)
        {
            Console.WriteLine("=== Financial Forecasting Tool ===\n");

            Console.Write("Enter initial investment amount: ");
            double initialAmount = double.Parse(Console.ReadLine());

            Console.Write("Enter annual growth rate (as decimal): ");
            double rate = double.Parse(Console.ReadLine());

            Console.Write("Enter number of years: ");
            int years = int.Parse(Console.ReadLine());

            double forecastRecursive = ForecastWithMemo(initialAmount, rate, years);
            Console.WriteLine($"\n📈 Recursive (Memoized) Forecast: {forecastRecursive:F2}");

            double forecastIterative = ForecastIterative(initialAmount, rate, years);
            Console.WriteLine($"📊 Iterative Forecast: {forecastIterative:F2}");
        }

        static double ForecastWithMemo(double amount, double rate, int years)
        {
            if (years == 0)
                return amount;

            if (memo.ContainsKey(years))
                return memo[years];

            double result = ForecastWithMemo(amount * (1 + rate), rate, years - 1);
            memo[years] = result;

            return result;
        }
        static double ForecastIterative(double amount, double rate, int years)
        {
            double value = amount;
            for (int i = 0; i < years; i++)
            {
                value *= (1 + rate);
            }
            return value;
        }
    }
}
