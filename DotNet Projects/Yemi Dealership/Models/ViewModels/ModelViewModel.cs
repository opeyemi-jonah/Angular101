using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;

namespace Yemi_Dealership.Models.ViewModels
{
    public class ModelViewModel
    { 
        public Model Model { get; set; }

        public IEnumerable<Make> Makes { get; set; }

        

    }
}
