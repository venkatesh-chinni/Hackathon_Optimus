using System; 
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using hackathon_backend.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace hackathon_backend.Controllers
{
    [Route("api/[controller]")]
    public class HackathonController:Controller{

        private readonly HackathonContext _context;

        public HackathonController(HackathonContext context){
            _context=context;
        }

        [HttpGet]
            public async Task<List<scoreform>> GetAllAsync()
            {
                return await _context.scoreform.ToListAsync();
            }

            [HttpPost]
            public async Task CreateAsync([FromBody] scoreform item)
            {
                  
                if (item == null)
                {
                    // return BadRequest();
                }

                _context.scoreform.Add(item);
              await _context.SaveChangesAsync();

                // return await CreatedAtRoute("GetTodo", new { id = item.ID }, item);
            } 
    }
}