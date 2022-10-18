using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Crypto.Data;
using Crypto.Models;

namespace Crypto.Pages.Coins
{
    public class DetailsModel : PageModel
    {
        private readonly Crypto.Data.CryptoDemoContext _context;

        public DetailsModel(Crypto.Data.CryptoDemoContext context)
        {
            _context = context;
        }

      public Coin Coin { get; set; }

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null || _context.Coin == null)
            {
                return NotFound();
            }

            var coin = await _context.Coin.FirstOrDefaultAsync(m => m.Id == id);
            if (coin == null)
            {
                return NotFound();
            }
            else 
            {
                Coin = coin;
            }
            return Page();
        }
    }
}
