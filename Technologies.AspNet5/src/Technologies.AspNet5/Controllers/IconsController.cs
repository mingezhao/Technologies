using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using System.IO;
using System.Text.RegularExpressions;
using System.Net.Http;

namespace Technologies.AspNet5.Controllers
{
    public class IconsController : Controller
    {
        public async Task<IActionResult> Index()
        {
            var fontAwesomeClasses = new List<string>();

            var content = string.Empty;
            using (var client = new HttpClient()) {
                content = await client.GetStringAsync(new Uri(new Uri("http://"+this.Request.Host.ToString()), Url.Content("~/lib/font-awesome/css/font-awesome.css")));
            }

            MatchCollection match = Regex.Matches(content, @"\.(fa[a-z|A-Z|-]*):before", RegexOptions.IgnoreCase);

            return View();
        }
    }
}
