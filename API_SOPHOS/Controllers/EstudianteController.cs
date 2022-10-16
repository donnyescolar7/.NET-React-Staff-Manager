using API_SOPHOS.Data;
using API_SOPHOS.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API_SOPHOS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstudianteController : ControllerBase
    {

        [EnableCors("AllowAllHeaders")]
        [HttpPost]
        public bool Post([FromBody] Estudiante estudiante)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return EstudianteData.Crear(estudiante);
        }

        [HttpPut]
        public string Put([FromBody] Estudiante estudiante)
        {
            return EstudianteData.Modificar(estudiante);
        }

        [HttpGet("{id:int}")]
        public Estudiante Get(int id)
        {
            return EstudianteData.Obtener(id);
        }

        [HttpGet]
        public List<Estudiante> Get()
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return EstudianteData.Listar();
        }

        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return EstudianteData.Eliminar(id);
        }

        [HttpGet("listarporcurso/{id:int}")]
        public List<Estudiante> GetListarPorCurso(int id)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return EstudianteData.ListarPorCurso(id);
        }


    }
}