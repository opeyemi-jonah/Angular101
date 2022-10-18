using Fullstack.API.Data;
using Fullstack.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

namespace Fullstack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : Controller
    {
        private readonly FullstackDBContext fullstackDbContext;

        public EmployeesController(FullstackDBContext fullstackDbContext)
        {
            this.fullstackDbContext = fullstackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
         var employees =  await this.fullstackDbContext.Employees.ToListAsync();
            return Ok(employees); //this returns the list of employees to our frontend (client)
        }

        [HttpPost] 
        public async Task<IActionResult> AddEmployee([FromBody] Employee employeeRequest)
        {
            employeeRequest.Id = Guid.NewGuid();
            await this.fullstackDbContext.Employees.AddAsync(employeeRequest); 
            await this.fullstackDbContext.SaveChangesAsync();
            return Ok(employeeRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetEmployee([FromRoute] Guid id)
        {
          var employee =
                await fullstackDbContext.Employees.FirstOrDefaultAsync(_employee => _employee.Id == id);
            if (employee == null)
            {
                return NotFound();
            }

            return Ok(employee);

        }
        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateEmployee([FromRoute] Guid id, Employee updateEmployeeRequest)
        {
            var employee = await fullstackDbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            employee.Name = updateEmployeeRequest.Name;
            employee.Email = updateEmployeeRequest.Email;
            employee.Salary = updateEmployeeRequest.Salary;
            employee.Phone = updateEmployeeRequest.Phone;
            employee.Department = updateEmployeeRequest.Department;

            await fullstackDbContext.SaveChangesAsync();

            return Ok(updateEmployeeRequest);
        }

        [HttpDelete]
        [Route("{id:Guid}")]

        public async Task<IActionResult> DeleteEmployee([FromRoute] Guid id)
        {
            var employee = await fullstackDbContext.Employees.FindAsync(id);

            if (employee == null)
            {
                return NotFound();
            }

            fullstackDbContext.Employees.Remove(employee);
            await fullstackDbContext.SaveChangesAsync();
            return Ok(employee);
        }


    }
}
