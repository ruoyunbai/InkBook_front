<template>
  <simplest></simplest>

  <n-layout embedded content-style="padding:20px 40px 50px 40px">
    <div class = "card">
      <svg xmlns="http://www.w3.org/2000/svg">
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="9" />
        </filter>
        <circle cx="1155" cy="217" r="185" fill="#F5F8FF"/>
        <path id="line1" d="M 135 565 c 160 130 200 70 250 0 s 100 -90 225 -70 s 150 0 225 -100 s 125 -120 200 -100"
          stroke="orange" stroke-width="3" fill="none" class="absolute"/>
        <path id="line1s" d="M 145 585 c 160 130 200 70 250 0 s 100 -90 225 -70 s 150 0 225 -100 s 125 -120 200 -100"
          stroke="grey" stroke-width="3" fill="none" class="absolute" filter = "url(#blur)"/>
        <path id="line2" d="M 110 770 c 100 -70 125 -60 240 20 s 125 60 225 -100 s 150 -150 250 -100 s 300 50 400 -200"
          stroke="orange" stroke-width="3" fill="none" v-show="displaySec" />
        <path id="line2s" d="M 120 790 c 100 -70 125 -60 240 20 s 125 60 225 -100 s 150 -150 250 -100 s 300 50 400 -200"
          stroke="grey" stroke-width="3" fill="none" v-show="displaySec" filter = "url(#blur)"/>
      </svg>
      <node-component v-show="showNodes[1].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[1]?.title ?? ''" :Content="nodesInElements[1]?.instruction ?? ''"
        :Order="nodesInElements[1]?.order ?? 0" @del="DelNode(nodesInElements[1] ?? null)"></node-component>
      <node-component v-show="showNodes[2].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[2]?.title ?? ''" :Content="nodesInElements[2]?.instruction ?? ''"
        :Order="nodesInElements[2]?.order ?? 0" @del="DelNode(nodesInElements[2] ?? null)"></node-component>
      <node-component v-show="showNodes[3].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[3]?.title ?? ''" :Content="nodesInElements[3]?.instruction ?? ''"
        :Order="nodesInElements[3]?.order ?? 0" @del="DelNode(nodesInElements[3] ?? null)"></node-component>
      <node-component v-show="showNodes[4].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[4]?.title ?? ''" :Content="nodesInElements[4]?.instruction ?? ''"
        :Order="nodesInElements[4]?.order ?? 0" @del="DelNode(nodesInElements[4] ?? null)"></node-component>
      <node-component v-show="showNodes[5].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[5]?.title ?? ''" :Content="nodesInElements[5]?.instruction ?? ''"
        :Order="nodesInElements[5]?.order ?? 0" @del="DelNode(nodesInElements[5] ?? null)"></node-component>
      <node-component v-show="showNodes[6].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[6]?.title ?? ''" :Content="nodesInElements[6]?.instruction ?? ''"
        :Order="nodesInElements[6]?.order ?? 0" @del="DelNode(nodesInElements[6] ?? null)"></node-component>
      <node-component v-show="showNodes[7].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[7]?.title ?? ''" :Content="nodesInElements[7]?.instruction ?? ''"
        :Order="nodesInElements[7]?.order ?? 0" @del="DelNode(nodesInElements[7] ?? null)"></node-component>
      <node-component v-show="showNodes[8].value" class="node" :Modifying="modifying"
        :Title="nodesInElements[8]?.title ?? ''" :Content="nodesInElements[8]?.instruction ?? ''"
        :Order="nodesInElements[8]?.order ?? 0" @del="DelNode(nodesInElements[8] ?? null)"></node-component>
      <n-button color="#5AA8D7" class="storeButton" v-show = "modifying" @click="SaveNodes">
        <template #icon>
          <n-icon size="17">
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.83341 1.91663C3.53223 1.91663 1.66675 4.06193 1.66675 6.70829V16.2916C1.66675 18.938 3.53223 21.0833 5.83341 21.0833H14.1667C16.4679 21.0833 18.3334 18.938 18.3334 16.2916V11.5C18.3334 10.9707 17.9603 10.5416 17.5001 10.5416C17.0398 10.5416 16.6667 10.9707 16.6667 11.5V16.2916C16.6667 17.8794 15.5475 19.1666 14.1667 19.1666H5.83341C4.4527 19.1666 3.33341 17.8794 3.33341 16.2916V6.70829C3.33341 5.12047 4.4527 3.83329 5.83341 3.83329H10.0001C10.4603 3.83329 10.8334 3.40423 10.8334 2.87496C10.8334 2.34569 10.4603 1.91663 10.0001 1.91663H5.83341Z"
                fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.8394 3.63503C15.8236 2.46687 14.1766 2.46687 13.1608 3.63503L7.23727 10.4471C6.91688 10.8156 6.68958 11.2773 6.57968 11.7828L5.85831 15.1011C5.78732 15.4277 5.87053 15.7731 6.07751 16.0112C6.28449 16.2492 6.5849 16.3449 6.86888 16.2632L9.75436 15.4337C10.1939 15.3073 10.5954 15.0459 10.9158 14.6774L16.8394 7.86532C17.8552 6.69716 17.8551 4.80319 16.8394 3.63503ZM14.3394 4.99032C14.7043 4.57066 15.2959 4.57066 15.6608 4.99032C16.0258 5.40998 16.0258 6.09038 15.6608 6.51003L9.73727 13.3221C9.63047 13.445 9.49666 13.5321 9.35013 13.5742L7.81207 14.0164L8.19659 12.2476C8.23322 12.0791 8.30898 11.9252 8.41578 11.8024L14.3394 4.99032Z"
                fill="white" />
            </svg>
          </n-icon>
        </template>
        保存修改
      </n-button>
      <n-space vertical class="addButton" v-show = "modifying">
        <n-button color="#5AA8D7" @click="ShowAddInfoInput" v-show="modifying">
          <template #icon>
            <n-icon size="17">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8L14 8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8 2V15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </n-icon>
          </template>
          新增步骤
        </n-button>
        <n-input v-model:value="inputTitle" type="text" class="titleInput" v-show="showAddInfo"></n-input>
        <n-input v-model:value="inputInstruction" type="textarea" :autosize="{ minRows: 3, maxRows: 5 }"
          class="contentInput" v-show="showAddInfo"></n-input>
        <n-button color="#D8EFFD" type="info" class="secButton" v-show="showAddInfo" @click="AddNodeFromUser">确定
        </n-button>
      </n-space>
      <n-button color="#5AA8D7" class="returnButton" v-show = "!modifying" @click="ReturnSignUp">
        <template #icon>
            <n-icon size="17">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6508 4.24076C16.0701 4.60018 16.1187 5.23148 15.7593 5.65081L10.3171 12L15.7593 18.3492C16.1187 18.7686 16.0701 19.3999 15.6508 19.7593C15.2315 20.1187 14.6002 20.0701 14.2407 19.6508L8.24074 12.6508C7.91975 12.2763 7.91975 11.7237 8.24074 11.3492L14.2407 4.34923C14.6002 3.9299 15.2315 3.88134 15.6508 4.24076Z" fill="white"/>
              </svg>
            </n-icon>
          </template>
          返回注册
      </n-button>
      <n-button color="#F48023" class="directLoginButton" v-show = "!modifying" @click="DirectLoginin">
        确认，立即登录
      </n-button>
    </div>
  </n-layout>
</template>

<script setup lang="ts">
import { ref, Ref, onMounted, onBeforeMount, reactive,toRefs } from "vue";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CSSPlugin } from "gsap/CSSPlugin";
import axios from 'axios';
import { useRoute,useRouter } from "vue-router";

import { NButton } from "naive-ui";

import nodeComponent from "./nodeComponent.vue";
import Simplest from "../../components/Tourist/SimpleHeader/Simplest.vue";

import {useUserStore} from '../../store/User'

gsap.registerPlugin(MotionPathPlugin, CSSPlugin);
const route = useRoute();
const router = useRouter();
const User = useUserStore();

// type Props = {
//   Modifying:boolean
// }

// let props = defineProps<Props>();

const nodeElements = reactive<Element[]>([]);
const displaySec = ref<boolean>(false);
const showAddInfo = ref<boolean>(false);
const inputTitle = ref<string>("");
const inputInstruction = ref<string>("");
const showNodes: Ref<boolean>[] = [];
//let modifying = toRefs(props).Modifying;
const modifying = ref<boolean>(true);
let name = "";
let pwd = "";

class InstructionNode {
  title: string = "";
  instruction: string = "";
  order: number;
  place: number;
  element: any;

  constructor(order: number, place: number, title: string, content: string) {
    this.order = order;
    this.place = place;
    this.element = nodeElements[place];
    this.title = title;
    this.instruction = content;
  }
}

const RefreshOrder = () => {
  let i = 0;
  for (i = 0; i < nodes.length; ++i) {
    nodes[i].order = i + 1;
  }
};

class InstructionLine {
  order: number;
  nodeList: InstructionNode[] = [];
  element: string;
  shadow: string;

  constructor(order: number) {
    this.order = order;
    this.element = "#line" + order;
    this.shadow = this.element + "s";
  }

  CalPlace(at:number,len:number)
  {
    return ((at+1)*2-1)/(len*2);
  }

  AddNode(node: InstructionNode) {
    let len = this.nodeList.length;
    let i = 0;
    let timeline = gsap.timeline({ paused: true });

    for (i = 0; i < len; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: this.CalPlace(i,len),
          end: this.CalPlace(i,len+1),
        },
      }, "<");
      //console.log((i + 1) / (len + 2))
    }
    timeline.to(node.element, {
      duration: 0.001,
      autoAlpha: 0,
    }, "<");
    timeline.to(node.element, {
      duration: 0.5,
      autoAlpha: 1,
      //ease: "power1.out",
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        start: 1,
        end: this.CalPlace(len,len+1),
      },
    }, "<");
    this.nodeList.push(node);
    return timeline;
  }

  AddHead(node: InstructionNode) {
    let len = this.nodeList.length;
    let i = 0;
    let timeline = gsap.timeline({ paused: true });

    for (i = 0; i < len; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: this.CalPlace(i,len),
          end: this.CalPlace(i+1,len+1),
        },
      }, "<");
      //console.log((i + 1) / (len + 2))
    }
    timeline.to(node.element, {
      duration: 0.001,
      autoAlpha: 0,
    }, "<");
    timeline.to(node.element, {
      duration: 0.5,
      autoAlpha: 1,
      //ease: "power1.out",
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        start: 0,
        end: this.CalPlace(0,len+1),
      },
    }, "<");
    this.nodeList.unshift(node);
    return timeline;
  }

  DelNode(inlineOrder: number, inNode: InstructionNode | null, from: number) {
    inlineOrder -= 1;
    let len = this.nodeList.length;
    let i = 0;
    let j = i;
    let popNode = this.nodeList[inlineOrder];
    let timeline = gsap.timeline({ paused: true });
    console.log(inlineOrder)

    if (inNode == null) {
      for (i = 0; i < len; ++i) {
        if (i == inlineOrder) {
          continue;
        }
        if (i > inlineOrder) {
          j = i - 1;
        }
        else {
          j = i;
        }
        timeline.to(this.nodeList[i].element, {
          duration: 0.5,
          //ease: "expo.out",
          motionPath: {
            path: this.element,
            align: this.element,
            alignOrigin: [0, 0],
            autoRotate: false,
            start: this.CalPlace(i,len),
            end: this.CalPlace(j,len-1),
          },
        }, "<");
      }
      timeline.to(this.nodeList[inlineOrder].element, {
        duration: 0.5,
        //ease: "power1.out",
        autoAlpha: 0,
        onComplete: () => {
          nodes.splice(popNode.order - 1, 1);
          showNodes[popNode.place].value = false;
          RefreshOrder();
        }
      }, "<");
      this.nodeList.splice(inlineOrder, 1);
    } else if (from == 0) {
      for (i = 0; i < inlineOrder; ++i) {
        timeline.to(this.nodeList[i].element, {
          duration: 0.5,
          //ease: "expo.out",
          motionPath: {
            path: this.element,
            align: this.element,
            alignOrigin: [0, 0],
            autoRotate: false,
            start: this.CalPlace(i,len),
            end: this.CalPlace(i+1,len),
          },
        }, "<");
      }
      timeline.to(inNode.element, {
        duration: 0.001,
        autoAlpha: 0,
      }, "<");
      timeline.to(inNode.element, {
        duration: 0.5,
        autoAlpha: 1,
        //ease: "power1.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: 0,
          end: this.CalPlace(0,len),
        },
      }, "<");
      timeline.to(this.nodeList[inlineOrder].element, {
        duration: 0.5,
        //ease: "power1.out",
        autoAlpha: 0,
        onComplete: () => {
          nodes.splice(popNode.order - 1, 1);
          showNodes[popNode.place].value = false;
          RefreshOrder();
        }
      }, "<");
      this.nodeList.splice(inlineOrder, 1);
      this.nodeList.unshift(inNode);
    } else {
      for (i = inlineOrder + 1; i < len; ++i) {
        timeline.to(this.nodeList[i].element, {
          duration: 0.5,
          //ease: "expo.out",
          motionPath: {
            path: this.element,
            align: this.element,
            alignOrigin: [0, 0],
            autoRotate: false,
            start: this.CalPlace(i,len),
            end: this.CalPlace(i-1,len),
          },
        }, "<");
      }
      timeline.to(inNode.element, {
        duration: 0.001,
        autoAlpha: 0,
      }, "<");
      timeline.to(inNode.element, {
        duration: 0.5,
        autoAlpha: 1,
        //ease: "power1.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: 1,
          end: this.CalPlace(len-1,len),
        },
      }, "<");
      timeline.to(this.nodeList[inlineOrder].element, {
        duration: 0.5,
        //ease: "power1.out",
        autoAlpha: 0,
        onComplete: () => {
          nodes.splice(popNode.order - 1, 1);
          showNodes[popNode.place].value = false;
          RefreshOrder();
        }
      }, "<");
      this.nodeList.push(inNode);
      this.nodeList.splice(inlineOrder, 1);
    }

    return timeline;
  }

  PopNode() {
    let len = this.nodeList.length;
    let i = 0;
    let j = i;
    let timeline = gsap.timeline({ paused: true });

    for (i = 0; i < len - 1; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          autoRotate: false,
          start: this.CalPlace(i,len),
          end: this.CalPlace(i,len-1),
        },
      }, "<");
    }
    timeline.to(this.nodeList[len - 1].element, {
      duration: 0.5,
      //ease: "power1.out",
      autoAlpha: 0,
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        autoRotate: false,
        start: this.CalPlace(len-1,len),
        end: 1,
      }
    }, "<");

    this.nodeList.pop();


    return timeline;
  }

  PopHead() {
    let len = this.nodeList.length;
    let i = 0;
    let j = i;
    let timeline = gsap.timeline({ paused: true });

    timeline.to(this.nodeList[0].element, {
      duration: 0.5,
      //ease: "power1.out",
      autoAlpha: 0,
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        autoRotate: false,
        start: this.CalPlace(0,len),
        end: 0,
      }
    }, "<");

    for (i = 1; i < len; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          autoRotate: false,
          start: this.CalPlace(i,len),
          end: this.CalPlace(i-1,len-1),
        },
      }, "<");
    }

    this.nodeList.splice(0, 1);


    return timeline;
  }

  MoveNode(node: InstructionNode) {
    let len = this.nodeList.length;
    let i = 0;
    let timeline = gsap.timeline({ paused: true });

    timeline.to(this.nodeList[0].element, {
      duration: 0.5,
      //ease: "power1.out",
      autoAlpha: 0,
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        autoRotate: false,
        start: this.CalPlace(1,len),
        end: 0,
      }
    }, "<");

    for (i = 1; i < len; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: this.CalPlace(i,len),
          end: this.CalPlace(i-1,len),
        },
      }, "<");
      //console.log((i + 1) / (len + 2))
    }
    timeline.to(node.element, {
      duration: 0.001,
      autoAlpha: 0,
    }, "<");
    timeline.to(node.element, {
      duration: 0.5,
      autoAlpha: 1,
      //ease: "power1.out",
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        start: 1,
        end: this.CalPlace(len-1,len),
      },
    }, "<");
    this.nodeList.push(node);
    this.nodeList.splice(0, 1);
    return timeline;
  }

  BothNode(node1: InstructionNode, node2: InstructionNode) {
    let len = this.nodeList.length;
    let i = 0;
    let timeline = gsap.timeline({ paused: true });

    timeline.to(node1.element, {
      duration: 0.001,
      autoAlpha: 0,
    }, "<");
    timeline.to(node1.element, {
      duration: 0.5,
      //ease: "power1.out",
      autoAlpha: 1,
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        autoRotate: false,
        start: 0,
        end: this.CalPlace(1,len+2),
      }
    }, "<");

    for (i = 0; i < len; ++i) {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: this.CalPlace(i,len),
          end: this.CalPlace(i+1,len+2),
        },
      }, "<");
      //console.log((i + 1) / (len + 2))
    }
    timeline.to(node2.element, {
      duration: 0.001,
      autoAlpha: 0,
    }, "<");
    timeline.to(node2.element, {
      duration: 0.5,
      autoAlpha: 1,
      //ease: "power1.out",
      motionPath: {
        path: this.element,
        align: this.element,
        alignOrigin: [0, 0],
        start: 1,
        end: this.CalPlace(len+1,len+2),
      },
    }, "<");
    this.nodeList.push(node2);
    this.nodeList.unshift(node1);
    return timeline;
  }

  Display() {
    let len = this.nodeList.length;
    let timeline = gsap.timeline({paused:true});

    let i = 0;
    for(i=0;i<len;++i)
    {
      timeline.to(this.nodeList[i].element, {
        duration: 0.5,
        autoAlpha:1,
        //ease: "expo.out",
        motionPath: {
          path: this.element,
          align: this.element,
          alignOrigin: [0, 0],
          start: 0,
          end: this.CalPlace(i,len),
        },
      },"<")
    }
    return timeline.play();
  }
}

let line1 = new InstructionLine(1);
let line2 = new InstructionLine(2);

let nodes: InstructionNode[] = [];
let nodesInElements: InstructionNode[] = [];

onBeforeMount(() => {
  let i = 0;
  showNodes.push(ref(false));
  for (i = 0; i < 8; ++i) {
    showNodes.push(ref(false));
  }

  modifying.value = route.query.modifying == "true";
  console.log(modifying.value);
  name = route.query.name as string;
  pwd = route.query.password as string;
})

onMounted(() => {
  let i = 0;
  getNodeElement();
  ParseBackend();
});

const getNodeElement = () => {
  let i = 0;
  let elements = document.getElementsByClassName("node");
  nodeElements.push(elements[0]);
  for (i = 0; i < elements.length; ++i) {
    nodeElements.push(elements[i]);
  }
}

const ParseBackend = () => {
  axios.post(
    "/portal/get_greenbirds"
  ).then(value => {
    value=value.data;
    //console.log(value);
    let i = 0;
    let timeline = gsap.timeline({paused:true});
    for(i=0;i<value.data.length;++i)
    {
        /*let newNodeObject = new InstructionNode(
          nodes.length + 1,
          i,
          value.data[i].title,
          value.data[i].content
        )

        nodes.push(newNodeObject);
        nodesInElements[i] = newNodeObject;
        showNodes[i].value = true;

        if (value.data.length<=3) {
          timeline.add(line1.AddNode(newNodeObject).play());
        }
        else {
          if (i<=(value.data.length+1)/2) {
            timeline.add(line1.AddNode(newNodeObject).play());
          }
          else {
            timeline.add(line2.AddNode(newNodeObject).play());
          }
        }*/
        timeline.add(AddNode(value.data[i].title,value.data[i].content));
    }
    timeline.kill();
    timeline = gsap.timeline({paused:true});
      timeline.set(line1.element,{
        autoAlpha:0,
      },"<");
      timeline.set(line1.shadow,{
        autoAlpha:0,
      },"<");
      timeline.set(line2.element, {
        autoAlpha: 0,
      }, "<");
      timeline.set(line2.shadow, {
        autoAlpha: 0,
      }, "<");
    for (i=0; i < line1.nodeList.length; ++i) {
        timeline.set(line1.nodeList[i].element, {
          autoAlpha:0
        }, "<")
      }
    for (i=0; i < line2.nodeList.length; ++i) {
        timeline.set(line2.nodeList[i].element, {
          autoAlpha:0
        }, "<")
      }
    if(displaySec.value)
    {
      timeline.set(line1.element, {
        y: "-=200",
      });
      timeline.set(line1.shadow, {
        y: "-=200",
      });
      let i = 0;
      for (i=0; i < line1.nodeList.length; ++i) {
        timeline.set(line1.nodeList[i].element, {
          y: "-=200"
        }, "<")
      }
      timeline.to(line1.element,{
        duration:0.5,
        autoAlpha:1
      });
      timeline.to(line1.shadow,{
        duration:0.5,
        autoAlpha:1
      });
      timeline.to(line2.element,{
        duration:0.5,
        autoAlpha:1
      },"<");
      timeline.to(line2.shadow,{
        duration:0.5,
        autoAlpha:1
      },"<");
      timeline.add(line1.Display(),"<");
      timeline.add(line2.Display());
    }
    else
    {
      timeline.add(line1.Display());
    }
    timeline.play();
  })
}

const ShowAddInfoInput = () => {
  showAddInfo.value = true;
}

const ShutAddInfoInput = () => {
  showAddInfo.value = false;
}

const PlayTimeline = (timeline: gsap.core.Timeline) => {
  let pro = timeline.progress();
  while (pro < 1) {

    timeline.progress(pro);
    timeline.play();
  }
}


const AddLine = (node: InstructionNode) => {
  let timeline = gsap.timeline({ paused: true });
  timeline.to(line1.element, {
    duration: 0.5,
    y: "-=200",
  });
  timeline.to(line1.shadow, {
    duration: 0.5,
    y: "-=200",
  },"<");
  timeline.set(line2.element, {
    autoAlpha: 0,
  }, "<");
  timeline.set(line2.shadow, {
    autoAlpha: 0,
  }, "<");
  timeline.set(node.element, {
    autoAlpha: 0,
  }, "<");
  let i = 0;
  for (i; i < line1.nodeList.length; ++i) {
    timeline.to(line1.nodeList[i].element, {
      duration: 0.5,
      y: "-=200"
    }, "<")
  }
  let node3 = line1.nodeList[line1.nodeList.length - 1];
  timeline.add(line1.PopNode().play());
  displaySec.value = true;
  timeline.to(line2.element, {
    duration: 0.5,
    autoAlpha: 1,
  }, "<");
  timeline.to(line2.shadow, {
    duration: 0.5,
    autoAlpha: 1,
  }, "<");
  timeline.add(line2.BothNode(node3, node).play(), "<");
  return timeline.play();
};

const AddNodeFromUser = () => {
  if (inputTitle.value.length > 0 && inputInstruction.value.length > 0) {
    AddNode(inputTitle.value, inputInstruction.value);
  }
}

const AddNode = (title: string, content: string) => {
  let timeline = gsap.timeline({paused:true});

  if (nodes.length >= 8) {
    //TODO:提示用户当前新手上路节点数已达到上限
    return timeline;
  }

  let i = 1;
  for (i = 1; i <= 8; ++i) {
    if (showNodes[i].value == false) {
      break;
    }
  }


  let newNodeObject = new InstructionNode(
    nodes.length + 1,
    i,
    title,
    content
  )
  nodes.push(newNodeObject);
  nodesInElements[i] = newNodeObject;
  showNodes[i].value = true;

  if (displaySec.value == false) {
    if (nodes.length >= 4) {
      timeline.add(AddLine(newNodeObject));
    } else {
      timeline.add(line1.AddNode(newNodeObject).play());
    }
  }
  else {
    if (nodes.length % 2 == 1) {
      let popNode = line2.nodeList[0];
      timeline.add(line2.MoveNode(newNodeObject).play());
      timeline.add(line1.AddNode(popNode).play());
    }
    else {
      timeline.add(line2.AddNode(newNodeObject).play());
    }
  }
  return timeline.play();
};

const DelNode = (node: InstructionNode) => {
  let order = node.order;
  console.log(order);
  let len = nodes.length;
  let st = len % 2;
  let num1 = Math.ceil(len / 2);
  if (displaySec.value == false) {
    line1.DelNode(order, null, 0).play();
  }
  else {
    let timeline = gsap.timeline({ paused: true })
    if (order <= num1) {
      if (st == 0||line2.nodeList.length<=1) {
        let popNode = line2.nodeList[0];
        timeline.add(line2.PopHead().play());
        timeline.add(line1.DelNode(order, popNode, 1).play(),"<");
      }
      else {
        timeline.add(line1.DelNode(order, null, 0).play());
      }
    }
    else {
      if (st == 0||line2.nodeList.length<=1) {
        timeline.add(line2.DelNode(order - num1, null, 0).play());
      }
      else {
        let popNode = line1.nodeList[line1.nodeList.length - 1];
        timeline.add(line1.PopNode().play());
        timeline.add(line2.DelNode(order - num1, popNode, 0).play(),"<");
      }
    }
    if (line2.nodeList.length <= 0) {
      timeline.to(line1.element, {
        duration: 0.5,
        y: "+=200",
      });
      timeline.to(line1.shadow, {
        duration: 0.5,
        y: "+=200",
      },"<");
      let i = 0;
      for (i; i < line1.nodeList.length; ++i) {
        timeline.to(line1.nodeList[i].element, {
          duration: 0.5,
          y: "+=200"
        }, "<")
      }
      timeline.to(line2.element, {
        duration: 0.5,
        autoAlpha: 0,
      }, "<");
      timeline.to(line2.shadow, {
        duration: 0.5,
        autoAlpha: 0,
      }, "<");
      displaySec.value = false;
    }
    timeline.play();
  }
};

type nodeInfo = {
  order:number,
  title:string,
  content:string
}

const SaveNodes = () => {
  let i=0;
  let infos:nodeInfo[]=[];
  for(i=0;i<nodes.length;++i)
  {
    let info:nodeInfo = {order:nodes[i].order,title:nodes[i].title,content:nodes[i].instruction};
    infos.push(info);
  }
  console.log(JSON.stringify(infos));
  axios(
    {
      url: axios.defaults.baseURL + '/portal/save_greenbirds',
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        greenBirds:infos
      },
      transformRequest: [function (data, headers) {
        let data1 = JSON.stringify(data)
        console.log(data1)
        return data1
      }]
    }
  )
  .then((response) => {
    router.push({
        path: "/PersonalInfo",
        query: {
          user_id: localStorage.getItem("user_ID"),
        },
      });
  })
}

const ReturnSignUp = ()=>{
  router.push("/SignUp");
}

const DirectLoginin = () => {
  axios(
    {
      url: axios.defaults.baseURL + '/user/login',
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        username:name,
        password:pwd
      },
      transformRequest: [function (data, headers) {
         let ret = ''
         for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
         }
         ret = ret.substring(0, ret.lastIndexOf('&'));
         return ret
      }]
    }
  )
        .then(function (response) {
          // 处理成功情况
          console.log(response.data)
          if(response.data?.status){
              User.Login=true;
              User.Id=response.data.data.user_id;
              localStorage.setItem("login","true")//本地
              localStorage.setItem("user_ID",response.data.data.user_id)
              console.log(localStorage.getItem("login"))
              console.log(localStorage.getItem("user_ID"))
              if(User.Id == 9982443)
              {
                User.isadmin = true
              }
              else{
                User.isadmin = false;
              }

              // User.Name=modelRef.value.name,
              // User.Id=response.data.data.user_id,
              // localStorage.setItem("name",modelRef.value.name!=null?modelRef.value.name:"")
              
              router.push("/")
          }
        })
}
</script>

<style scoped>
.card{
  padding:0;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 10px 10px 80px 0px #3f276619;
  overflow: hidden; 
  height: 1203px;
  /*width: 1354px;*/     
}
.storeButton {
  position: absolute;
  left: 82px;
  top: 61px;
}

.addButton {
  position: absolute;
  left: 221px;
  top: 61px;
}

.returnButton{
  position: absolute;
  left:548px;
  top:1094px;
}

.directLoginButton{
  position: absolute;
  left:748px;
  top:1094px;
}

.titleInput {
  width: 130px;
}

.contentInput {
  width: 236px;
}

.secButton {
  color: #5AA8D7;
  font-weight: bolder;
  font-family: nunito-sans, sans-serif;
}

.node {
  position: absolute;
  width: 180px;
  height: 0;
}

svg {
  position: absolute;
}

.absolute {
  position: absolute;
}
</style>
