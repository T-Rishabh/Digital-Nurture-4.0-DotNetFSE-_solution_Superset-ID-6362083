using System;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        using var context = new AppDbContext();

        // Create Categories
        var electronics = new Category { Name = "Electronics" };
        var groceries = new Category { Name = "Groceries" };

        await context.Categories.AddRangeAsync(electronics, groceries);

        // Create Products
        var laptop = new Product
        {
            Name = "Laptop",
            Price = 75000,
            Category = electronics
        };

        var riceBag = new Product
        {
            Name = "Rice Bag",
            Price = 1200,
            Category = groceries
        };

        await context.Products.AddRangeAsync(laptop, riceBag);

       
        await context.SaveChangesAsync();

        Console.WriteLine("✅ Initial data inserted successfully.");
    }
}
