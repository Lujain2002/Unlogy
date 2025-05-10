using Microsoft.AspNetCore.Mvc ;
using Microsoft.EntityFrameworkCore ;
using Unlogy.Data ;
using Unlogy.Dto ;

namespace Unlogy.Controllers ;

[Route("api/[controller]")]
[ApiController]
public class CoursesController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CoursesController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetMostPopularCourses()
    {
        var popularCourses = await _context.Courses
            .Where(c => c.IsPublished && c.ApprovalStatus == "Approved")
            .OrderByDescending(c => c.Rating)  
            .Select(c => new
            {
                c.Id,
                c.Title,
                c.ImageUrl,
                c.Rating, 
            })
            .ToListAsync();

        return Ok(popularCourses);
    }
}
