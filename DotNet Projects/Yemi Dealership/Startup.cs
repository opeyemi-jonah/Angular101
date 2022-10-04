using Yemi_Dealership.AppDBContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.SqlServer;
using Microsoft.Extensions.FileSystemGlobbing.Internal.Patterns;

public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddRazorPages();
        services.AddDbContext<DealershipDbContext>(options => options.UseSqlServer(Configuration.GetConnectionString("Default")));
    }

    public void Configure(WebApplication app, IWebHostEnvironment env)
    {
        if (!app.Environment.IsDevelopment())
        {
            app.UseExceptionHandler("/Error");
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseStaticFiles();

        app.UseRouting();

        app.UseAuthorization();

        //Convention Based Routing
        /**
        app.MapControllerRoute(
            name: "ByYearMonth",
            pattern: "make/bikes/{year:int:length(4)}/{month:int:range(1,12)}",
            new { controller = "make", action = "ByYearMonth" }
            );
        */

        app.MapControllerRoute( 
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}");

        app.Run();

    }
}