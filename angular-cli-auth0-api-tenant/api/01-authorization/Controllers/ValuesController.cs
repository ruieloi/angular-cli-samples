using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPIApplication.Controllers
{
    [Route("api/values")]
    public class ValuesController : Controller
    {
        [HttpGet]
       
        public string Ping()
        {
            return "Pong";
        }

     
    }
}
