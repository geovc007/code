using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace code.Controllers
{
    [Route("api/news")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private D_news dnews;
        public NewsController(D_news _dnews)
        {
            dnews = _dnews;
        }

        // GET: api/<NewsController>
        [HttpGet, Route("get_all_news")]
        public List<E_News> Get_all()
        {
            List<E_News> news = new List<E_News>();
            news = dnews.Get_all_news();
            return news;
        }

        // GET api/<NewsController>/5
        [HttpGet, Route("get_news/{id}")]
        public E_News Get(String id)
        {
            E_News news = new E_News();
            news = dnews.Get_one_news(id);
            return news;
        }

        // POST api/<NewsController>
        [HttpPost, Route("insert_news")]
        public E_response_news create([FromBody] E_News news)
        {
            E_response_news response = new E_response_news();
            response = dnews.Insert_news(news);
            return response;
        }

        // PUT api/<NewsController>/5
        [HttpPut, Route("update_news/{id}")]
        public E_response_news Put(String id, [FromBody] E_News news)
        {
            E_response_news response = new E_response_news();
            response = dnews.Update_news(id, news);
            return response;
        }

        // DELETE api/<NewsController>/5
        [HttpDelete, Route("delete_news/{id}")]
        public E_response_news Delete(String id)
        {
            E_response_news response = new E_response_news();
            response = dnews.Delete_news(id);
            return response;
        }
    }
}
