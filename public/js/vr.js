window.onload = initThree;

var scene,renderer, camera;

function initThree(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(90, document.body.clientWidth / document.body.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 0.01);
    
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(document.body.clientWidth/2, document.body.clientHeight/2);

    document.getElementById("vrroom").appendChild(renderer.domElement);
    
    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    useBox();

    loop();
}

function loop() {
    requestAnimationFrame(loop);
    
    renderer.render(scene, camera);
}

function useBox(){
    var materials = [];

    var texture_left = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_left.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_left} ) );
    
    var texture_right = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_right.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_right} ) );

    var texture_top = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_top.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_top} ) );

    var texture_bottom = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_bottom.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_bottom} ) );

    var texture_front = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_front.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_front} ) );

    var texture_back = new THREE.TextureLoader().load( '../../public/imgs/rendering/detailsimg/imgsVR/scene_back.jpeg' );
    materials.push( new THREE.MeshBasicMaterial( { map: texture_back} ) );

    var box = new THREE.Mesh( new THREE.BoxGeometry(1,1,1),materials);
    // box.material.wireframe=true;
    
    scene.add(box);
    box.geometry.scale(1,1,-1);
    camera.position.set(0,0,0.01);
}