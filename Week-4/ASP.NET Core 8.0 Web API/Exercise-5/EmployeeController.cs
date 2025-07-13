using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebApiDemo.Models;

namespace WebApiDemo.Controllers
{
    [Authorize(Roles = "Admin,POC")]
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private static List<Employee> _employees = new List<Employee>
        {
            new Employee
            {
                Id = 1,
                Name = "Alice",
                Salary = 50000,
                Permanent = true,
                Department = new Department { Id = 1, Name = "HR" },
                Skills = new List<Skill>
                {
                    new Skill { Id = 1, Name = "Communication" },
                    new Skill { Id = 2, Name = "Recruitment" }
                },
                DateOfBirth = new DateTime(1990, 1, 1)
            }
        };

        [HttpGet]
        public ActionResult<List<Employee>> Get() => Ok(_employees);

        [HttpPost]
        public IActionResult Post([FromBody] Employee emp)
        {
            _employees.Add(emp);
            return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
        }

        [HttpPut("{id}")]
        public ActionResult<Employee> Put(int id, [FromBody] Employee emp)
        {
            if (id <= 0) return BadRequest("Invalid employee id");

            var existing = _employees.FirstOrDefault(e => e.Id == id);
            if (existing == null) return BadRequest("Invalid employee id");

            existing.Name = emp.Name;
            existing.Salary = emp.Salary;
            existing.Permanent = emp.Permanent;
            existing.Department = emp.Department;
            existing.Skills = emp.Skills;
            existing.DateOfBirth = emp.DateOfBirth;

            return Ok(existing);
        }
    }
}
