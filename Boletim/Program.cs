using Boletim.Models;
using Boletim.services;

var builder = WebApplication.CreateBuilder(args);
// Add services to the container.   
builder.Services.Configure<BoletimDatabaseSettings>(
    builder.Configuration.GetSection("BoletimDatabase")
);

builder.Services.AddSingleton<AtividadesServices>();
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:5173/").AllowAnyOrigin();
        });
});

var app = builder.Build();

app.UseCors();
app.MapGet("/", () => "Hello World!");
app.MapControllers();

app.Run();
