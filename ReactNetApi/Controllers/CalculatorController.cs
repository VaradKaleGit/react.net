using Microsoft.AspNetCore.Mvc;

namespace ReactNetApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        [HttpGet("add")]
        public ActionResult<double> Add(double a, double b)
        {
            return a + b;
        }

        [HttpGet("subtract")]
        public ActionResult<double> Subtract(double a, double b)
        {
            return a - b;
        }

        [HttpGet("multiply")]
        public ActionResult<double> Multiply(double a, double b)
        {
            return a * b;
        }

        [HttpGet("divide")]
        public ActionResult<double> Divide(double a, double b)
        {
            if (b == 0)
            {
                return BadRequest("Division by zero is not allowed.");
            }
            return a / b;
        }
    }
}
