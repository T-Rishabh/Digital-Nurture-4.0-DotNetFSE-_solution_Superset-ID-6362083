using System;
using System.Diagnostics;
using ECommerceProductSearch.Models;
using ECommerceProductSearch.Services;

namespace ECommerceProductSearch
{
    class Program
    {
        static void Main()
        {
            Console.Write("Enter number of products: ");
            int count = int.Parse(Console.ReadLine());

            Product[] catalog = new Product[count];

            for (int i = 0; i < count; i++)
            {
                Console.WriteLine($"\n--- Product {i + 1} ---");

                Console.Write("Enter Product ID: ");
                int id = int.Parse(Console.ReadLine());

                Console.Write("Enter Product Name: ");
                string name = Console.ReadLine();

                Console.Write("Enter Category: ");
                string category = Console.ReadLine();

                catalog[i] = new Product(id, name, category);
            }

            Console.Write("\nEnter Product ID to search: ");
            int searchId = int.Parse(Console.ReadLine());

    
            Stopwatch stopwatchLinear = Stopwatch.StartNew();
            var linearResult = SearchService.FindByLinearSearch(catalog, searchId);
            stopwatchLinear.Stop();

            Console.WriteLine(linearResult != null
                ? $"\n[Linear Search] ✅ Found: {linearResult}"
                : "\n[Linear Search] ❌ Product not found.");
            Console.WriteLine($"[Linear Search] ⏱ Time taken: {stopwatchLinear.Elapsed.TotalMilliseconds} ms");

           
            Array.Sort(catalog, (a, b) => a.ProductId.CompareTo(b.ProductId));

            Stopwatch stopwatchBinary = Stopwatch.StartNew();
            var binaryResult = SearchService.FindByBinarySearch(catalog, searchId);
            stopwatchBinary.Stop();

            Console.WriteLine(binaryResult != null
                ? $"\n[Binary Search] ✅ Found: {binaryResult}"
                : "\n[Binary Search] ❌ Product not found.");
            Console.WriteLine($"[Binary Search] ⏱ Time taken: {stopwatchBinary.Elapsed.TotalMilliseconds} ms");
        }
    }
}
