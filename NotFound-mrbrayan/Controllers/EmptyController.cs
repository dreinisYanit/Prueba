using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace NotFound.Controllers
{
    [Route("api/empty")]
    [ApiController]
    public class EmptyController: ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult> Get() {             
             return NotFound();
        }
    }
}