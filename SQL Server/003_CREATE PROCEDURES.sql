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

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_modificar')
DROP PROCEDURE usp_modificar

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_obtener')
DROP PROCEDURE usp_obtener

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_listar')
DROP PROCEDURE usp_obtener

go

IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND name = 'usp_eliminar')
DROP PROCEDURE usp_eliminar

go

--************************ PROCEDIMIENTOS PARA CREAR ************************--
create procedure usp_registrar(
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@ciudad varchar(60)
)
as
begin

insert into USUARIO(DocumentoIdentidad,Nombres,Telefono,Correo,Ciudad)
values
(
@documentoidentidad,
@nombres,
@telefono,
@correo,
@ciudad
)

end


go

create procedure usp_modificar(
@idusuario int,
@documentoidentidad varchar(60),
@nombres varchar(60),
@telefono varchar(60),
@correo varchar(60),
@ciudad varchar(60)
)
as
begin

update USUARIO set 
DocumentoIdentidad = @documentoidentidad,
Nombres = @nombres,
Telefono = @telefono,
Correo = @correo,
Ciudad = @ciudad
where IdUsuario = @idusuario

end

go

create procedure usp_obtener(@idusuario int)
as
begin

select * from usuario where IdUsuario = @idusuario
end

go
create procedure usp_listar
as
begin

select * from usuario
end


go

go

create procedure usp_eliminar(
@idusuario int
)
as
begin

delete from usuario where IdUsuario = @idusuario

end

go