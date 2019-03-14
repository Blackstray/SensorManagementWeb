using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SensorManagementWeb.Controllers
{
    public class SensorController : Controller
    {
        [HttpGet("Sensors")]
        public IEnumerable GetSensors()
        {
            DBselectionService select = new DBselectionService();

            return select.GetSensors().ToArray();
        }
    }
}
