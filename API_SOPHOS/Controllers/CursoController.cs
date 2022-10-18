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
        public bool Post([FromBody] Curso curso)
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

        [EnableCors("AllowAllHeaders")]
        [HttpGet]
        public List<Curso> Get()
        {
            return CursoData.Listar();
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet("solo_disponibles")]
        public List<Curso> GetSoloDisponibles()
        {
            return CursoData.ListarSoloDisponibles();
        }

        [EnableCors("AllowAllHeaders")]
        [HttpDelete("{id:int}")]
        public bool Delete(int id)
        {
            return CursoData.Eliminar(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet("listarporestudiante/{id:int}")]
        public List<Curso> GetListarPorEstudiante(int id)
        {
            return CursoData.ListarPorEstudiante(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpGet("listarpormaestro/{id:int}")]
        public List<Curso> GetListarPorMaestro(int id)
        {
            return CursoData.ListarPorMaestro(id);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpPost("eliminar_r_curso_estudiante/{idcurso:int}/{idestudiante:int}")]
        public bool eliminar_r_curso_estudiante(int idcurso, int idestudiante)
        {
            return CursoData.EliminarRCursoEstudiante(idcurso, idestudiante);
        }

        [EnableCors("AllowAllHeaders")]
        [HttpPost("agregar_r_curso_estudiante/{idcurso:int}/{idestudiante:int}")]
        public bool agregar_r_curso_estudiante(int idcurso, int idestudiante)
        {
            return CursoData.AgregarRCursoEstudiante(idcurso, idestudiante);
        }

    }
}