namespace API_SOPHOS.Models
{
    public class Curso
    {
        
        public int idcurso { get; set; }
        public string nombre { get; set; }
        public string nombre_prerrequisito { get; set; }
        public int numero_creditos { get; set; }
        public int cupos_disponibles { get; set; }
        public int cupos { get; set; }
        public int idmaestro { get; set; }

    }
}
