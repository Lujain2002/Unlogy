using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Unlogy.Data;
using Unlogy.Entities;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly ApplicationDbContext _context;

    public AdminController(UserManager<AppUser> userManager, RoleManager<IdentityRole> roleManager, ApplicationDbContext context)
    {
        _userManager = userManager;
        _roleManager = roleManager;
        _context = context;
    }

    [HttpPost("AddInstructor")]
    public async Task<IActionResult> AddInstructor([FromBody] AddInstructorDto dto)
    {
        var instructor = new AppUser
        {
            UserName = dto.Email,
            Email = dto.Email
        };

        var result = await _userManager.CreateAsync(instructor, "Default@123");
        if (!result.Succeeded)
            return BadRequest(result.Errors);

        if (!await _roleManager.RoleExistsAsync("Instructor"))
            await _roleManager.CreateAsync(new IdentityRole("Instructor"));

        await _userManager.AddToRoleAsync(instructor, "Instructor");

        return Ok(new { message = "Instructor created successfully." });
    }
    [HttpDelete("DeleteInstructor/{id}")]
    public async Task<IActionResult> DeleteInstructor(string id)
    {
        var instructor = await _userManager.FindByIdAsync(id);

        if (instructor == null)
            return NotFound(new { message = "Instructor not found." });

        
        var roles = await _userManager.GetRolesAsync(instructor);
        if (!roles.Contains("Instructor"))
            return BadRequest(new { message = "User is not an instructor." });

        var result = await _userManager.DeleteAsync(instructor);

        if (!result.Succeeded)
            return BadRequest(result.Errors);

        return Ok(new { message = "Instructor deleted successfully." });
    }
    [HttpGet("Instructors")]
    public async Task<IActionResult> GetInstructorsPaged(int page = 1, int pageSize = 5)
    {
        if (pageSize < 1 || pageSize > 10)
            return BadRequest(new { message = "Page size must be between 1 and 10." });

        var instructors = await _userManager.GetUsersInRoleAsync("Instructor");

        var pagedInstructors = instructors
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .Select(i => new
            {
                i.Id,
                UserName = i.UserName,
                i.Email
            });

        return Ok(pagedInstructors);
    }


}


public class AddInstructorDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public int ProjectId { get; set; }
    }




