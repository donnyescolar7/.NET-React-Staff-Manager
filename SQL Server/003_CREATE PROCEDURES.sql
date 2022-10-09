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
@cupos_disponibles int,
@idmaestro int
)
as
begin

insert into CURSO(Nombre,NombrePrerrequisito,NumeroCreditos,CuposDisponibles,IdMaestro)
values
(
@nombre,
@nombre_prerrequisito,
@numero_creditos,
@cupos_disponibles,
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
@cupos_disponibles int,
@idmaestro int
)
as
begin

UPDATE CURSO SET
Nombre = @nombre,
NombrePrerrequisito = @nombre_prerrequisito,
NumeroCreditos = @numero_creditos,
CuposDisponibles = @cupos_disponibles,
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

select * from curso

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'curso_obtener')
DROP PROCEDURE curso_obtener

go

create procedure curso_obtener(@idcurso int)
as
begin

select * from curso where IdCurso = @idcurso
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

--************************ PROCEDIMIENTOS ESTUDIANTE************************--

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_crear')
DROP PROCEDURE estudiante_crear

go

create procedure estudiante_crear(
@nombre varchar(60),
@facultad varchar(60),
@cant_creditos int
)
as
begin

insert into ESTUDIANTE(Nombre, Facultad, CantidadCreditos)
values
(
@nombre,
@facultad,
@cant_creditos
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
@cant_creditos int
)
as
begin

UPDATE ESTUDIANTE SET
Nombre = @nombre,
Facultad = @facultad,
CantidadCreditos = @cant_creditos
WHERE IdEstudiante = @idestudiante

end

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'estudiante_listar')
DROP PROCEDURE estudiante_listar

go

create procedure estudiante_listar
as
begin

select * from estudiante

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

