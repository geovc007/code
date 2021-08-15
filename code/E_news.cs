using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace code
{
        public class E_News
        {
            public String id { get; set; }
            public String title { get; set; }
            public String description { get; set; }
            public String content { get; set; }
            public String url { get; set; }
            public String image { get; set; }
            public DateTime publishedAt { get; set; }
            public String source { get; set; }
            public String source_url { get; set; }
        }

        public class E_sourse
        {
            public String name { get; set; }
            public String url { get; set; }
        }

        public class E_response_news
        {
            public String estado { get; set; }
            public String mensaje { get; set; }
        }
}
