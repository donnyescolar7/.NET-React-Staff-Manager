use master
go
IF NOT EXISTS(SELECT name FROM master.dbo.sysdatabases WHERE NAME = 'PYSOPHOS')
CREATE DATABASE PYSOPHOS

GO 

USE PYSOPHOS

GO

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'ESTUDIANTE')
create table ESTUDIANTE(
IdEstudiante int primary key identity(1,1),
Nombre varchar(60),
Facultad varchar(60),
Semestre int,
)

GO

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'MAESTRO')
create table MAESTRO(
IdMaestro int primary key identity(1,1),
Nombre varchar(60),
Titulo varchar(60),
Experiencia int,
)

GO

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'CURSO')
create table CURSO(
IdCurso int primary key identity(1,1),
Nombre varchar(60),
NombrePrerrequisito varchar(60),
NumeroCreditos int,
Cupos int,
IdMaestro int,

CONSTRAINT FK_R_IDMAESTRO FOREIGN KEY (IdMaestro) REFERENCES MAESTRO(IdMaestro),

)

GO

--****************TABLAS DE RELACIONES****************--

--*CURSO - ESTUDIANTE*--

if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'R_CURSO_ESTUDIANTE')
create table R_CURSO_ESTUDIANTE(
Id int primary key identity(1,1),
IdCurso int,
IdEstudiante int

CONSTRAINT FK_R_IDCURSO FOREIGN KEY (IdCurso) REFERENCES CURSO(IdCurso),
CONSTRAINT FK_R_IDESTUDIANTE FOREIGN KEY (IdEstudiante) REFERENCES ESTUDIANTE(IdEstudiante),

)

GO

--*CURSO - MAESTRO*--

/*if not exists (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'dbo' AND TABLE_NAME = 'R_CURSO_MAESTRO')
create table R_CURSO_MAESTRO(
IdCurso int primary key,
IdMaestro int


CONSTRAINT FK_R_CURSO FOREIGN KEY (IdCurso) REFERENCES CURSO(IdCurso),
CONSTRAINT FK_R_MAESTRO FOREIGN KEY (IdMaestro) REFERENCES MAESTRO(IdMaestro)

)

GO*/
