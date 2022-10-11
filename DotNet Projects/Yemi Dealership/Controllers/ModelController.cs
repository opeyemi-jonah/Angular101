using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using Yemi_Dealership.AppDBContext;
using Yemi_Dealership.Models.ViewModels;

namespace Yemi_Dealership.Controllers
{
    public class ModelController : Controller
    {
        private readonly DealershipDbContext _db;
        [BindProperty]
        public ModelViewModel ModelVM { get; set; }

        public ModelController(DealershipDbContext db)
        {
            _db = db;
            ModelVM = new ModelViewModel()
            {
                Makes = _db.Makes.ToList(),
                Model = new Models.Model()
            };

        }
    
        public IActionResult Index()
        {
            var model = _db.Models.Include(m => m.Make);
            return View(model);
        }

        public IActionResult Create()
        {
            return View(ModelVM);
        }

        [HttpPost, ActionName("Create")]
        public IActionResult CreatePost()
        {
            if (!ModelState.IsValid)
            {
                return View(ModelVM);
            }
            
            _db.Models.Add(ModelVM.Model);
            _db.SaveChanges();
            return RedirectToAction(nameof(Index));
        }
    }
}
