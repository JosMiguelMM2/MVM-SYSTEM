-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-10-2022 a las 06:17:50
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdjugetes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `am_contactos`
--

CREATE TABLE `am_contactos` (
  `Id_contactos` int(11) NOT NULL,
  `Id_empleados` int(11) DEFAULT NULL,
  `Tipo_contacto` int(11) NOT NULL,
  `Dato_contacto` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `am_contactos`
--

INSERT INTO `am_contactos` (`Id_contactos`, `Id_empleados`, `Tipo_contacto`, `Dato_contacto`) VALUES
(1, 1, 8, 'luis@gmail.com'),
(2, 2, 7, '3154789845'),
(3, 3, 7, 'rosalia@gmail.com'),
(4, 4, 7, '3154879122'),
(5, 5, 8, 'claudia@gmail.com'),
(6, 6, 7, '3457815925'),
(7, 7, 8, 'elian@gmail.com'),
(8, 8, 7, '3225487414'),
(9, 9, 7, '3124578915'),
(10, 10, 8, 'alvaro@gmail.com'),
(13, 1, 7, '3147845214'),
(14, 3, 7, 'rosas@gmail.com'),
(15, 1, 8, 'luis@gmail.com'),
(16, 10, 7, '3152487945'),
(19, 10, 7, '3192487945'),
(20, 10, 7, '323456789');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ct_catalogo_universal`
--

CREATE TABLE `ct_catalogo_universal` (
  `Id_catalogo_universal` int(11) NOT NULL,
  `denominacion_universal` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `catalogo_universal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `ct_catalogo_universal`
--

INSERT INTO `ct_catalogo_universal` (`Id_catalogo_universal`, `denominacion_universal`, `catalogo_universal`) VALUES
(1, 'Catalogo', 1),
(2, 'Tipo Documento', 1),
(3, 'Cargo', 1),
(4, 'Cedula', 2),
(5, 'Operario', 3),
(6, 'TipoContacto', 1),
(7, 'Telefono', 6),
(8, 'Email', 6),
(9, 'Jefe de Operativo', 3),
(10, 'Gerente Financiero', 3),
(11, 'Gerente comercial', 3),
(12, 'Jefe Recursos Humanos', 3),
(13, 'Gerente de Logistica', 3),
(14, 'Gerente General', 3),
(15, 'Colores', 1),
(16, 'Rojo', 15),
(17, 'Tipo_producto', 1),
(18, 'Carro', 17),
(19, 'Muñeca', 17),
(20, 'Animal', 17),
(21, 'Costriccion', 17),
(22, 'Deportivo', 17),
(23, 'Verde', 15),
(24, 'Azul', 15),
(25, 'Amarillo', 15),
(26, 'Negro', 15),
(27, 'Blanco', 15),
(28, 'Tipo_Material', 1),
(29, 'Porselana', 28),
(30, 'Madera', 28),
(31, 'Plastico', 28),
(32, 'Metal', 28),
(33, 'Trapo', 28),
(35, 'violeta', 15),
(36, 'Negro Mate', 15),
(37, 'aguaMarina', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_empleados`
--

CREATE TABLE `tb_empleados` (
  `Id_empleados` int(11) NOT NULL,
  `Id_catalogos_universal` int(11) DEFAULT NULL,
  `nombre1_empleados` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre2_empleados` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `apellido1_empleados` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido2_empleados` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `tipodocu_empleados` int(11) NOT NULL,
  `numdoc_empleados` varchar(12) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `cargo_empleados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tb_empleados`
--

INSERT INTO `tb_empleados` (`Id_empleados`, `Id_catalogos_universal`, `nombre1_empleados`, `nombre2_empleados`, `apellido1_empleados`, `apellido2_empleados`, `tipodocu_empleados`, `numdoc_empleados`, `cargo_empleados`) VALUES
(1, 4, 'Lius', 'Frencisco', 'Gonsalez ', 'Prieto', 11932014, '21547', 5),
(2, 4, 'Carlos', 'Antonio', 'Perez', 'Prieto', 154835, '231456789', 5),
(3, 4, 'Rosa', 'Mariaaaaaaa', 'Rodrigez', 'Fonseca', 1254786, '1245214', 5),
(4, 4, 'Felipe', 'Sebastian', 'Paz', 'Ñandun', 4578962, '1245863', 11),
(5, 4, 'Claudia', 'Valentina', 'Salazar', 'Fernandez', 1452014, '1479549', 13),
(6, 4, 'Manuel', 'Adrian', 'Delgado', 'Garcia', 14576214, '1486514', 10),
(7, 4, 'Elian', 'David', 'Montero', 'Garcia', 14583126, '458776548', 14),
(8, 4, 'Valeria', 'Sofia', 'Nuñes', 'Andrade', 7845932, '24587915', 12),
(9, 4, 'Hugo', 'Daniel', 'Acosta', 'Rincon', 784512369, '21547896', 5),
(10, 4, 'Alvaro', 'Javier', 'Peña', 'Garcia', 95147852, '2457896', 5),
(11, 4, 'Carlos', 'Javier', 'Perez', 'Prieto', 154835, '231456789', 5),
(12, 4, 'Maria', 'Luisa', 'Gonsalez ', 'Casares', 119320923, '214578', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_juguetes`
--

CREATE TABLE `tb_juguetes` (
  `Id_juguetes` int(11) NOT NULL,
  `tipo_producto` int(11) DEFAULT NULL,
  `Nombre_juguete` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `tama_juguete` int(11) NOT NULL,
  `color_jugete` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tb_juguetes`
--

INSERT INTO `tb_juguetes` (`Id_juguetes`, `tipo_producto`, `Nombre_juguete`, `tama_juguete`, `color_jugete`) VALUES
(1, 18, 'Carro de cuerda', 1, 16),
(2, 19, 'Barbie', 5, 27),
(3, 18, 'Carro de cuerda', 3, 24),
(4, 18, 'Carro control remoto', 5, 23),
(5, 18, 'hollways', 6, 24),
(6, 18, 'hollways', 7, 27),
(7, 19, 'Matrioshkas', 2, 24),
(8, 19, 'Muñeca Porcelana', 5, 25),
(9, 19, 'Figura de Accion', 7, 16),
(10, 19, 'Muñecas Kachina', 6, 26),
(11, 19, 'JEEP Mediano', 5, 16),
(12, 19, 'barco', 10, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tb_materiales`
--

CREATE TABLE `tb_materiales` (
  `Id_material` int(11) NOT NULL,
  `clase_material` int(11) DEFAULT NULL,
  `color_material` int(11) NOT NULL,
  `cantidad_peso` int(11) DEFAULT NULL,
  `nombre_material` varchar(50) COLLATE utf8mb4_spanish_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tb_materiales`
--

INSERT INTO `tb_materiales` (`Id_material`, `clase_material`, `color_material`, `cantidad_peso`, `nombre_material`) VALUES
(1, 29, 16, 10, 'Pasta dura'),
(2, 30, 26, 15, 'Madera cedro'),
(3, 31, 25, 13, 'Pet'),
(4, 32, 26, 15, 'Aluminio'),
(5, 33, 24, 11, 'Algodon'),
(6, 31, 16, 16, 'PS'),
(7, 33, 24, 11, 'seda'),
(8, 33, 24, 15, 'Dacron Nacional');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `th_produccion_juguetes`
--

CREATE TABLE `th_produccion_juguetes` (
  `Id_produccion` int(11) NOT NULL,
  `Id_empleados` int(11) DEFAULT NULL,
  `Id_juguetes` int(11) DEFAULT NULL,
  `Fecha_produccion` date NOT NULL,
  `Detalles_produccion` varchar(500) COLLATE utf8mb4_spanish_ci NOT NULL,
  `Errores_produccion` int(11) NOT NULL,
  `Cantidad_producida` int(11) NOT NULL,
  `Material_Utilizado` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `th_produccion_juguetes`
--

INSERT INTO `th_produccion_juguetes` (`Id_produccion`, `Id_empleados`, `Id_juguetes`, `Fecha_produccion`, `Detalles_produccion`, `Errores_produccion`, `Cantidad_producida`, `Material_Utilizado`) VALUES
(1, 2, 8, '2022-09-01', 'se realizo sin nunguna novedad', 0, 5, 15),
(2, 5, 1, '2022-08-11', 'moras en la produccion', 0, 5, 20),
(3, 9, 2, '2022-07-18', 'materiales agotados', 1, 3, 10),
(4, 9, 5, '2022-07-30', 'sin novedades', 0, 8, 30),
(5, 5, 7, '2021-08-17', 'errores', 5, 20, 50),
(6, 9, 8, '2022-05-04', 'sin novedades', 0, 6, 15),
(7, 5, 10, '2022-06-27', 'algodon de mala calidad', 1, 5, 25),
(8, 9, 1, '2022-03-15', 'sin novedades', 0, 10, 30),
(9, 5, 7, '2022-08-17', 'multiples errores', 5, 1, 5),
(10, 5, 7, '2021-08-17', 'no hay novedad', 5, 20, 45),
(11, 5, 7, '2021-08-17', 'sin errores', 5, 20, 47),
(12, 5, 7, '2027-08-17', 'sin novedad', 0, 15, 35),
(13, 5, 7, '2025-08-17', 'sin novedad', 0, 21, 49),
(14, 5, 7, '2025-09-03', 'errores', 0, 15, 38),
(15, 5, 7, '2019-09-03', 'errores', 0, 20, 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tp_materiales_juguetes`
--

CREATE TABLE `tp_materiales_juguetes` (
  `Id_materiales_productos` int(11) NOT NULL,
  `Id_juguetes` int(11) DEFAULT NULL,
  `Id_material` int(11) DEFAULT NULL,
  `Descripcion` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `cantidad` float(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `tp_materiales_juguetes`
--

INSERT INTO `tp_materiales_juguetes` (`Id_materiales_productos`, `Id_juguetes`, `Id_material`, `Descripcion`, `cantidad`) VALUES
(1, 8, 1, 'Mucheca liviana echa de pasta dura', 29.00),
(2, 3, 3, 'Carro pequeño de cuerda realizado con plastico', 7.00),
(3, 9, 6, 'Figura de accion de comic de marvel ', 6.00),
(4, 6, 4, 'Coleccion 2021', 11.00),
(5, 6, 4, 'Coleccion 2021', 15.00),
(6, 7, 5, 'Iniciao de año', 5.00),
(7, 3, 2, 'Carro artesanal', 16.00),
(8, 2, 5, 'Muñeca echa en tela ', 5.00),
(9, 5, 6, 'Carros de alta gama', 15.00),
(12, 6, 4, 'Coleccion 2021', 8.00),
(13, 6, 4, 'Coleccion 2023', 11.00);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  ADD PRIMARY KEY (`Id_contactos`),
  ADD KEY `IXFK_am_contactos_ct_catalogo_universal` (`Tipo_contacto`),
  ADD KEY `IXFK_am_contactos_tb_empleados` (`Id_empleados`);

--
-- Indices de la tabla `ct_catalogo_universal`
--
ALTER TABLE `ct_catalogo_universal`
  ADD PRIMARY KEY (`Id_catalogo_universal`),
  ADD KEY `IXFK_ct_catalogo_universal_ct_catalogo_universal` (`catalogo_universal`);

--
-- Indices de la tabla `tb_empleados`
--
ALTER TABLE `tb_empleados`
  ADD PRIMARY KEY (`Id_empleados`),
  ADD KEY `IXFK_tb_empleados_ct_catalogo_universal` (`Id_catalogos_universal`),
  ADD KEY `IXFK_tb_empleados_ct_catalogo_universal_02` (`cargo_empleados`);

--
-- Indices de la tabla `tb_juguetes`
--
ALTER TABLE `tb_juguetes`
  ADD PRIMARY KEY (`Id_juguetes`),
  ADD KEY `IXFK_tb_juguetes_ct_catalogo_universal` (`tipo_producto`),
  ADD KEY `IXFK_tb_juguetes_ct_catalogo_universal_02` (`tipo_producto`),
  ADD KEY `IXFK_tb_juguetes_ct_catalogo_universal_03` (`color_jugete`);

--
-- Indices de la tabla `tb_materiales`
--
ALTER TABLE `tb_materiales`
  ADD PRIMARY KEY (`Id_material`),
  ADD KEY `IXFK_tb_materiales_ct_catalogo_universal` (`clase_material`),
  ADD KEY `IXFK_tb_materiales_ct_catalogo_universal_02` (`color_material`);

--
-- Indices de la tabla `th_produccion_juguetes`
--
ALTER TABLE `th_produccion_juguetes`
  ADD PRIMARY KEY (`Id_produccion`),
  ADD KEY `IXFK_th_produccion_juguetes_tb_empleados` (`Id_empleados`),
  ADD KEY `IXFK_th_produccion_juguetes_tb_juguetes` (`Id_juguetes`);

--
-- Indices de la tabla `tp_materiales_juguetes`
--
ALTER TABLE `tp_materiales_juguetes`
  ADD PRIMARY KEY (`Id_materiales_productos`),
  ADD KEY `IXFK_tp_materiales_juguetes_tb_juguetes` (`Id_juguetes`),
  ADD KEY `IXFK_tp_materiales_juguetes_tb_materiales` (`Id_material`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  MODIFY `Id_contactos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `ct_catalogo_universal`
--
ALTER TABLE `ct_catalogo_universal`
  MODIFY `Id_catalogo_universal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `tb_empleados`
--
ALTER TABLE `tb_empleados`
  MODIFY `Id_empleados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tb_juguetes`
--
ALTER TABLE `tb_juguetes`
  MODIFY `Id_juguetes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tb_materiales`
--
ALTER TABLE `tb_materiales`
  MODIFY `Id_material` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `th_produccion_juguetes`
--
ALTER TABLE `th_produccion_juguetes`
  MODIFY `Id_produccion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `tp_materiales_juguetes`
--
ALTER TABLE `tp_materiales_juguetes`
  MODIFY `Id_materiales_productos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `am_contactos`
--
ALTER TABLE `am_contactos`
  ADD CONSTRAINT `FK_am_contactos_ct_catalogo_universal` FOREIGN KEY (`Tipo_contacto`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`),
  ADD CONSTRAINT `FK_am_contactos_tb_empleados` FOREIGN KEY (`Id_empleados`) REFERENCES `tb_empleados` (`Id_empleados`);

--
-- Filtros para la tabla `ct_catalogo_universal`
--
ALTER TABLE `ct_catalogo_universal`
  ADD CONSTRAINT `FK_ct_catalogo_universal_ct_catalogo_universal` FOREIGN KEY (`catalogo_universal`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`);

--
-- Filtros para la tabla `tb_empleados`
--
ALTER TABLE `tb_empleados`
  ADD CONSTRAINT `FK_tb_empleados_ct_catalogo_universal` FOREIGN KEY (`Id_catalogos_universal`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`),
  ADD CONSTRAINT `FK_tb_empleados_ct_catalogo_universal_02` FOREIGN KEY (`cargo_empleados`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`);

--
-- Filtros para la tabla `tb_juguetes`
--
ALTER TABLE `tb_juguetes`
  ADD CONSTRAINT `FK_tb_juguetes_ct_catalogo_universal` FOREIGN KEY (`color_jugete`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`),
  ADD CONSTRAINT `FK_tb_juguetes_ct_catalogo_universal_02` FOREIGN KEY (`tipo_producto`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`);

--
-- Filtros para la tabla `tb_materiales`
--
ALTER TABLE `tb_materiales`
  ADD CONSTRAINT `FK_tb_materiales_ct_catalogo_universal` FOREIGN KEY (`clase_material`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`),
  ADD CONSTRAINT `FK_tb_materiales_ct_catalogo_universal_02` FOREIGN KEY (`color_material`) REFERENCES `ct_catalogo_universal` (`Id_catalogo_universal`);

--
-- Filtros para la tabla `th_produccion_juguetes`
--
ALTER TABLE `th_produccion_juguetes`
  ADD CONSTRAINT `FK_th_produccion_juguetes_tb_empleados` FOREIGN KEY (`Id_empleados`) REFERENCES `tb_empleados` (`Id_empleados`),
  ADD CONSTRAINT `FK_th_produccion_juguetes_tb_juguetes` FOREIGN KEY (`Id_juguetes`) REFERENCES `tb_juguetes` (`Id_juguetes`);

--
-- Filtros para la tabla `tp_materiales_juguetes`
--
ALTER TABLE `tp_materiales_juguetes`
  ADD CONSTRAINT `FK_tp_materiales_juguetes_tb_juguetes` FOREIGN KEY (`Id_juguetes`) REFERENCES `tb_juguetes` (`Id_juguetes`),
  ADD CONSTRAINT `FK_tp_materiales_juguetes_tb_materiales` FOREIGN KEY (`Id_material`) REFERENCES `tb_materiales` (`Id_material`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
