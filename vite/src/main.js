import * as THREE from 'three'

// Get a reference to the canvas element
const canvas = document.getElementById('canvas')

// Create a new scene
const scene = new THREE.Scene()
scene.background = new THREE.Color('#f0f0f0')

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// Create a dodecahedron geometry and material
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshBasicMaterial({color: '#468585', emissive: '#468585'})

// Combine the geometry and material into a mesh
const dodecahedron = new THREE.Mesh(geometry, material)
scene.add(dodecahedron)

// Add directional light to the scene
const light = new THREE.DirectionalLight(0x9CDBA6, 10)
light.position.set(1, 1, 1)
scene.add(light)

// Set up the WebGL renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// Animate the scene
function animate() {
    requestAnimationFrame(animate)

    dodecahedron.rotation.x += 0.01
    dodecahedron.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()
