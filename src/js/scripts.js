// create a new instance
import * as THREE from 'three';
//para mover con el mouse
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
//npm install three-orbitcontrols

//crear un render

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);-

document.body.appendChild(renderer.domElement);
//create scene

const scene = new THREE.Scene();
//create camera

const camera = new THREE.PerspectiveCamera(
    45,//fov
    window.innerWidth / window.innerHeight, //aspect
    0.1, //near
    1000 //far
)

//para mover con el mouse
const controls = new OrbitControls(camera, renderer.domElement);

//axis ayuda
const axesHelper = new THREE.AxesHelper(5);

//poner axis en scene
scene.add(axesHelper);

//cambiar posicion camera(si no no se ve nada)
camera.position.set(-10, 30,30);//(x, y, z)

controls.update();

//poner una caja,material
const boxGeometry = new THREE.BoxGeometry()
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

//create a plane 
const planeGeometry = new THREE.PlaneGeometry(30,30);
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    //doubleside es para que se vea en los dos lados
    side: THREE.DoubleSide
});
const planebox = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planebox);
//rotarla para que coincida con el grid
planebox.rotation.x = -0.5 * Math.PI;

//grid helpers
const grid = new THREE.GridHelper(30);
scene.add(grid);

//rotar en x
//box.rotation.x = 5;
//box.rotation.y = 5;

//anadir una esfera
const articulacion1Geometry = new THREE.SphereGeometry(4,10,10);//4 is the radius los otros parametros son cuantos polygons tendra
const articulacion1Material = new THREE.MeshBasicMaterial({
    color: 0x0000FF,
    wireframe: true//wireframe es para observar los poligonos 
});
const articulacion1 = new THREE.Mesh(articulacion1Geometry,articulacion1Material);
scene.add(articulacion1);

//funcion para animarla
function animate(time) {
    box.rotation.x = time/1000;
    box.rotation.y = time/1000;
    renderer.render(scene, camera);
}




//renderisar la escena con la camera
renderer.setAnimationLoop(animate);