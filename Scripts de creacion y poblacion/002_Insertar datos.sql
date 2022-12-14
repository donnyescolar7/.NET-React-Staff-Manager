USE [PYSOPHOS]
GO

/******ESTUDIANTES******/
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Donny Escolar', 'Ing de Sistemas', 10)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Daniel Escolar', 'Ing Electronica', 6)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Erika Gaviria', 'Psicologia', 8)
INSERT [dbo].[ESTUDIANTE]
( [Nombre], [Facultad], [Semestre])
VALUES
('Alfredo Escolar', 'Matematicas', 6)

/******MAESTROS******/

INSERT [dbo].[MAESTRO]
([Nombre], [Titulo], [Experiencia])
VALUES
('Eduardo Zurek', 'Ing Sistemas', 15)
INSERT [dbo].[MAESTRO]
([Nombre], [Titulo], [Experiencia])
VALUES
('Wilson Nieto', 'Ing Sistemas', 16)
INSERT [dbo].[MAESTRO]
([Nombre], [Titulo], [Experiencia])
VALUES
('Federico Gutierrez', 'Filosofo', 18)

/******CURSOS******/
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Filosofia', 'Lectura', 3, 20, 1)
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Caribe', 'Competencias', 2, 25, 3)
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Backend', 'Algoritmia', 3, 20, 1)
INSERT [dbo].[CURSO]
([Nombre], [NombrePrerrequisito], [NumeroCreditos], [Cupos], [IdMaestro])
VALUES
('Diseño', 'Estructuras', 3, 20, 2)


/******R_CURSO_ESTUDIANTE******/
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(1, 1)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(2, 1)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(1, 2)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(4, 3)
INSERT [dbo].[R_CURSO_ESTUDIANTE]
([IdCurso], [IdEstudiante])
VALUES
(3, 4)