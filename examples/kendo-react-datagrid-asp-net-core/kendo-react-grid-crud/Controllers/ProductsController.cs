using Kendo.Mvc;
using Kendo.Mvc.Examples.Models;
using Kendo.Mvc.Extensions;
using Kendo.Mvc.Infrastructure;
using Kendo.Mvc.UI;
using Microsoft.AspNetCore.Mvc;

namespace kendo_react_grid_crud.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductsController : Controller
    {
        private static ProductViewModel[] ProductViewModelData;
        public class PostModel
        {
            public ProductViewModel? Product { get; set; }
            public int Take { get; set; }
            public int Skip { get; set; }
            public string? Sort { get; set; }
            public string? Filter { get; set; }
            public string? Group { get; set; }
        }

        private readonly ILogger<ProductsController> _logger;

        public ProductsController(ILogger<ProductsController> logger)
        {
            if (ProductViewModelData == null) {
                ProductViewModelData = new ProductViewModel[]
            {
                new ProductViewModel(){ProductID = 1, ProductName = "Chai", FirstOrderedOn = DateTime.Today, UnitsInStock = 18, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 1, CategoryName = "Beverages"} },
                new ProductViewModel(){ProductID = 2, ProductName = "Chang", FirstOrderedOn = DateTime.Today, UnitsInStock = 19, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 1, CategoryName = "Beverages"} },
                new ProductViewModel(){ProductID = 3, ProductName = "Aniseed Syrup", FirstOrderedOn = DateTime.Today, UnitsInStock = 10, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 2, CategoryName = "Condiments"} },
                new ProductViewModel(){ProductID = 4, ProductName = "Chef Anton's Cajun Seasoning", FirstOrderedOn = DateTime.Today, UnitsInStock = 22, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 2, CategoryName = "Condiments"} },
                new ProductViewModel(){ProductID = 5, ProductName = "Chef Anton's Gumbo Mix", FirstOrderedOn = DateTime.Today, UnitsInStock = 23, Discontinued = true, Category = new CategoryViewModel(){ CategoryID = 2, CategoryName = "Condiments"} },
                new ProductViewModel(){ProductID = 6, ProductName = "Grandma's Boysenberry Spread", FirstOrderedOn = DateTime.Today, UnitsInStock = 25, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 2, CategoryName = "Condiments"} },
                new ProductViewModel(){ProductID = 7, ProductName = "Uncle Bob's Organic Dried Pears", FirstOrderedOn = DateTime.Today, UnitsInStock = 30, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 7, CategoryName = "Produce"} },
                new ProductViewModel(){ProductID = 8, ProductName = "Northwoods Cranberry Sauce", FirstOrderedOn = DateTime.Today, UnitsInStock = 40, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 2, CategoryName = "Condiments"} },
                new ProductViewModel(){ProductID = 9, ProductName = "Mishi Kobe Niku", FirstOrderedOn = DateTime.Today, UnitsInStock = 97, Discontinued = true, Category = new CategoryViewModel(){ CategoryID = 6, CategoryName = "Meat/Poultry"} },
                new ProductViewModel(){ProductID = 10, ProductName = "Ikura", FirstOrderedOn = DateTime.Today, UnitsInStock = 31, Discontinued = false, Category = new CategoryViewModel(){ CategoryID = 8, CategoryName = "Seafood"} },
            };
            }
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<ProductViewModel> Get()
        {
            return ProductViewModelData.ToArray();
        }

        [HttpPost]
        public DataSourceResult Post([DataSourceRequest] DataSourceRequest request)
        {
            return ProductViewModelData.ToDataSourceResult(request);
        }

        [HttpPut]
        public JsonResult Put([FromBody] PostModel postModel)
        {
            var dsRequest = new DataSourceRequest();
            dsRequest.Take = postModel.Take;
            dsRequest.Skip = postModel.Skip;
            dsRequest.PageSize = postModel.Take;
            // we check if this is an existing or a new item
            if(postModel.Product != null && postModel.Product.ProductID != null)
            {
                // We update the local data, but in a real Application here is the place to update the database;
                var productToBeChanged = ProductViewModelData.Where(x => x.ProductID == postModel.Product.ProductID).FirstOrDefault();
                productToBeChanged.ProductName = postModel.Product.ProductName;
                productToBeChanged.Discontinued = postModel.Product.Discontinued;
                productToBeChanged.Category = postModel.Product.Category;
                productToBeChanged.UnitsInStock = postModel.Product.UnitsInStock;
                productToBeChanged.FirstOrderedOn = postModel.Product.FirstOrderedOn;
            } else
            {
                postModel.Product.ProductID = DateTime.Now.Millisecond;
                ProductViewModelData = ProductViewModelData.Prepend(postModel.Product).ToArray();
            }


            if (!string.IsNullOrEmpty(postModel.Filter))
            {
                dsRequest.Filters = FilterDescriptorFactory.Create(postModel.Filter);
            }

            if (!string.IsNullOrEmpty(postModel.Sort))
            {
                dsRequest.Sorts = DataSourceDescriptorSerializer.Deserialize<SortDescriptor>(postModel.Sort);
            }

            if (!string.IsNullOrEmpty(postModel.Group))
            {
                dsRequest.Groups = DataSourceDescriptorSerializer.Deserialize<GroupDescriptor>(postModel.Group);
            }

            var result = Json(ProductViewModelData.ToDataSourceResult(dsRequest));

            return result;
        }
        [HttpDelete]
        public JsonResult Delete([FromBody] PostModel postModel)
        {
            var dsRequest = new DataSourceRequest();
            dsRequest.Take = postModel.Take;
            dsRequest.Skip = postModel.Skip;
            dsRequest.PageSize = postModel.Take;
            // We Delete the local data, but in a real Application here is the place to mark it as detele it the database;
            ProductViewModelData = ProductViewModelData.Where(val => val.ProductID != postModel.Product.ProductID).ToArray();

            if (!string.IsNullOrEmpty(postModel.Filter))
            {
                dsRequest.Filters = FilterDescriptorFactory.Create(postModel.Filter);
            }

            if (!string.IsNullOrEmpty(postModel.Sort))
            {
                dsRequest.Sorts = DataSourceDescriptorSerializer.Deserialize<SortDescriptor>(postModel.Sort);
            }

            if (!string.IsNullOrEmpty(postModel.Group))
            {
                dsRequest.Groups = DataSourceDescriptorSerializer.Deserialize<GroupDescriptor>(postModel.Group);
            }

            var result = Json(ProductViewModelData.ToDataSourceResult(dsRequest));

            return result;
        }
    }
}