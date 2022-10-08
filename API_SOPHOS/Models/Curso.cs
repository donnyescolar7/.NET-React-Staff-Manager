namespace API_SOPHOS.Models
{
    public class Curso
    {
        /*
         @nombre varchar(60),
        @nombre_prerrequisito varchar(60),
        @numero_creditos int,
        @cupos_disponibles int,
        @idmaestro int
         */
        public int idcurso { get; set; }
        public string nombre { get; set; }
        public string nombre_prerrequisito { get; set; }
        public int numero_creditos { get; set; }
        public int cupos_disponibles { get; set; }
        public int idmaestro { get; set; }

    }
}
