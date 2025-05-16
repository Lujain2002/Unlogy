using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore ;
using Unlogy.Data;
using Unlogy.Dto;
using Unlogy.Entities ;

namespace Unlogy.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CategoriesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // Add Category
        [HttpPost]
        public async Task<IActionResult> AddCategory([FromBody] Category category)
        {
            if (category == null || string.IsNullOrEmpty(category.Name))
            {
                return BadRequest("Invalid category.");
            }

            _context.Categories.Add(category);
            await _context.SaveChangesAsync();

            return Ok(category);
        }

        // Category Details
        [HttpGet("{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);

            if (category == null)
                {
            return NotFound();
            }

            return Ok(category);
        }

        // Update Category
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, Category updatedCategory)
        {
            if (id != updatedCategory.Id)
                {
                    return BadRequest("ID mismatch");
                }

            var category = await _context.Categories.FindAsync(id);
            if (category == null)
                {
                    return NotFound();
                }

            category.Name = updatedCategory.Name;
            category.Courses = updatedCategory.Courses;
    

            await _context.SaveChangesAsync();

            return NoContent(); 
        }

    }
}
