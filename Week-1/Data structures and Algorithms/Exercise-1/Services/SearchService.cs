using ECommerceProductSearch.Models;

namespace ECommerceProductSearch.Services
{
    public class SearchService
    {
        public static Product FindByLinearSearch(Product[] items, int targetId)
        {
            foreach (var item in items)
            {
                if (item.ProductId == targetId)
                    return item;
            }
            return null;
        }

        public static Product FindByBinarySearch(Product[] items, int targetId)
        {
            int left = 0, right = items.Length - 1;

            while (left <= right)
            {
                int mid = left + (right - left) / 2;

                if (items[mid].ProductId == targetId)
                    return items[mid];
                else if (items[mid].ProductId < targetId)
                    left = mid + 1;
                else
                    right = mid - 1;
            }

            return null;
        }
    }
}
