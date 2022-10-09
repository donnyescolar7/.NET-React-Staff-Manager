using API_SOPHOS.Models;
using System.Data;
using System.Data.SqlClient;

namespace API_SOPHOS.Data
{
    public class MaestroData
    {
        public static string Crear(Maestro maestro)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion)){
                SqlCommand cmd  =new SqlCommand("maestro_crear", conexion);
                cmd.CommandType = CommandType.StoredProcedure;
                
                cmd.Parameters.AddWithValue("@nombre", maestro.nombre);
                cmd.Parameters.AddWithValue("@titulo", maestro.titulo);
                cmd.Parameters.AddWithValue("@experiencia", maestro.experiencia);

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

        public static string Modificar(Maestro maestro)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("maestro_modificar", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idmaestro", maestro.idmaestro);
                cmd.Parameters.AddWithValue("@nombre", maestro.nombre);
                cmd.Parameters.AddWithValue("@titulo", maestro.titulo);
                cmd.Parameters.AddWithValue("@experiencia", maestro.experiencia);

                try
                {
                    conexion.Open();
                    cmd.ExecuteNonQuery();
                    return "true";
                }
                catch (Exception e)
                {
                    return e.Message;
                }

            }
        }

        public static List<Maestro> Listar()
        {
            List<Maestro> ListaMaestro = new List<Maestro>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("maestro_listar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {

                        while (dr.Read())
                        {
                            ListaMaestro.Add(new Maestro()
                            {
                                idmaestro = Convert.ToInt32(dr["IdMaestro"]),
                                nombre = dr["Nombre"].ToString(),
                                titulo = dr["Titulo"].ToString(),
                                experiencia = Convert.ToInt32(dr["Experiencia"])
                            });
                        }

                    }

                    return ListaMaestro;
                }
                catch (Exception ex)
                {
                    return ListaMaestro;
                }
            }
        }

        public static Maestro Obtener(int idmaestro)
        {
            Maestro maestro = new Maestro();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("maestro_obtener", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idmaestro", idmaestro);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            maestro = new Maestro()
                            {
                                idmaestro = Convert.ToInt32(dr["IdMaestro"]),
                                nombre = dr["Nombre"].ToString(),
                                titulo = dr["Titulo"].ToString(),
                                experiencia = Convert.ToInt32(dr["Experiencia"])
                            };
                        }

                    }
                    return maestro;
                }
                catch (Exception ex)
                {
                    return maestro;
                }
            }
        }

        public static bool Eliminar(int id)
        {
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("maestro_eliminar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idmaestro", id);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();
                    return true;
                }
                catch (Exception ex)
                {
                    return false;
                }
            }
        }

    }
}
