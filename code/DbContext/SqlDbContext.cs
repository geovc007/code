using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using Dapper;

namespace code.DbContext
{
    public class SqlDbContext : IDbContext
    {
        public readonly string _connectionString;

        public SqlDbContext(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("SqlDBConnection");
        }

        public void ejecutarQuery(string query)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }

                SqlMapper.Query(conn, query, commandType: CommandType.Text);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public void ejecutarQuery(string query, object parametros)
        {

            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }

                SqlMapper.Query(conn, query, param: parametros, commandType: CommandType.Text);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public async Task ejecutarQueryAsync(string query)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }

                SqlMapper.QueryAsync(conn, query, commandType: CommandType.Text);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public async Task ejecutarQueryAsync(string query, object parametros)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }

                SqlMapper.QueryAsync(conn, query, param: parametros, commandType: CommandType.Text);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public List<T> getList<T>(string query)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                return SqlMapper.Query<T>(conn, query, commandType: CommandType.Text).ToList();
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public T getObject<T>(string query)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                var l = SqlMapper.Query<T>(conn, query, commandType: CommandType.Text).ToList();
                if (l.Count > 0)
                    return l[0];
                else
                    return default(T);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public T getObject<T>(string query, object parametros)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                var l = SqlMapper.Query<T>(conn, query, param: parametros, commandType: CommandType.Text).ToList();

                if (l.Count > 0)
                    return l[0];
                else
                    return default(T);
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }

        public List<T> get_list<T>(string query, object parametros)
        {
            var conn = new MySqlConnection(_connectionString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                    conn.Open();
                return SqlMapper.Query<T>(conn, query, param: parametros, commandType: CommandType.Text).ToList();
            }
            catch (Exception ex)
            {
                throw new MysqlException("Error al ejecutar sql", ex);
            }
            finally
            {
                conn.Close();
                conn.Dispose();
            }
        }
    }
}
