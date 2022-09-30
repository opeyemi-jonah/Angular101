using Yemi_Dealership.Models;
using Microsoft.EntityFrameworkCore;


namespace Yemi_Dealership.AppDBContext
{
    public class DealershipDbContext: DbContext
    {
        public DealershipDbContext(DbContextOptions<DealershipDbContext> options): 
            base(options)
        {
        
        }

        public DbSet<Make> Makes { get; set; }
        public DbSet<Model> Models { get; set; }

        public DbSet<Feature> Features { get; set; }

    }

}
