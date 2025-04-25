namespace Unlogy.Entities
{
    public class Course
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string ImageUrl { get; set; }  
        public string Level { get; set; }    
        public TimeSpan Duration { get; set; } 
        public bool IsPublished { get; set; }

        public int CategoryId { get; set; }
        public Category Category { get; set; }


        public string InstructorId { get; set; }

        public AppUser Instructor { get; set; }


        public ICollection<Lesson> Lessons { get; set; }
    }
}
