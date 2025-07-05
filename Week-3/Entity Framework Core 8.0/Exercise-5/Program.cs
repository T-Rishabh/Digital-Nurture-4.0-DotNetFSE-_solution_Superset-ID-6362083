using System;
using System.Threading.Tasks;
using System.Linq;
using Microsoft.EntityFrameworkCore;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

  
        var allProducts = await context.Products.ToListAsync();
        Console.WriteLine("\n📦 All Products:");
        foreach (var p in allProducts)
        {
            Console.WriteLine($"- {p.Name} | ₹{p.Price}");
        }

    
        var productById = await context.Products.FindAsync(1);
        Console.WriteLine($"\n🔍 Product with ID 1: {productById?.Name ?? "Not found"}");

       
        var expensiveProduct = await context.Products
            .FirstOrDefaultAsync(p => p.Price > 50000);

        Console.WriteLine($"\n💰 Expensive Product: {expensiveProduct?.Name ?? "None"}");
    }
}