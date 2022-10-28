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
            //Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return EstudianteData.Crear(estudiante);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpPut]
        public bool Put([FromBody] Estudiante estudiante)
        {
            return EstudianteData.Modificar(estudiante);
        }

        [HttpGet("{id:int}")]
        public Estudiante Get(int id)
        {
            return EstudianteData.Obtener(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet("por_nombre/{nombre}")]
        public List<Estudiante> GetPorNombre(string nombre)
        {
            return EstudianteData.ListarPorNombre(nombre);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet]
        public List<Estudiante> Get()
        {
            return EstudianteData.Listar();
        }

        [EnableCors("AllowAllHeaders")]
        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return EstudianteData.Eliminar(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet("listarporcurso/{id:int}")]
        public List<Estudiante> GetListarPorCurso(int id)
        {
            return EstudianteData.ListarPorCurso(id);
        }


    }
}