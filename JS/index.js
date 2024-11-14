/**
 * ESTUDIANTE-A
 * Se tiene de varios estudiantes su nombre, semestre y nota.  ++
 * 
 * También se sabe que la nota máxima es 20, y que los estudiantes aprueban con un mínimo de 10.
 * Toda esta información de estudiantes se carga en un arreglo,   ++
 * 
 * y se necesita una función que retorne los estudiantes de un semestre dado.
 * 
 * La estructura de un objeto estudiante es por ejemplo: {nombre: ‘Luis’, semestre: 5, nota: 14} ++
 * Función:     estudiantesSemestre.   ++
 * Parámetros:  estudiantes (array de objetos estudiante), semestre (un número).  ++
 * Retorno:     array de objetos estudiante que pertenecen al semestre indicado. ++

 */

let estudiantes = [
    { nombre: 'Luis', semestre: 5, nota: 14 },
    { nombre: 'Andrea', semestre: 4, nota: 16 },
    { nombre: 'Jorge', semestre: 4, nota: 12 },
    { nombre: 'Ricardo', semestre: 5, nota: 18 }
];

let estudiantesSemestre = (estudiantes, semestre) => {

    return estudiantes.filter(estudiante => estudiante.semestre === semestre);
};

let salida = document.getElementById('salida');


salida.innerHTML = `Estudiantes del mismo semestre:  ${JSON.stringify(estudiantesSemestre(estudiantes, 4))}`;
