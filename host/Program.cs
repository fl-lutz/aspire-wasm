using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

var apiPort = 3001;

var builder = DistributedApplication.CreateBuilder(args);

//check if Spin is installed
builder.Services.AddScoped<CheckForSpin>();

builder.AddSpinApp("api", "../api", apiPort).WithOtlpExporter();
builder.AddSpinApp("forward", "../forward", 3002).WithSpinEnvironment("forward_port", apiPort.ToString()).WithOtlpExporter();

builder.Build().Run();
