using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace code.DbContext
{
        public interface IDbContext
        {
            List<T> getList<T>(string query);
            List<T> get_list<T>(string query, Object parametros);
            T getObject<T>(string query);
            T getObject<T>(string query, object parametros);
            Task ejecutarQueryAsync(string query);
            Task ejecutarQueryAsync(string query, Object parametros);
            void ejecutarQuery(string query);
            void ejecutarQuery(string query, Object parametros);
        }

}
