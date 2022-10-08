using API_SOPHOS.Data;
using API_SOPHOS.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_SOPHOS.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CursoController : ControllerBase
    {

        [HttpPost]
        public string Post([FromBody] Curso curso)
        {
            return CursoData.Crear(curso);
        }

        [HttpPut]
        public string Put([FromBody] Curso curso)
        {
            return CursoData.Modificar(curso);
        }

        [HttpGet("{id:int}")]
        public Curso Get(int id)
        {
            return CursoData.Obtener(id);
        }

        [HttpGet]
        public List<Curso> Get()
        {
            return CursoData.Listar();
        }

        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return CursoData.Eliminar(id);
        }


    }
}