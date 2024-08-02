'use client'
import { useEffect, useRef } from "react";
import * as THREE from "three";

function Three() {
    useEffect(() => {
        //canvas要素にthreejsの描画を行うための初期設定 
        const canvas = document.querySelector('#canvas-tjs') as HTMLCanvasElement;
        const scene = new THREE.Scene()
        const sizes = {
            width: innerWidth,
            height: innerHeight
        }
        const camera = new THREE.PerspectiveCamera(undefined, sizes.width / sizes.height, undefined, undefined)
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(window.devicePixelRatio)


        //要素の生成と追加
        const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
        const boxMaterial = new THREE.MeshLambertMaterial({
            color: '#2497f0'
        })
        const box = new THREE.Mesh(boxGeometry, boxMaterial)
        box.position.z = -5
        box.rotation.set(10, 10, 10)
        scene.add(box)

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
        scene.add(ambientLight)
        const pointLight = new THREE.PointLight(0xffffff, 0.2)
        pointLight.position.set(1, 2, 3)
        scene.add(pointLight)

        const clock = new THREE.Clock()
        const animate = () => {
            //時間的な変化を記述する
            const elapsedTime = clock.getElapsedTime()
            box.rotation.x = elapsedTime
            box.rotation.y = elapsedTime


            renderer.render(scene, camera)
        }
        renderer.setAnimationLoop(animate);
        // ブラウザのリサイズ処理 
        window.addEventListener('resize', () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(window.devicePixelRatio)
        })
    }, []);

    return (
        <canvas id="canvas-tjs"></canvas>
    );
}

export default Three;

