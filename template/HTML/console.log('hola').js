console.log('hola')
let template = '<!-- Our Exceptional Solutions --><div class="col-sm-4 sm-margin-b-50"><div class="margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s"><img class="img-responsive" src="./proyectos/tlahuac" alt="Our Exceptional Solutions Image"></div></div><h3><a href="#">${nombre}</a> <span class="text-uppercase margin-l-20">PUBLICO</span></h3><p>${nombre}.</p></div><!-- End Our Exceptional Solutions -->';

let construcciones = [
    '1. Trabajos de acero y cimbra en obra Olachea Norte la Paz Baja California sub contratado cliente Coppel',
    '2. Obra Nodo Juárez Serdán',
    '3. Obra Parque Ecológico',
    '4. Obra Parque Paseo Teleférico',
    '5. Cimbra y acero en la torre Zaragoza subcontratado cliente eura',
    '6. Obra Fraccionamiento El Deseo',
    '7. Obra Jardines Fraccionamiento El Deseo',
    '8. Obra Red De Agua Potable en la Sierra',
    '9. Obra Teleférico Poste Zaragoza',
    '10. Obra Colocación de Carpeta Hidráulica en Federal Amozoc-Puebla',
    '11. Obra colocación de Carpeta Hidráulica en Puente de 31 Pte.',
    '12. Obra Colocación de Carpeta Hidráulica en Puente Nodo Juárez-Serdán',
    '13. Obra colocación de Carpeta Hidráulica en Estacionamiento Estadio Cuahuemoc',
    '14. Obra Ciclovía',
    '15. Trabajos de yeso en obra olachea norte La Paz Baja California sub contratado cliente Coppel',
    '16. Obra Contrucción De CESSA San Felipe Hueyotlipan.Ciudad De Puebla. Monto De Obra 27,129,963.10. 01 De Marzo Al 06 De Agosto',
    '17. Obra construcción de CESSA, Esperanza estado de Puebla. Monto de obra 33,659,568.90. 12 septiembre al 23 de enero',
    '18. Obra drenaje sanitario en municipio Acatzingo estado de Puebla. Monto de obra: 129,043.45. 12 de abril al 15 de mayo',
    '19. Obra adoquinamiento en la comunidad de Nicolás.Bravo Municipio Acatzingo. Monto de obra 1,699, 329.94. 16 de mayo a 20 julio',
    '20. Obra construcción de fraccionamiento con casas de una Y dos plantas',
    '21. Colocación estampado de concreto en San Martín Texmelucan',
    '22. Trabajos de acero y cimbra en obra López Mateos Poza Rica Veracruz sub contratado cliente Coppel',
    '23. Trabajos de apoyo de aplanos en la obra Cocula Guadalajara sub contratado cliente Coppel',
    '24. Trabajos de acero y cimbra en obra Zaragoza Torreón sub contratado cliente Coppel.',
    '25. Colocación de piso y azulejo en obra Vicente Guerrero en el estado de Durango sub contratado cliente Coppel',
    '26. Trabajos de acero y cimbra el obra 9 oriente en Tecamachalco Puebla cliente Coppel',
    '27. Colocación de piso y azulejo en obra multiplaza Alameda en el estado de México cliente Coppel.',
    '28. Trabajos de terracerías, plataformas y demoliciones en diferentes estados.',
    '29. Colocación de concreto MR-40 en Nave industrial de la empresa privada Triplet, Puebla. Interior y Exterior',
    '30. Colocación de concreto MR-40 en Nave industrial en empresa privada Industria Textil de Puebla.',
    '31. Colocación de concreto hidráulico en 10 km de Anillo Periférico Ecológico, Puebla.',
    '32. Colocación de concreto MR-40 pulido en nave industrial de autopartes cerca de Aeropuerto Internacional de Puebla. Interior y Exterior.',
]

construcciones.forEach( element => {
    console.log(`<!-- Our Exceptional Solutions --><div class="col-sm-4 sm-margin-b-50"><div class="margin-b-20"><div class="wow zoomIn" data-wow-duration=".3" data-wow-delay=".1s"><img class="img-responsive" src="./proyectos/tlahuac" alt="Our Exceptional Solutions Image"></div></div><h3><a href="#">${element}</a> <span class="text-uppercase margin-l-20">PUBLICO</span></h3><p>${element}.</p></div><!-- End Our Exceptional Solutions -->`)
});