
var y = 0.866025404;
var l1 = 0.6;
var l2 = 1;
var z1 = 2.3;
var z2 = 1.7;
var offset_x = 0;
var offset_y = 0;
var offset_z  = 0;



var vertices_diamante = new Float32Array([ /* x,y,z */ 
    
    offset_x, offset_y, offset_z, /* Pico do diamante */

   // Hexagono 1
   offset_x - 1.0 * l1,     offset_y + z1,     offset_z,
   offset_x -0.5 * l1,      offset_y + z1,     offset_z  + y  * l1,
   offset_x +0.5 * l1,      offset_y + z1,     offset_z  +y  * l1,
   offset_x + 1 * l1,       offset_y + z1 ,    offset_z,
   offset_x +0.5 *l1,       offset_y + z1,     offset_z  -y*l1,
   offset_x -0.5*l1,        offset_y + z1,     offset_z - y*l1,
 
   

   // Hexagono 2:
   offset_x  -1.0 * l2,     offset_y + z2,     offset_z,
   offset_x  -0.5 * l2,     offset_y + z2,     offset_z  + y  * l2,
   offset_x +0.5 * l2,      offset_y + z2,     offset_z  +y  * l2,
   offset_x +1 * l2,        offset_y + z2,     offset_z,
   offset_x +0.5 *l2,       offset_y +z2 ,     offset_z  -y*l2,
   offset_x  -0.5*l2,       offset_y + z2,     offset_z  -y*l2,

   // Centro do hexagono menor
   offset_x,        offset_y + z1,      offset_z,
]);



offset_x = 2;
offset_y = 0;
offset_z  = 2;

var vertices_diamante_2 = new Float32Array([ /* x,y,z */ 
    
    offset_x, offset_y, offset_z, /* Pico do diamante */

   // Hexagono 1:
   offset_x - 1.0 * l1,offset_y + z1 , offset_z,
   offset_x +-0.5 * l1,offset_y + z1, offset_z  + y  * l1,
   offset_x +0.5 * l1,offset_y +  z1, offset_z  +y  * l1,
   offset_x +1 * l1,offset_y + z1 , offset_z,
   offset_x +0.5 *l1,offset_y + z1, offset_z  -y*l1,
   offset_x +-0.5*l1,offset_y + z1, offset_z - y*l1,
 
   

   // Hexagono 2:
   offset_x +-1.0 * l2,offset_y + z2 , offset_z,
   offset_x +-0.5 * l2,offset_y + z2 ,offset_z  + y  * l2,
   offset_x +0.5 * l2,offset_y + z2 ,offset_z  +y  * l2,
   offset_x +1 * l2,offset_y + z2 , offset_z,
   offset_x +0.5 *l2,offset_y +z2 , offset_z  -y*l2,
   offset_x +-0.5*l2,offset_y + z2 , offset_z  -y*l2,

   // Centro do hexagono menor
   offset_x +0,offset_y +z1, offset_z,
]);


var vertexColors_diamante = new Float32Array([

     0.0, 0.0, 0, 1.0 ,  // blue
    
    0.25, 0.95, 0.95,1,
    0.25, 0.95, 0.95,1,
    0.25, 0.95, 0.95,1,
    0.25, 0.95, 0.95,1,
    0.25, 0.95, 0.95,1,
    0.25, 0.95, 0.95,1,

     0.3, 0.0, 1.0, 1.0 ,  // blue
     0.4, 0.0, 1.0, 1.0 ,  // blue
     0.5, 0.0, 1.0, 1.0 ,  // blue
     0.6, 0.0, 1.0, 1.0 ,  // blue
     0.7, 0.0, 0.8, 1.0 ,  // blue
     0.8, 0.0, 0.8, 1.0  , // blue
     0.9, 0.0, 0.8, 1.0  // blue
    
]);

var indices_diamante = new Uint8Array([
    // Hexagono 1
    1,2,13,
    2,3,13,
    3,4,13,
    4,5,13,
    5,6,13,
    6,1,13,

    // Centro para hexagono 2
    0, 6,7,
    0,7,8,
    0,8,9,
    0,10,11,
    0,11,12,
    0,12,6,

    // Hexagono 1 para Hexagono 2 //1-2-7-8 2-3-8-9 3-4-9-10 4-5-10-11 5-6-11-12 6-1-12-7
    1,2,7, 
    2,7,8,

    2,3,8,
    3,8,9,

    3,4,9,
    4,9,10,

    4,5,10,
    5,10,11,

    5,6,11,
    6,11,12,

    6,1,12,
    1,12,7
]);




var vertices_casa = new Float32Array([ 
        /* Frente da casa */
         0, 0,  0, // Canto inferior esquerdo
         0.5,  0,  0, // canto inferior direito
         0,  0.5,  0, // canto superior esquerdo 
         0.5, 0.5,  0, // canto superior direito
         0.25, 0.75, 0, // Topo telhado

        /* Fundo da Casa, idem pros pontos a cima, mas com Z maior */
         0, 0,  0.5,
         0.5,  0,  0.5,
         0,  0.5,  0.5,
         0.5, 0.5,  0.5,
         0.25, 0.75, 0.5,

        /* Coordenadas da Porta */
         0.1666, 0, -0.001,
         0.3333, 0, -0.001,
         0.1666, 0.3333, -0.001,
         0.3333, 0.3333, -0.001


    ]);

var vertexColors_casa = new Float32Array([
         0.0, 0.0, 1.0,  // blue
         0.0, 0.0, 1.0,  // blue
         1.0, 0.0, 0.0,  // red
         1.0, 0.0, 0.0,  // red
         1.0, 0.0, 0.0,  // red
         0.0, 0.0, 1.0,  // blue
         0.0, 0.0, 1.0,  // blue
         1.0, 0.0, 0.0,  // red
         1.0, 0.0, 0.0,  // red
         1.0, 0.0, 0.0,  // red

        //Cor da porta
         0.0, 1.0, 0.0,  // green
         0.0, 1.0, 0.0,  // green
         0.0, 1.0, 0.0,  // green
         0.0, 1.0, 0.0  // green

        
    ]);

    

var indices_casa = new Uint32Array( [

    // Frente da casa
    0,1,2,
    1,2,3,
    2,3,4,

    // Tras da casa
    5,6,7,
    6,7,8,
    7,8,9,

    // Telhado de um lado
    2,4,7,
    4,7,9,

    // Telhado de outro
    3,4,8,
    4,8,9,

    //Parede Lateral direita
    0,2,5,
    2,5,7,

    // Parede Lateral esquerda
    1,3,6,
    3,6,8,

    // Chão
    0,1,5,
    1,5,6,

    // Porta
    10,11,12,
    11,12,13 
    ]);