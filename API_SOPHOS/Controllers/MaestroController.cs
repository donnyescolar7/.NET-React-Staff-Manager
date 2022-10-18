using API_SOPHOS.Data;
using API_SOPHOS.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API_SOPHOS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaestroController : ControllerBase
    {

        [EnableCors("AllowAllHeaders")]
        [HttpPost]
        public bool Post([FromBody] Maestro maestro)
        {
            return MaestroData.Crear(maestro);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpPut]
        public bool Put([FromBody] Maestro maestro)
        {
            return MaestroData.Modificar(maestro);
        }

        
        [HttpGet("{id:int}")]
        public Maestro Get(int id)
        {
            return MaestroData.Obtener(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet]
        public List<Maestro> Get()
        {
            return MaestroData.Listar();
        }

        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return MaestroData.Eliminar(id);
        }


    }
}