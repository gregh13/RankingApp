using Microsoft.AspNetCore.Mvc;
using RankingApp.Models;
using System.Net.NetworkInformation;

namespace RankingApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id = 1, Title = "The Shining", ImageId = 1, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 2, Title = "The Exorcist", ImageId = 2, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 3, Title = "The Hills Have Eyes", ImageId = 3, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 4, Title = "Hereditary", ImageId = 4, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 5, Title = "Terrifer", ImageId = 5, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 6, Title = "Saw", ImageId = 6, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 7, Title = "Aliens", ImageId = 7, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 8, Title = "Silent Hill", ImageId = 8, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 9, Title = "The Ring", ImageId = 9, Ranking = 0, ItemType = 1},
            new ItemModel{Id = 10, Title = "Resident Evil", ImageId = 10, Ranking = 0, ItemType = 1}
        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }
}
