using System.ComponentModel.DataAnnotations.Schema;

namespace AuctionService.Entities;

[Table("Items")]
public class Item
{
    public Guid Id { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int Year { get; set; }
    public string Color { get; set; }
    public int Mileage { get; set; }
    public string ImageUrl { get; set; }

    //navigation properties - bcz entity framework, 
    //when it configures the schema for our database based on the code that we're writing,
    //it's going to set up this relationship as we want it.
    public Auction Auction { get; set; }
    public Guid AuctionId { get; set; }
}
