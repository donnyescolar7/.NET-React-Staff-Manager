using API_SOPHOS.Models;
using System.Data;
using System.Data.SqlClient;

namespace API_SOPHOS.Data
{
    public class CursoData
    {
        public static string Crear(Curso curso)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion)){
                SqlCommand cmd  =new SqlCommand("curso_crear", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                
                cmd.Parameters.AddWithValue("@nombre", curso.nombre);
                cmd.Parameters.AddWithValue("@nombre_prerrequisito", curso.nombre_prerrequisito);
                cmd.Parameters.AddWithValue("@numero_creditos", curso.numero_creditos);
                cmd.Parameters.AddWithValue("@cupos_disponibles", curso.cupos_disponibles);
                cmd.Parameters.AddWithValue("@idmaestro", curso.idmaestro);

                try 
                { 
                    conexion.Open();
                    cmd.ExecuteNonQuery();
                    return "true";
                }catch(Exception e)
                {
                    return e.Message;
                }

            }
        }
    }
}
