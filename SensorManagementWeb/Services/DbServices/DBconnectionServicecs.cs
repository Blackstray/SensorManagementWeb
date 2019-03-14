using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace SensorManagementWeb
{

    public class DBconnectionService
    {
        private string ConnectionString;
        public MySqlConnection DataBaseConnection;

        public void Connect(string username, string password, string serverHost, string dataBase)
        {
            ConnectionString =
                "Server=" + serverHost + ";" +
                "Port=3306;" +
                "Database="+dataBase+";" +
                "Uid=" + username + ";" +
                "password=" + password + ";";
            DataBaseConnection = new MySqlConnection(ConnectionString);
            DataBaseConnection.ConnectionString = ConnectionString;
        }
    }
}
