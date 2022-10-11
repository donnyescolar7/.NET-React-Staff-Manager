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
                cmd.Parameters.AddWithValue("@cupos_disponibles", curso.cupos);
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

        public static string Modificar(Curso curso)
        {
            using (SqlConnection conexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_modificar", conexion);
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@idcurso", curso.idcurso);
                cmd.Parameters.AddWithValue("@nombre", curso.nombre);
                cmd.Parameters.AddWithValue("@nombre_prerrequisito", curso.nombre_prerrequisito);
                cmd.Parameters.AddWithValue("@numero_creditos", curso.numero_creditos);
                cmd.Parameters.AddWithValue("@cupos_disponibles", curso.cupos);
                cmd.Parameters.AddWithValue("@idmaestro", curso.idmaestro);

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

        public static List<Curso> Listar()
        {
            List<Curso> ListaUsuario = new List<Curso>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_listar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {

                        while (dr.Read())
                        {
                            ListaUsuario.Add(new Curso()
                            {
                                idcurso = Convert.ToInt32(dr["IdCurso"]),
                                nombre = dr["Nombre"].ToString(),
                                nombre_prerrequisito = dr["NombrePrerrequisito"].ToString(),
                                numero_creditos = Convert.ToInt32(dr["NumeroCreditos"]),
                                cupos = Convert.ToInt32(dr["Cupos"]),
                                cupos_disponibles = Convert.ToInt32(dr["CuposDisponibles"]),
                                idmaestro = Convert.ToInt32(dr["IdMaestro"])
                            });
                        }

                    }

                    return ListaUsuario;
                }
                catch (Exception ex)
                {
                    return ListaUsuario;
                }
            }
        }

        public static Curso Obtener(int idcurso)
        {
            Curso curso = new Curso();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_obtener", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idcurso", idcurso);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {
                        while (dr.Read())
                        {
                            curso = new Curso()
                            {
                                idcurso = Convert.ToInt32(dr["IdCurso"]),
                                nombre = dr["Nombre"].ToString(),
                                nombre_prerrequisito = dr["NombrePrerrequisito"].ToString(),
                                numero_creditos = Convert.ToInt32(dr["NumeroCreditos"]),
                                cupos = Convert.ToInt32(dr["Cupos"]),
                                cupos_disponibles = Convert.ToInt32(dr["CuposDisponibles"]),
                                idmaestro = Convert.ToInt32(dr["IdMaestro"])
                            };
                        }

                    }
                    return curso;
                }
                catch (Exception ex)
                {
                    return curso;
                }
            }
        }

        public static bool Eliminar(int id)
        {
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_eliminar", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idcurso", id);

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

        public static List<Curso> ListarPorEstudiante(int id)
        {
            List<Curso> ListaUsuario = new List<Curso>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_listar_por_estudiante", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idestudiante", id);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {

                        while (dr.Read())
                        {
                            ListaUsuario.Add(new Curso()
                            {
                                idcurso = Convert.ToInt32(dr["IdCurso"]),
                                nombre = dr["Nombre"].ToString(),
                                nombre_prerrequisito = dr["NombrePrerrequisito"].ToString(),
                                numero_creditos = Convert.ToInt32(dr["NumeroCreditos"]),
                                cupos = Convert.ToInt32(dr["Cupos"]),
                                cupos_disponibles = Convert.ToInt32(dr["CuposDisponibles"]),
                                idmaestro = Convert.ToInt32(dr["IdMaestro"])
                            });
                        }

                    }

                    return ListaUsuario;
                }
                catch (Exception ex)
                {
                    return ListaUsuario;
                }
            }
        }

        public static List<Curso> ListarPorMaestro(int id)
        {
            List<Curso> ListaUsuario = new List<Curso>();
            using (SqlConnection oConexion = new SqlConnection(Conexion.rutaConexion))
            {
                SqlCommand cmd = new SqlCommand("curso_listar_por_maestro", oConexion);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@idmaestro", id);

                try
                {
                    oConexion.Open();
                    cmd.ExecuteNonQuery();

                    using (SqlDataReader dr = cmd.ExecuteReader())
                    {

                        while (dr.Read())
                        {
                            ListaUsuario.Add(new Curso()
                            {
                                idcurso = Convert.ToInt32(dr["IdCurso"]),
                                nombre = dr["Nombre"].ToString(),
                                nombre_prerrequisito = dr["NombrePrerrequisito"].ToString(),
                                numero_creditos = Convert.ToInt32(dr["NumeroCreditos"]),
                                cupos = Convert.ToInt32(dr["Cupos"]),
                                cupos_disponibles = Convert.ToInt32(dr["CuposDisponibles"]),
                                idmaestro = Convert.ToInt32(dr["IdMaestro"])
                            });
                        }

                    }

                    return ListaUsuario;
                }
                catch (Exception ex)
                {
                    return ListaUsuario;
                }
            }
        }

    }
}
