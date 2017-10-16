using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore.Extensions;

namespace hackathon_backend.Models
{
    public class HackathonContext : DbContext
    {
        public HackathonContext(DbContextOptions<HackathonContext> options)
            : base(options)
        {
        }

        public DbSet<scoreform> scoreform { get; set; }
        

    }
}