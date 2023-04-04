using Boletim.Models;
using Boletim.services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.   
builder.Services.Configure<BoletimDatabaseSettings>(
    builder.Configuration.GetSection("BoletimDatabase"));

builder.Services.AddSingleton<AtividadesServices>();
builder.Services.AddControllers();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapControllers();

app.Run();
