var builder = WebApplication.CreateBuilder(args);

//var MyAllowSpecificOrigins = "_MyAllowSubdomainPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "AllowAllHeaders",
        policy =>
            policy.WithOrigins("http://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
        );
});

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors("AllowAllHeaders");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
