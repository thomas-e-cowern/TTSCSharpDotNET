using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using OdeToFood.Core;
using OdeToFood.Data;

namespace OdeToFood.Pages.Restaurants
{
    public class EditModel : PageModel
    {

        private readonly IRestaurantData restaurantData;
        private readonly IHtmlHelper htmlHelper;

        public IEnumerable<SelectListItem> Cuisines { get; set; }

        [BindProperty(SupportsGet = true)]
        public Restaurant Restaurant { get; set; }

        public EditModel(IRestaurantData restaurantData, IHtmlHelper htmlHelper)
        {
            this.restaurantData = restaurantData;
            this.htmlHelper = htmlHelper;
        }
        public IActionResult OnGet(int? restaurantId)
        {
            Cuisines = htmlHelper.GetEnumSelectList<CuisineType>();
            if (restaurantId.HasValue)
            {
                Restaurant = restaurantData.GetById(restaurantId.Value);
            }
            else
            {
                Restaurant = new Restaurant();
            }

            if (Restaurant == null)
            {
                return RedirectToPage("./NotFound");
            }
            return Page();
        }

        public IActionResult OnPost()
        {
            if (ModelState.IsValid)
            {
                if (Restaurant.Id > 0)
                {
                    restaurantData.Update(Restaurant);
                    restaurantData.Commit();
                    return RedirectToPage("./Detail", new { restaurantId = Restaurant.Id });
                }
                else
                {
                    restaurantData.Add(Restaurant);
                    restaurantData.Commit();

                    TempData["Message"] = "Restaurant Saved!";
                    return RedirectToPage("./Detail", new { restaurantId = Restaurant.Id });
                }
            }

            Cuisines = htmlHelper.GetEnumSelectList<CuisineType>();
            return Page();
        }
    }
}