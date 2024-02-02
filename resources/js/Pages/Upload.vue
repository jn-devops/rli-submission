<template>
     <Head>
        <!-- <meta type="description" content="Home information to my app" head-key="description"> -->
        <title>Upload Page</title>
    </Head>
    <!-- <h1>Upload here</h1> -->
    <section>
        <div class="h-screen flex justify-center items-center flex-col">
            <div class="image">
                <img src="../../img/Raemulan Lands Logo.svg" alt="Logo" class="raemulan-lands-logo">
            </div>
       
            <!-- <DropZone @drop.prevent="drop" @change="selectedFile"/> -->
            <DropZone />
            <!-- <span class="">File: {{ dropzoneFile.name }}</span> -->

        </div>
    </section>
</template>


<script >
    import { Head } from '@inertiajs/vue3';
    // import Dropzone from '../Components/Dropzone.vue';
    import DropZone from '../Components/Dropzone.vue';
    import { ref } from 'vue';
    
    export default{
      
        components: {
            Head, DropZone
        }
        // setup(){
        //     let dropzoneFile = ref("");


        //     const drop = (e) =>{
        //         dropzoneFile.value = e.dataTransfer.files[0];
        //     };

        //     const selectedFile = () =>{
        //         dropzoneFile.value = document.querySelector('.dropzoneFile').files[0];
        //     }

        //     return { dropzoneFile, drop, selectedFile };
        // },
        // data() {
        //     return {
        //         dropzoneFile: null,
        //         uploadProgress: 0,
        //     };
        // }
    }



    // export default{
    //     setup(){
    //         const active = ref(false);
    //         const toggleActive = () =>{
    //             active.value = !active.value;
    //         };

    //         return {active, toggleActive};
    //     }
    // }
//     export default {
//         components: {
//     Head,
//     Dropzone
// },
//         setup() {
//             const active = ref(false);

//             const toggleActive = () => {
//             active.value = !active.value;
//             };

//             return { active, toggleActive };
//         },
//         props: {
//             property1:{
//                 type: String,
//                 default: "default",
//                 validator: function (value) {
//                 return ["variant-2", "default"].indexOf(value) !== -1;
//             },
//             }
//         }
// };
    // defineOptions({
    //     // name: "OutlineDrop"
    //     name: "DropZone",
    //     setup(){
    //         const active = ref(false);

    //         const toggleActive = () =>{
    //             active.value = !active.value;
    //         };

    //         return { active, toggleActive };
    //     }
    // })
    // defineProps({
    //     property1: {
    //         type: String,
    //         default: "default",
    //         validator: function (value) {
    //         return ["variant-2", "default"].indexOf(value) !== -1;
    //     },
    //     }
    // })
</script>

<style>
.image {
  height: 129px;
  width: 287px;
}

.image .raemulan-lands-logo {
  height: 129px;
  /* left: 0; */
  object-fit: cover;
  position: fixed;
  /* top: 0; */
  width: 287px;
}

/* .outline-drop {
    border: 1px dashed;
    border-color: #000000;
    border-radius: 20px;
    height: 587px;
    width: 575px;
    margin: 5% auto;
  }
  
  .outline-drop.default {
    background-color: #edeff5;
  }
  
  .outline-drop.variant-2 {
    background-color: #e1e4ed;
  }

    .box {
    height: 660px;
    width: 645px;
  }

    .box .rectangle {
    background-color: #ffffff; border-radius: 20px;
    box-shadow: 9px 20px 90px #0000000d; height: 660px;
    position: fixed;
    width: 645px;
    }
    .text-wrapper {
    color: #000000;
    font-family: "Montserrat-Bold", Helvetica; 
    font-size: 30px;
    font-weight: 700; 
    letter-spacing: 0; 
    line-height: normal; 

    } 


    /* Dropzone */
    /* .dropzone{
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 16px;
        border: 1px dashed #000000;
        border-radius: 20px;
        background-color: #fff;
        transition: .3s ease all;
    }
    label{
        padding: 15px 42%;
        background-image: linear-gradient(180deg, rgb(204, 3, 92) 0%, rgb(252, 177, 21) 100%);
        border: 1px solid #000000;
        border-radius: 20px;
        height: 30px;
        width: 100px;
        position: relative;
        text-align: center;
        transition: .3s ease all;
    }
    input{
        display: none;
    }
    .active-dropzone{
        background-color: aquamarine;
    } */
</style>
