using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System;

namespace Kendo.Mvc.Examples.Models
{
    public class CategoryViewModel
    {
        public int CategoryID { get; set; }
        public string CategoryName { get; set; }
    }
    public class ProductViewModel
    {
        public int? ProductID
        {
            get;
            set;
        }

        [Required]
        [Display(Name = "Product name")]
        public string? ProductName
        {
            get;
            set;
        }

        [Display(Name = "Unit price")]
        public decimal? UnitPrice
        {
            get;
            set;
        }

        [Display(Name = "Units in stock")]
        [DataType("Integer")]
        public int? UnitsInStock
        {
            get;
            set;
        }

        public bool? Discontinued
        {
            get;
            set;
        }

        [Display(Name = "First Ordered On")]
        [DataType(DataType.Date)]
        public DateTime FirstOrderedOn
        {
            get;
            set;
        }

        [DataType("Integer")]
        public int? UnitsOnOrder
        {
            get;
            set;
        }

        public CategoryViewModel? Category
        {
            get;
            set;
        }
    }
}