go
use PYSOPHOS
go
--************************ PROCEDIMIENTOS CURSO************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_crear')
DROP PROCEDURE curso_crear

go

create procedure curso_crear(
@nombre varchar(60),
@nombre_prerrequisito varchar(60),
@numero_creditos int,
@cupos int,
@idmaestro int
)
as
begin

insert into CURSO(Nombre,NombrePrerrequisito,NumeroCreditos,Cupos,IdMaestro)
values
(
@nombre,
@nombre_prerrequisito,
@numero_creditos,
@cupos,
@idmaestro
)

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_modificar')
DROP PROCEDURE curso_modificar

go

create procedure curso_modificar(
@idcurso int,
@nombre varchar(60),
@nombre_prerrequisito varchar(60),
@numero_creditos int,
@cupos int,
@idmaestro int
)
as
begin

UPDATE CURSO SET
Nombre = @nombre,
NombrePrerrequisito = @nombre_prerrequisito,
NumeroCreditos = @numero_creditos,
Cupos = @cupos,
IdMaestro = @idmaestro
WHERE IdCurso = @idcurso

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_listar')
DROP PROCEDURE curso_listar

go

create procedure curso_listar
as
begin

/*select * from curso*/

SELECT *,
(Curso.Cupos - (SELECT COUNT(*) FROM R_CURSO_ESTUDIANTE WHERE R_CURSO_ESTUDIANTE.IdCurso = CURSO.IdCurso)) AS CuposDisponibles
FROM CURSO

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_obtener')
DROP PROCEDURE curso_obtener

go

create procedure curso_obtener(@idcurso int)
as
begin

/*select * from curso where IdCurso = @idcurso*/

SELECT *,
(Curso.Cupos - (SELECT COUNT(*) FROM R_CURSO_ESTUDIANTE WHERE R_CURSO_ESTUDIANTE.IdCurso = CURSO.IdCurso)) AS CuposDisponibles
FROM CURSO
WHERE CURSO.IdCurso = @idcurso

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_eliminar')
DROP PROCEDURE curso_eliminar

go

create procedure curso_eliminar(
@idcurso int
)
as
begin

delete from curso where IdCurso = @idcurso

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_listar_por_estudiante')
DROP PROCEDURE curso_listar_por_estudiante

go

create procedure curso_listar_por_estudiante(@idestudiante int)
as
begin

/*select * from curso*/

SELECT *,
(Curso.Cupos - (SELECT COUNT(*) FROM R_CURSO_ESTUDIANTE WHERE R_CURSO_ESTUDIANTE.IdCurso = CURSO.IdCurso)) AS CuposDisponibles
FROM CURSO
WHERE CURSO.IdCurso 
IN (SELECT R_CURSO_ESTUDIANTE.IdCurso FROM R_CURSO_ESTUDIANTE WHERE R_CURSO_ESTUDIANTE.IdEstudiante = @idestudiante)


end

go

--************************ PROCEDIMIENTOS ESTUDIANTE************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_crear')
DROP PROCEDURE estudiante_crear

go

create procedure estudiante_crear(
@nombre varchar(60),
@facultad varchar(60),
@semestre int
)
as
begin

insert into ESTUDIANTE(Nombre, Facultad, Semestre)
values
(
@nombre,
@facultad,
@semestre
)

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_modificar')
DROP PROCEDURE estudiante_modificar

go

create procedure estudiante_modificar(
@idestudiante int,
@nombre varchar(60),
@facultad varchar(60),
@semestre int
)
as
begin

UPDATE ESTUDIANTE SET
Nombre = @nombre,
Facultad = @facultad,
Semestre = @semestre
WHERE IdEstudiante = @idestudiante

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_listar')
DROP PROCEDURE estudiante_listar

go

create procedure estudiante_listar
as
begin

/*select * from estudiante*/

SELECT 
   *,
   (SELECT  ISNULL(SUM(CURSO_CRED.NumeroCreditos), 0)
    FROM (SELECT R_CURSO_ESTUDIANTE.IdCurso, R_CURSO_ESTUDIANTE.IdEstudiante, CURSO.NumeroCreditos
    FROM R_CURSO_ESTUDIANTE
    JOIN CURSO ON CURSO.IdCurso = R_CURSO_ESTUDIANTE.IdCurso
	)AS CURSO_CRED
    WHERE CURSO_CRED.IdEstudiante = ESTUDIANTE.IdEstudiante) AS CantidadCreditos
FROM ESTUDIANTE

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_obtener')
DROP PROCEDURE estudiante_obtener

go

create procedure estudiante_obtener(@idestudiante int)
as
begin

select * from estudiante where IdEstudiante = @idestudiante
end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_eliminar')
DROP PROCEDURE estudiante_eliminar

go

create procedure estudiante_eliminar(
@idestudiante int
)
as
begin

delete from estudiante where IdEstudiante = @idestudiante

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_listar_por_curso')
DROP PROCEDURE estudiante_listar_por_curso

go

create procedure estudiante_listar_por_curso(@idcurso int)
as
begin

SELECT 
   *,
   (SELECT  ISNULL(SUM(CURSO_CRED.NumeroCreditos), 0)
    FROM (SELECT R_CURSO_ESTUDIANTE.IdCurso, R_CURSO_ESTUDIANTE.IdEstudiante, CURSO.NumeroCreditos
    FROM R_CURSO_ESTUDIANTE
    JOIN CURSO ON CURSO.IdCurso = R_CURSO_ESTUDIANTE.IdCurso
	)AS CURSO_CRED
    WHERE CURSO_CRED.IdEstudiante = ESTUDIANTE.IdEstudiante) AS CantidadCreditos
FROM ESTUDIANTE
WHERE ESTUDIANTE.IdEstudiante 
IN (SELECT R_CURSO_ESTUDIANTE.IdEstudiante FROM R_CURSO_ESTUDIANTE WHERE R_CURSO_ESTUDIANTE.IdCurso = @idcurso)

end

go

--************************ PROCEDIMIENTOS MAESTRO************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'maestro_crear')
DROP PROCEDURE maestro_crear

go

create procedure maestro_crear(
@nombre varchar(60),
@titulo varchar(60),
@experiencia int
)
as
begin

insert into MAESTRO(Nombre, Titulo, Experiencia)
values
(
@nombre,
@titulo,
@experiencia
)

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'maestro_modificar')
DROP PROCEDURE maestro_modificar

go

create procedure maestro_modificar(
@idmaestro int,
@nombre varchar(60),
@titulo varchar(60),
@experiencia int
)
as
begin

UPDATE MAESTRO SET
Nombre = @nombre,
Titulo = @titulo,
Experiencia = @experiencia
WHERE IdMaestro = @idmaestro

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'maestro_listar')
DROP PROCEDURE maestro_listar

go

create procedure maestro_listar
as
begin

select * from maestro

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'maestro_obtener')
DROP PROCEDURE maestro_obtener

go

create procedure maestro_obtener(@idmaestro int)
as
begin

select * from maestro where IdMaestro = @idmaestro
end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'maestro_eliminar')
DROP PROCEDURE maestro_eliminar

go

create procedure maestro_eliminar(
@idmaestro int
)
as
begin

delete from maestro where IdMaestro = @idmaestro

end

go
