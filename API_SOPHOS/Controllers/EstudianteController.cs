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
    }
}