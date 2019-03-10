/**
 * Función que permite convertir textos a un formato que pueda
 * usarse en una url
 */
import slugify from 'slugify'

export default function slug(name){
    // Todo lo que no sea una palabra o un guión se reemplaza con nada
    return slugify(name, {lower: true}).replace(/[^\w\-]+/g, '')
}