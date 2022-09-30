using Microsoft.AspNetCore.Mvc;
using Yemi_Dealership.Models;


namespace Yemi_Dealership.Controllers
{
    public class MakeController : Controller
    {
        //make/bikes
        public IActionResult Bikes()
        {
            Make make= new Make { Id = 1, Name = "Jonah Opeyemi" };
            return View(make);
        }
    }
}
