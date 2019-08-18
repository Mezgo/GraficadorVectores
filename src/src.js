var scene = null, camera = null, renderer = null;
var vectorU={x:null,y:null,z:null};
var vectorV={x:null,y:null,z:null};

function startUp() {
    //alert('Listoooo');
    window.onresize = onWindowResize; 
    initScene();
    animate();
}

function graficar(){
    let inputs= document.querySelectorAll("input");
    for (const input of inputs) {
        this[`vector${input.dataset.vector}`][input.name] = input.value;
        drawVector(this[`vector${input.dataset.vector}`]); 
    }
    console.log('Vector U:', vectorU, 'Vector V:', vectorV);
    //Graficar
    
}

function drawVector(vector){
    var material = new THREE.LineBasicMaterial({
        color: +('0x' + Math.floor(Math.random()* 16777215).toString(16))
    });
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( vector.x, vector.y, vector.z)
    );
    
    var line = new THREE.Line( geometry, material );
    scene.add( line );
}

function initScene() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
        0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#app') });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //var canvas= document.querySelector('#app');
    //console.log(canvas);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    
    var size = 10;
    var divisions = 10;

    var gridHelper = new THREE.GridHelper( size, divisions );
    gridHelper.rotation.x = Math.PI/ 8;
    gridHelper.rotation.y = Math.PI/ 8;
    
    var axesHelper = new THREE.AxesHelper(5);
    
    axesHelper.rotation.x = Math.PI/8;
    axesHelper.rotation.y = Math.PI/8;
    
    scene.add(axesHelper);
    scene.add( gridHelper );

    camera.position.y = 2 ;
    camera.position.z = 17;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}