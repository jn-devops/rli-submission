<template>
   <div class="mt-6 box">
    <div class="rectangle">
        <!-- <div :class="{ 'active-dropzone': active },['outline-drop', property1]">
            <img src="../../img/dad9ff7c7fa3f3a039dc8a6167666259.gif" alt="Icon" class="mx-auto h-48 mt-6">
            <h1 class="font-bold text-2xl text-center mt-4 text-wrapper">Upload your Documents</h1>
            <p class="text-center my-4">Drag and drop your files</p>
            <p class="text-center my-4">or</p>
            <label class="btndropZone mt-4" for="dropzoneFile">Browse</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile"/>
        </div> -->
        <div 
        @dragenter.prevent="toggleActive" 
        @dragleave.prevent="toggleActive" 
        @dragover.prevent
        @drop.prevent="drop"
        :class="{ 'active-dropzone': active },['outline-drop', property1]"
        class="dropzone" 
        >
            <img src="../../img/dad9ff7c7fa3f3a039dc8a6167666259.gif" alt="Icon" class="mx-auto h-48 mt-6">
            <h1 class="font-bold text-2xl text-center mt-4 text_upload-title">Upload your Documents</h1>
            <p class="text-center my-4 text_upload">Upload your Documents</p>
            <p class="text-center my-4 text_upload">Or</p>
            <label class="btndropZone" for="dropzoneFile">Browse</label>
            <input 
            type="file" 
            id="dropzoneFile" 
            class="dropzoneFile"
            ref="fileInput"
            @change="handleFileChange"
            />
          
        </div>
        <div>
            <span class="">File: {{ selectedFile ? selectedFile.name : 'No file selected' }}</span>
        </div>
        <!-- <template v-if="selectedFile?.length > 0">
            <Dialog />
            
            {{ selectedFile }}
        </template> -->
        <div>
            <!-- <Popup v-if="selectedFile"  :selectedFileName="selectedFileName"/> -->
            <!-- <Popup v-if="selectedFile"  :fileObject="selectedFile.value" :fileName="selectedFile.name"/> -->
            <Popup v-if="selectedFile"  :fileObject="selectedFile.value" :fileName="selectedFile.name"/>
            <span v-else>No Dialog available</span>
        </div>
    </div>
   </div>
   
</template>

<script>
    import { ref, watch } from 'vue'
    import Popup from '../Components/Popup.vue'

    export default {
        components:{ Popup },
        data(){
            return{
                selectedFile: null,
            }
        },
        setup(_, { emit }) {
            const selectedFile = ref(null);
            const active = ref(false);
            const fileInput = ref(null);

            const toggleActive = () => {
            active.value = !active.value;
            };

            const drop = (event) => {
            event.preventDefault();
            active.value = false;
            selectedFile.value = event.dataTransfer.files[0];
            // console.log(selectedFile.value = event.dataTransfer.files[0]);
            console.log('Selected File:', selectedFile);
            };

             const handleFileChange = async () => {
                 selectedFile.value = fileInput.value.files[0];
                 console.log('Selected File:', selectedFile);
                 emit('file-selected', selectedFile.value);
                //  const file = this.$refs.fileInput.files[0];
                // this.$emit('file-selected', file);
                //  const file = selectedFile;
                //  const objectUrl = URL.createObjectURL(file);
                //  const formData = new FormData();
                // formData.append('file', file);
                // formData.append('objectUrl', objectUrl);
                // console.log(formData);
                // if (file) {
                //     // Now you can use `file` to pass it to PipdDream or perform any other actions

                //     // Example: Send the file to PipdDream
                //     const blob = new Blob([file]);

                //     const objectUrl = URL.createObjectURL(blob);
                //     console.log(objectUrl)

                //     const formData = new FormData();
                //     formData.append('file',objectUrl);
                //     console.log(formData)
                //     try {
                //         // Make a POST request to your PipdDream endpoint
                //         const response = await fetch('https://eotf87r3xqjhbc.m.pipedream.net', {
                //             method: 'POST',
                //             body: formData,
                //         });

                //         if (response.ok) {
                //             console.log('File successfully sent to PipdDream');
                //             console.log(response);
                //         } else {
                //             console.error('Failed to send file to PipdDream');
                //         }
                //     } catch (error) {
                //         console.error('Error sending file to PipdDream:', error);
                //     }
                //     // Don't forget to revoke the Object URL when you're done with it to free up resources
                //     URL.revokeObjectURL(objectUrl);
                // }
             };
            return { active, toggleActive, selectedFile, fileInput, drop, handleFileChange };
        },
        props: {
            property1:{
                type: String,
                default: "default",
                validator: function (value) {
                return ["variant-2", "default"].indexOf(value) !== -1;
            },
            },
            // selectedFile: Object,
        },
        methods: {
            // handleFileChange(event) {
            //     const selectedFile = event.target.files[0];
            //     this.selectedFile = selectedFile;
            //     const file = this.fileInput.value.files[0];
            //     // Log to verify that the selectedFile is being set
            //     console.log('selectedFile in DropZone:', this.selectedFile);

            //     // const formData = new FormData();
            //     // formData.append('file', file);

            //     // console.log(formData);
            // },
            // handleFileChange() {
            //     const file = this.$refs.fileInput.files[0];
            //     this.$emit('file-selected', file);
            //     }
        },
        // methods: {
        //     handleFileChange(event) {
        //     const selectedFile = event.target.files[0];

        //     // Log the selectedFileName to ensure it's being set correctly
        //     console.log(selectedFile.name);

        //     // Set the selectedFileName in data
        //     this.selectedFileName = selectedFile.name;
        //     },
        //},
    };

//     import { ref } from 'vue';

// export default {
//    setup() {
//       const active = ref(false);

//       const toggleActive = () => {
//          active.value = !active.value;
//       };

//       const onDrop = (event) => {
//          toggleActive();
//          const files = event.dataTransfer.files;
//          if (files.length > 0) {
//             // Emit the files to the parent component
//             this.$emit('drop', files);
//          }
//       };

//       return { active, toggleActive, onDrop };
//    },
//    props: {
//       property1: {
//          type: String,
//          default: 'default',
//          validator: function (value) {
//             return ['variant-2', 'default'].indexOf(value) !== -1;
//          },
//       },
//    },
// };
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
 .outline-drop {
    border: 1px dashed;
    border-color: #000000;
    border-radius: 20px;
    height: 587px;
    width: 575px;
    margin: 5% auto;
    /* background-color: #edeff5; */
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
    .dropzone{
        /* border: 1px dashed; */
        /* border-color: #000000; */
        /* border-radius: 20px; */
        height: 587px;
        width: 575px;
        margin: 5% auto;

        /* width: 400px; */
        /* height: 200px; */
        /* display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 16px; */
        border: 1px dashed #000000;
        border-radius: 20px;
        background-color: #fff;
        transition: .3s ease all;
    }
    label.btndropZone{
        /* padding: 15% 42%; */
        width: 382px;
        height: 82px;
        flex-shrink: 0;
        background: linear-gradient(268deg, #FCB115 7.47%, #CC035C 98.92%);
        /* background-color: darkkhaki; */
        /* border: 1px solid #000000; */
        border-radius: 10px;
        /* height: 30px;
        width: 100px; */
        /* position: relative; */
        text-align: center;
        transition: .3s ease all;
        margin: 10% auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: normal;
    }
    input{
        display: none;
    }
    .active-dropzone{
        background-color: #e1e4ed !important;
    }
    .text_upload{
        color: #000;
        /* font-family: Montserrat; */
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    .text_upload-title{
        color: #000;
        /* font-family: "Montserrat"; */
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
</style>