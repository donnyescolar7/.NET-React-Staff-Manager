using API_SOPHOS.Models;
using System.Data;
using System.Data.SqlClient;

namespace API_SOPHOS.Data
{
    public class EstudianteData
    {
        public static bool Crear(Estudiante estudiante)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion)){
                SqlCommand cmd  =new SqlCommand("estudiante_crear", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                
                cmd.Parameters.AddWithValue("@nombre", estudiante.nombre);
                cmd.Parameters.AddWithValue("@facultad", estudiante.facultad);
                cmd.Parameters.AddWithValue("@semestre", estudiante.semestre);

                try 
                { 
                    conexion.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }catch(Exception e)
                {
                    return false;
                }

            }
        }

        public static bool Modificar(Estudiante estudiante)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("estudiante_modificar", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idestudiante", estudiante.idestudiante);
                cmd.Parameters.AddWithValue("@nombre", estudiante.nombre);
                cmd.Parameters.AddWithValue("@facultad", estudiante.facultad);
                cmd.Parameters.AddWithValue("@semestre", estudiante.semestre);

                try
                {
                    conexion.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }

            }
        }

        public static List<Estudiante> Listar()
        {
            List<Estudiante> ListaEstudiante = new List<Estudiante>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("estudiante_listar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {

                        while (dr.Read())
                        {
                            ListaEstudiante.Add(new Estudiante()
                            {
                                idestudiante = Convert.ToInt32(dr["IdEstudiante"]),
                                nombre = dr["Nombre"].ToString(),
                                facultad = dr["Facultad"].ToString(),
                                semestre = Convert.ToInt32(dr["semestre"]),
                                cant_creditos = Convert.ToInt32(dr["CantidadCreditos"])
                            });
                        }

                    }

                    return ListaEstudiante;
                }
                catch (Exception ex)
                {
                    return ListaEstudiante;
                }
            }
        }

        public static Estudiante Obtener(int idestudiante)
        {
            Estudiante estudiante = new Estudiante();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("estudiante_obtener", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idestudiante", idestudiante);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            estudiante = new Estudiante()
                            {
                                idestudiante = Convert.ToInt32(dr["IdEstudiante"]),
                                nombre = dr["Nombre"].ToString(),
                                facultad = dr["Facultad"].ToString(),
                                semestre = Convert.ToInt32(dr["semestre"]),
                                cant_creditos = Convert.ToInt32(dr["CantidadCreditos"])
                            };
                        }

                    }
                    return estudiante;
                }
                catch (Exception ex)
                {
                    return estudiante;
                }
            }
        }

        public static bool Eliminar(int id)
        {
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("estudiante_eliminar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idestudiante", id);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch (Exception ex)
                {
                    System.Diagnostics.Debug.WriteLine("This is a log from Estudiante");
                    System.Diagnostics.Debug.WriteLine(ex.Message);
                    return false;
                }
            }
        }

        public static List<Estudiante> ListarPorCurso(int id)
        {
            
            List<Estudiante> ListaEstudiante = new List<Estudiante>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("estudiante_listar_por_curso", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idcurso", id);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        System.Diagnostics.Debug.WriteLine("DONNY: "+dr);
                        while (dr.Read())
                        {
                            ListaEstudiante.Add(new Estudiante()
                            {
                                idestudiante = Convert.ToInt32(dr["IdEstudiante"]),
                                nombre = dr["Nombre"].ToString(),
                                facultad = dr["Facultad"].ToString(),
                                semestre = Convert.ToInt32(dr["semestre"]),
                                cant_creditos = Convert.ToInt32(dr["CantidadCreditos"]),
                                esta_en_curso = Convert.ToInt32(dr["EstaEnCurso"])
                            });
                        }

                    }

                    return ListaEstudiante;
                }
                catch (Exception ex)
                {
                    return ListaEstudiante;
                }
            }

        }

    }
}
