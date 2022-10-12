using API_SOPHOS.Data;
using API_SOPHOS.Models;
using Microsoft.AspNetCore.Cors;
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
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return CursoData.Listar();
        }

        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return CursoData.Eliminar(id);
        }

        [HttpGet("listarporestudiante/{id:int}")]
        public List<Curso> GetListarPorEstudiante(int id)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return CursoData.ListarPorEstudiante(id);
        }

        [HttpGet("listarpormaestro/{id:int}")]
        public List<Curso> GetListarPorMaestro(int id)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return CursoData.ListarPorMaestro(id);
        }

        [HttpPost("eliminar_r_curso_estudiante/{idcurso:int}/{idestudiante:int}")]
        public bool eliminar_r_curso_estudiante(int idcurso, int idestudiante)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return CursoData.EliminarRCursoEstudiante(idcurso, idestudiante);
        }

        [HttpPost("agregar_r_curso_estudiante/{idcurso:int}/{idestudiante:int}")]
        public bool agregar_r_curso_estudiante(int idcurso, int idestudiante)
        {
            Response.Headers.Add("Access-Control-Allow-Origin", "http://localhost:3000");
            return CursoData.AgregarRCursoEstudiante(idcurso, idestudiante);
        }

    }
}