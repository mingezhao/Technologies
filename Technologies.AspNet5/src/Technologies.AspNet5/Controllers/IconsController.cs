using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using System.IO;
using System.Text.RegularExpressions;
using System.Net.Http;
using Technologies.AspNet5.Models;

namespace Technologies.AspNet5.Controllers
{
    public class IconsController : Controller
    {
        public async Task<IActionResult> Index()
        {
            var model = new IconsModel()
            {
                Glyphicons = await GetClasses("fa","~/lib/font-awesome/css/font-awesome.css"),
                FontAwesome = await GetClasses("glyphicon", "~/lib/bootstrap/css/bootstrap.css"),
            };

            return View(model);
        }

        [NonAction]
        private async Task<List<string>> GetClasses(string prefix, string uri)
        {
            var classes = new List<string>();
            var content = string.Empty;

            // Get css content
            using (var client = new HttpClient())
            {
                content = await client.GetStringAsync(new Uri(new Uri("http://" + this.Request.Host.ToString()), Url.Content(uri)));
            }

            // Find matched values with regex
            var pattern = string.Format(@"\.({0}[a-z|A-Z|-]*):before", prefix);
            MatchCollection matches = Regex.Matches(content, pattern, RegexOptions.IgnoreCase);

            foreach (Match match in matches)
            {
                if (match.Success)
                {
                    classes.Add(match.Groups[1].Value);
                }
            }

            return classes;
        }
    }
}
