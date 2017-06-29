using System;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using System.Collections.Generic;

namespace WebAPIApplication.Controllers
{
    public class Subscription
    {
        public Guid SubscriptionID { get; set; }
        public string SubscriptionPlan { get; set; }
        public string OwnerEmail { get; set; }
    }

    [Route("api/subscriptions")]
    public class SubscriptionController : Controller
    {
        private IMemoryCache _cache;
        private const string SUBSCRIPTIONLISTCACHEKEY = "SubscriptionsList";
        public SubscriptionController(IMemoryCache memoryCache)
        {
            _cache = memoryCache;
        }

        [Authorize("read:subscription")]
        [HttpGet]
        public IActionResult GetAll()
        {
            return Json(_cache.Get(SUBSCRIPTIONLISTCACHEKEY));
        }

        [Authorize("create:subscription")]
        [HttpPost]
        public IActionResult Create([FromBody] Subscription subscription)
        {
            var subscriptionList = (List<Subscription>)_cache.Get(SUBSCRIPTIONLISTCACHEKEY);
            if (subscriptionList == null) subscriptionList = new List<Subscription>();

            subscription.SubscriptionID = Guid.NewGuid();

            subscriptionList.Add(subscription);
            _cache.Set(SUBSCRIPTIONLISTCACHEKEY, subscriptionList);

            return Created($"http://localhost:5000/api/subscriptions/{subscription.SubscriptionID}", subscription);
        }
    }
}
