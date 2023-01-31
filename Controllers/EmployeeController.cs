using Microsoft.AspNetCore.Mvc;

namespace Angular.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly ILogger<EmployeeController> _logger;

        public EmployeeController(ILogger<EmployeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Name> Get()
        {
            yield return new Name
            {
                FirstName = "Brad",
                LastName = "Berkobien",
                JobTitle = "Senior Software Engineer, Production Support",
                Overview = "I like Dogs and coding"
            };
            ;
        }
    }
}