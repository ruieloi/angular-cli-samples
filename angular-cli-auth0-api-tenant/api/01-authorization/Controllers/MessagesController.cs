using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace WebAPIApplication.Controllers
{
    public class Message
    {
        public DateTime Date { get; set; }
        public string Subject { get; set; }
    }

    [Route("api/messages")]
    public class MessagesController : Controller
    {
        [Authorize("read:messages")]
        [HttpGet]
        public IActionResult GetAll()
        {
            var claimsIdentity = User.Identity as ClaimsIdentity;

            return Json(new Message[] 
            {
                new Message
                {
                    Date = DateTime.Now,
                    Subject = "Confirm Newsletter subscription"
                },
                new Message
                {
                    Date = DateTime.Now.AddDays(-1),
                    Subject = "Annual increase"
                }
            });
        }

        [Authorize("create:messages")]
        [HttpPost]
        public IActionResult Create([FromBody] Message message)
        {
            return Created("http://localhost:5000/api/messages/1", message);
        }
    }
}
