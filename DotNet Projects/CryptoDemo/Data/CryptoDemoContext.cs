using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Crypto.Models;

namespace Crypto.Data
{
    public class CryptoDemoContext : DbContext
    {
        public CryptoDemoContext (DbContextOptions<CryptoDemoContext> options)
            : base(options)
        {
        }

        public DbSet<Crypto.Models.Coin> Coin { get; set; } = default!;
    }
}
