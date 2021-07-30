<template>
  <div>
    <div class="center">
      <div class="vrroom"></div>
      <div class="vr-scale" @click="back"></div>
      <div class="vr-bgc"></div>
    </div>
  </div>
</template>
<script>
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
export default {
  name: "Create",
  data() {
    return {};
  },
  methods: {
    back(){
      history.go(-1);
    },
    setup() {
      // 1、创建场景和摄像机
      const scene = new Three.Scene();
      // 2、创建摄像机 PerspectiveCamera('视角', '指定投影窗口长宽比', '从距离摄像机多远开始渲染', '截止多远停止渲染100')
      const camera = new Three.PerspectiveCamera(
        90,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      // 3、创建ThreeJs 渲染器
      const renderer = new Three.WebGLRenderer({ antialias: true });
      // 设置渲染器场景大小
      renderer.setSize(window.innerWidth, window.innerHeight);
      document
        .getElementsByClassName("vrroom")[0]
        .appendChild(renderer.domElement);

      // 创建几何模型 BoxGeometry('x轴', '轴', 'z轴')
      const geometry = new Three.BoxGeometry(10, 10, 10);

      // 创建纹理贴图  左右  上下  前后
      const texture0 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_left.jpeg")
      );
      const texture1 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_right.jpeg")
      );
      const texture2 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_top.jpeg")
      );
      const texture3 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_bottom.jpeg")
      );
      const texture4 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_front.jpeg")
      );
      const texture5 = new Three.TextureLoader().load(
        require("../../public/imgs/rendering/detailsimg/imgsVR/scene_back.jpeg")
      );

      // 添加材质
      const material = [
        new Three.MeshBasicMaterial({ map: texture0, side: Three.DoubleSide }),
        new Three.MeshBasicMaterial({ map: texture1, side: Three.DoubleSide }),
        new Three.MeshBasicMaterial({ map: texture2, side: Three.DoubleSide }),
        new Three.MeshBasicMaterial({ map: texture3, side: Three.DoubleSide }),
        new Three.MeshBasicMaterial({ map: texture4, side: Three.DoubleSide }),
        new Three.MeshBasicMaterial({ map: texture5, side: Three.DoubleSide }),
      ];

      // 创建网格对象
      const cube = new Three.Mesh(geometry, material);
      // 添加到场景中去
      scene.add(cube);

      // 摄影机空间Z轴
      camera.position.set(0, 0, 0.01);
      camera.lookAt(scene.position);
      // camera.position.z = 4

      // 鼠标操作缩放
      // eslint-disable-next-line no-new
      new OrbitControls(camera, renderer.domElement);

      // 添加帧渲染
      const animate = () => {
        requestAnimationFrame(animate);
        // 渲染场景
        renderer.render(scene, camera);
      };

      animate();

      // 自适应
      window.addEventListener("resize", () => {
        // 初始化摄像机
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        // 初始化渲染器尺寸
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    },
  },
  mounted() {
    this.setup();
  },
};
</script>
<style lang="scss" scoped>
.center {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: black;
  .vrroom {
    canvas {
      // box-shadow:inset 5px 5px 5px red;
    }
    
  }
  .vr-scale{
      width: 50px;
      height: 50px;
      position: absolute;
      top: 50px;
      right: 50px;
      background-image: url("../../public/imgs/rendering/detailsimg/imgsVR/vr-scale.svg");
      background-repeat: no-repeat;
      background-size: 40px 40px;
      background-position: 5px 5px;
      cursor: pointer;
      &:hover{
        background-color: #7e7b7b80;
        box-shadow:inset 0 0 5px white;
        border-radius: 25px 5px 25px 5px;
      }
    }
    .vr-bgc{
      position: absolute;
      width: 100%;
      height: 50px;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #21212180;
      box-shadow: 0px 0px 50px black;

    }
}
</style>