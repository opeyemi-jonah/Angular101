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
    public class IndexModel : PageModel
    {
        private readonly Crypto.Data.CryptoDemoContext _context;

        public IndexModel(Crypto.Data.CryptoDemoContext context)
        {
            _context = context;
        }

        public IList<Coin> Coin { get;set; } = default!;

        public async Task OnGetAsync()
        {
            if (_context.Coin != null)
            {
                Coin = await _context.Coin.ToListAsync();
            }
        }
    }
}
