-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema RRHH_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema RRHH_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `RRHH_DB` DEFAULT CHARACTER SET utf8 ;
USE `RRHH_DB` ;

-- -----------------------------------------------------
-- Table `RRHH_DB`.`Administrador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Administrador` (
  `id` INT NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RRHH_DB`.`Usuario_Gestor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Usuario_Gestor` (
  `id` INT NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `Administrador_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Administrador_id`),
  INDEX `fk_Usuario_Gestor_Administrador1_idx` (`Administrador_id` ASC) VISIBLE,
  CONSTRAINT `fk_Usuario_Gestor_Administrador1`
    FOREIGN KEY (`Administrador_id`)
    REFERENCES `RRHH_DB`.`Administrador` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RRHH_DB`.`Vacante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Vacante` (
  `id` INT NOT NULL,
  `detalles` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RRHH_DB`.`Nomina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Nomina` (
  `id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RRHH_DB`.`Recurso_Humano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Recurso_Humano` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `¿empleado?` TINYINT NOT NULL,
  `c.c.` INT NOT NULL,
  `c.c_copy` VARCHAR(45) NOT NULL,
  `e-mail` VARCHAR(45) NOT NULL,
  `telefono/celular` INT NOT NULL,
  `direccion` VARCHAR(45) NOT NULL,
  `photo` VARCHAR(45) NOT NULL,
  `CV.pdf` VARCHAR(45) NOT NULL,
  `cert_pension` VARCHAR(45) NOT NULL,
  `libreta_militar` VARCHAR(45) NOT NULL,
  `cert_EPS` VARCHAR(45) NOT NULL,
  `Nomina_id` INT NOT NULL,
  `Usuario_Gestor_id` INT NOT NULL,
  `Usuario_Gestor_Administrador_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Nomina_id`, `Usuario_Gestor_id`, `Usuario_Gestor_Administrador_id`),
  INDEX `fk_Recurso_Humano_Nomina1_idx` (`Nomina_id` ASC) VISIBLE,
  INDEX `fk_Recurso_Humano_Usuario_Gestor1_idx` (`Usuario_Gestor_id` ASC, `Usuario_Gestor_Administrador_id` ASC) VISIBLE,
  UNIQUE INDEX `c.c._UNIQUE` (`c.c.` ASC) VISIBLE,
  CONSTRAINT `fk_Recurso_Humano_Nomina1`
    FOREIGN KEY (`Nomina_id`)
    REFERENCES `RRHH_DB`.`Nomina` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Recurso_Humano_Usuario_Gestor1`
    FOREIGN KEY (`Usuario_Gestor_id` , `Usuario_Gestor_Administrador_id`)
    REFERENCES `RRHH_DB`.`Usuario_Gestor` (`id` , `Administrador_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `RRHH_DB`.`Contrato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `RRHH_DB`.`Contrato` (
  `id` INT NOT NULL,
  `salario` INT NOT NULL,
  `horas_semana` INT NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `Recurso_Humano_id` INT NOT NULL,
  `Recurso_Humano_Nomina_id` INT NOT NULL,
  `Vacante_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Recurso_Humano_id`, `Recurso_Humano_Nomina_id`, `Vacante_id`),
  INDEX `fk_Contrato_Recurso_Humano1_idx` (`Recurso_Humano_id` ASC, `Recurso_Humano_Nomina_id` ASC) VISIBLE,
  INDEX `fk_Contrato_Vacante1_idx` (`Vacante_id` ASC) VISIBLE,
  CONSTRAINT `fk_Contrato_Recurso_Humano1`
    FOREIGN KEY (`Recurso_Humano_id` , `Recurso_Humano_Nomina_id`)
    REFERENCES `RRHH_DB`.`Recurso_Humano` (`id` , `Nomina_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Contrato_Vacante1`
    FOREIGN KEY (`Vacante_id`)
    REFERENCES `RRHH_DB`.`Vacante` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
