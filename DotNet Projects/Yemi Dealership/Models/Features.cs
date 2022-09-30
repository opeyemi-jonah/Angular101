using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Yemi_Dealership.Models
{
    public class Feature
    {
        public int Id { get; set; }

        [Required]
        [MaxLength (255)]   
        public string Name { get; set; }    
    }
}
