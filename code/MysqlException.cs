using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace code
{
    [Serializable]
    public class MysqlException : Exception
    {
        public MysqlException()
        {

        }
        public MysqlException(string message) : base(message)
        {
        }
        public MysqlException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }
}
