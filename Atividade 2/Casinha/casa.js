
var canvas;
var gl;

var numVertices  = 66;

var axis = 1;
var xAxis = 0;
var yAxis =1;
var zAxis = 2;
var theta = [ 0, 0, 0 ];
var thetaLoc;

/* 

Índice dos Vertices:

Frente:        Trás
   4             9     
 /    \       /    \   
2------3     7------8   
|      |     |      |   
|      |     |      |    
0------1     5------6     


Porta na 


*/

    var vertices = [ /* x,y,z */
        /* Frente da casa */
        vec3( 0, 0,  0 ), // Canto inferior esquerdo
        vec3( 0.5,  0,  0 ), // canto inferior direito
        vec3(  0,  0.5,  0 ), // canto superior esquerdo 
        vec3(  0.5, 0.5,  0 ), // canto superior direito

        vec3( 0, 0.5, 0), //canto inferior esquerdo telhado
        vec3( 0.5, 0.5, 0), //canto inferior direito telhado 
        vec3( 0.25, 0.75, 0 ), // Topo telhado

        /* Fundo da Casa, idem pros pontos a cima, mas com Z maior */
        vec3( 0, 0,  0.5 ),
        vec3( 0.5,  0,  0.5 ),
        vec3(  0,  0.5,  0.5 ),
        vec3(  0.5, 0.5,  0.5 ),

		vec3( 0, 0.5, 0.5 ),
		vec3( 0.5, 0.5, 0.5 ),
        vec3( 0.25, 0.75, 0.5 ),

        /* Coordenadas da Porta */
        vec3( 0.1666, 0, -0.001 ),
        vec3( 0.3333, 0, -0.001 ),
        vec3( 0.1666, 0.3333, -0.001 ),
        vec3( 0.3333, 0.3333, -0.001 ),

        /* Coordenadas da Janela direita*/
        vec3(0.501, 0.1666, 0.1666),
        vec3(0.501, 0.1666, 0.3333),
        vec3(0.501, 0.3333, 0.1666),
        vec3(0.501, 0.3333, 0.3333),

        /* Coordenadas da Janela esquera*/
        vec3(-0.001, 0.1666, 0.1666),
        vec3(-0.001, 0.1666, 0.3333),
        vec3(-0.001, 0.3333, 0.1666),
        vec3(-0.001, 0.3333, 0.3333),

    ];

    var vertexColors = [
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow

        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red

        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow
        vec4( 1.0, 0.8, 0, 1.0 ),  // yellow


        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red

        //Cor da porta
        vec4( 0.6, 0.1, 0.0, 1.0 ),  // brown
        vec4( 0.6, 0.1, 0.0, 1.0 ),  // brown
        vec4( 0.6, 0.1, 0.0, 1.0 ),  // brown
        vec4( 0.6, 0.1, 0.0, 1.0 ),   // brown

        //cor da janela
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan

        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan
        vec4(0.3, 1.0, 0.9, 1.0),	//cyan        
    ];

    /*
        var vertices = [
        vec3( -0.5, -0.5,  0.5 ),
        vec3( -0.5,  0.5,  0.5 ),
        vec3(  0.5,  0.5,  0.5 ),
        vec3(  0.5, -0.5,  0.5 ),
        vec3( -0.5, -0.5, -0.5 ),
        vec3( -0.5,  0.5, -0.5 ),
        vec3(  0.5,  0.5, -0.5 ),
        vec3(  0.5, -0.5, -0.5 )
    ];

    var vertexColors = [
        vec4( 0.0, 0.0, 0.0, 1.0 ),  // black
        vec4( 1.0, 0.0, 0.0, 1.0 ),  // red
        vec4( 1.0, 1.0, 0.0, 1.0 ),  // yellow
        vec4( 0.0, 1.0, 0.0, 1.0 ),  // green
        vec4( 0.0, 0.0, 1.0, 1.0 ),  // blue
        vec4( 1.0, 0.0, 1.0, 1.0 ),  // magenta
        vec4( 1.0, 1.0, 1.0, 1.0 ),  // white
        vec4( 0.0, 1.0, 1.0, 1.0 )   // cyan
    ];

    */



var indices = [

    // Frente da casa
    0,1,2,
    1,2,3,

    4,5,6,

    // Tras da casa
    7,8,9,
    8,9,10,

    11,12,13,

    // Telhado de um lado
    4,11,6,
    6,13,11,

    // Telhado de outro
    5,12,6,
    6,13,12,

    //Parede Lateral direita
    0,2,7,
    2,7,9,

    // Parede Lateral esquerda
    1,3,8,
    3,8,10,

    // Chão
    0,1,7,
    1,7,8,

    // Porta
    14,15,16,
    15,16,17,

    // Janelas
    18,19,20,
    19,20,21,

    22,23,24,
    23,24,25,  
    
];
/*

// indices of the 12 triangles that compise the cube
var indices = [
    0, 1, 3,
    0, 1, 5,
    0, 3, 4,
    0, 4, 5,
    
    1, 2, 3,
    1, 2, 6,
    1, 5, 6,

    2, 3, 7,
    2, 6, 7,
    
    3, 4, 7,
    
    
    4, 5, 6,
    4, 6, 7
    
    
];
*/

window.onload = function init()
{
    canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );
    
    gl.enable(gl.DEPTH_TEST);;

    //
    //  Load shaders and initialize attribute buffers
    //
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // array element buffer
    
    var iBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(indices), gl.STATIC_DRAW);
    
    // color array atrribute buffer
    
    var cBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, cBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertexColors), gl.STATIC_DRAW );

    var vColor = gl.getAttribLocation( program, "vColor" );
    gl.vertexAttribPointer( vColor, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColor );

    // vertex array attribute buffer
    
    var vBuffer = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 3, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    thetaLoc = gl.getUniformLocation(program, "theta"); 
    
    //event listeners for buttons
    
    document.getElementById( "xButton" ).onclick = function () {
        axis = xAxis;
    };
    document.getElementById( "yButton" ).onclick = function () {
        axis = yAxis;
    };
    document.getElementById( "zButton" ).onclick = function () {
        axis = zAxis;
    };

    
    render();
}

function render()
{
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    theta[axis] += 1;
    gl.uniform3fv(thetaLoc, theta);


    gl.drawElements( gl.TRIANGLES, numVertices, gl.UNSIGNED_BYTE, 0 );

    requestAnimFrame( render );
}

