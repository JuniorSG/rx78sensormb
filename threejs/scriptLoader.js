var renderer,
  scene,
  camera,
  canvas = document.getElementById("canvas");

//RENDERER
renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setClearColor(0xffffff, 0);
// scene.renderer.setClearColor(0xffffff, 0);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.97, window.innerHeight * 0.97);

//CAMERA
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 0.9;
camera.position.y = -0.45;

//SCENE
scene = new THREE.Scene();

var light2 = new THREE.PointLight(0xffffff);
scene.add(light2);

var loader = new THREE.GLTFLoader();

loader.load("./threejs/RX78.glb", handle_load);

var object;

function handle_load(gltf) {
  object = gltf.scene;

  scene.add(object);
  object.position.z = -50;
  object.scale.set(0.35, 0.35, 0.35);
  object.position.set(0, -0.5, 0);

  light2.lookAt(object.position);

  //RESIZEas
  window.addEventListener("resize", redimensionar);
  function redimensionar() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
    renderer.render(scene, camera);
  }

  // Condicional de si es abierto por TLF (Reemplazar)
  if (window.navigator.userAgentData.mobile == true) {
    window.addEventListener("deviceorientation", (e) => {
      var beta = e.beta;
      var gamma = e.gamma;
      object.lookAt(5 * gamma, -5 * beta, 30);
      light2.position.set(0, 1, 1);
    });
  }
  if (window.navigator.userAgentData.mobile == false) {
    window.addEventListener("mousemove", (e) => {
      var lookX = 0.05 * (e.clientX - window.innerWidth / 2);
      var lookY = -(0.05 * (e.clientY - window.innerHeight / 2)) + 5;
      object.lookAt(lookX, lookY, 30);
      light2.position.set(0, 1, 1);
      // console.log(cube.lookAt);
      window.addEventListener("mouseout", (e) => {
        lookX = 0;
        lookY = 0;
        light2.position.set(0, 0.5, -0.9);
        object.lookAt(lookX, lookY, 30);
      });
    });
  }
}

//RENDER LOOP
render();

// var delta = 0;
// var prevTime = Date.now();

function render() {
  // delta += 0.1;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
