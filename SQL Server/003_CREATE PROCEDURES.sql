go
use DBPRUEBAS
go
--************************ PROCEDIMIENTOS ************************--

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

