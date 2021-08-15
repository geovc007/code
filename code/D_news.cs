using code.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace code
{
    public class D_news
    {
        private IDbContext dbContext;
        public D_news(IDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public List<E_News> Get_all_news()
        {
            List<E_News> news = new List<E_News>();
            try
            {
                String query = $"select * from news t";
                return dbContext.getList<E_News>(query);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public E_News Get_one_news(String id)
        {
            E_News news = new E_News();
            try
            {
                String query = $"select * from news t where id='{id}'";
                return dbContext.getObject<E_News>(query);
            }
            catch (Exception ex)
            {
                throw;
            }
        }

        public E_response_news Insert_news(E_News news)
        {
            E_response_news response = new E_response_news();
            try
            {
                var param = new
                {
                    id = Guid.NewGuid().ToString("n").Substring(0, 12),
                    title = news.title,
                    description = news.description,
                    content = news.content,
                    url = news.url,
                    image = news.image,
                    publishedAt = DateTime.Now,
                    source = news.source,
                    source_url = news.source_url
                };
                string query = $@"insert into news (id, title, description, content, url, image, publishedAt, source, source_url) values (@id, @title, @description, @content, @url, @image, @publishedAt, @source, @source_url)";
                dbContext.ejecutarQuery(query, param);
                response.estado = "Ok";
                response.mensaje = "News Created";
                return response;
            }
            catch (Exception ex)
            {
                response.estado = "Error";
                response.mensaje = "Error, Try Again";
                return response;
            }
        }

        public E_response_news Update_news(String id, E_News news)
        {
            E_response_news response = new E_response_news();
            try
            {
                var param = new
                {
                    id = id,
                    title = news.title,
                    description = news.description,
                    content = news.content,
                    url = news.url,
                    image = news.image,
                    publishedAt = DateTime.Now,
                    source = news.source,
                    source_url = news.source_url
                };
                String query = $@"UPDATE news SET title = @title, title=@title, description=@description, content=@content, url=@url, image=@image, publishedAt=@publishedAt, source=@source, source_url=@source_url WHERE id= @id";
                dbContext.ejecutarQuery(query, param);
                response.estado = "Ok";
                response.mensaje = "News Updated";
                return response;
            }
            catch (Exception ex)
            {
                response.estado = "Error";
                response.mensaje = "Error, Try Again";
                return response;
            }
        }

        public E_response_news Delete_news(String id)
        {
            E_response_news response = new E_response_news();
            try
            {
                string query = $@"delete from news where id='{id}'";
                dbContext.ejecutarQuery(query);
                response.estado = "Ok";
                response.mensaje = "News Deleted";
                return response;
            }
            catch (Exception ex)
            {
                response.estado = "Error";
                response.mensaje = "Error, Try Again";
                return response;
            }
        }
    }
}
