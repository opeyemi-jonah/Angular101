using Microsoft.AspNetCore.Mvc.Rendering;

namespace Yemi_Dealership.Extensions
{
    public static class IEnumerableExtensions
    {
        public static IEnumerable<SelectListItem> ToSelectListItem<T>(this IEnumerable<T> Items)
        {
            List<SelectListItem> List = new List<SelectListItem>();
  return
         Items.OrderBy(item => item.GetPropertyValue("Name"))
         .Select(item => 
                 new SelectListItem
                 {
                     Text = item.GetPropertyValue("Name"),
                     Value = item.GetPropertyValue("Id"),

                 });

            
        }
    }
}