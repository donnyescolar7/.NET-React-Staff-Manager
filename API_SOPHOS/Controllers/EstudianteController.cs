using API_SOPHOS.Data;
using API_SOPHOS.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_SOPHOS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EstudianteController : ControllerBase
    {

        [HttpPost]
        public string Post([FromBody] Estudiante estudiante)
        {
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
            return EstudianteData.Listar();
        }

        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return EstudianteData.Eliminar(id);
        }


    }
}