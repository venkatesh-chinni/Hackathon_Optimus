using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using System.ComponentModel.DataAnnotations.Schema;

namespace hackathon_backend.Models
{
    public class scoreform
    {
        
        [Required]
        public string Name{ get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        
        public string Location { get; set;}
        [Required]
        [Key]
        public int ID {get; set;}
        [Required]
        public int score {get; set;}
        
        
    }
}