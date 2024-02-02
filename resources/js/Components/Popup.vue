<!-- <template>
<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
              <div>
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <CheckIcon class="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Payment successful</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button type="button" class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="open = false">Go back to dashboard</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template> -->

<template>
  
  <div v-if="isOpen" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="closeModal"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center lg:items-center lg:p-0">
      <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <!-- <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6"> -->
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all lg:my-8 lg:w-full lg:max-w-md lg:p-6 flex flex-col justify-center" style="height: 50vh;">
        <div>
          <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div> -->
          <div class="mt-3 text-center lg:mt-5">
            <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Enter your Reference Code to Continue</h3>
            
            <div class="mt-2">
              <!-- <p class="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p> -->
              <div class="flex">
                <div class="ml-1">
                    <label for="num1" class="sr-only">num1</label>
                    <input v-model="num1" type="text" name="num1" id="num1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num2" class="sr-only">num2</label>
                    <input v-model="num2" type="text" name="num2" id="num2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num3" class="sr-only">num3</label>
                    <input v-model="num3" type="text" name="num3" id="num3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num4" class="sr-only">num4</label>
                    <input v-model="num4" type="text" name="num4" id="num4" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl" >
                </div>
                <div class="ml-1">
                    <label for="num5" class="sr-only">num5</label>
                    <input v-model="num5" type="text" name="num5" id="num5" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num6" class="sr-only">num6</label>
                    <input v-model="num6" type="text" name="num6" id="num6" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num7" class="sr-only">num7</label>
                    <input v-model="num7" type="text" name="num7" id="num7" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>
                <div class="ml-1">
                    <label for="num8" class="sr-only">num8</label>
                    <input v-model="num8" type="text" name="num8" id="num8" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center font-bold text-3xl">
                </div>

              </div>
              <!-- <div class="mt-4">
                <p>Please input the correct reference code.</p>
              </div> -->
              <!-- <div v-if="isVerified" class="mt-3 p-4 bg-green-100">
                Verification successful!
              </div> -->
              <div v-if="isVerified" class="mt-3 p-4">
                <div v-if="fileObject">
                  <!-- <Dropzone @file-selected="saveFile" /> -->
                  <p class="text-left">File: <span class="font-bold">{{ fileObject.name }}</span></p>
                  <p>asdasd: {{ fileObject }}</p>
                  <div class="progress-container">
                    <div class="progress-bar" id="myProgressBar">
                      <!-- <div class="progress-text">100%</div> -->
                    </div>
                  </div>
                </div>
                <div v-else>
                  No File Name available
                </div>
                <div>
                  <!-- <select v-model="selectedType">
                    <option v-for="type in types" :key="type.value" :value="type.value">{{ type.value }}</option>
                  </select> -->
                  <label for="document" class="hidden text-sm font-medium leading-6 text-gray-900">Document</label>
                  <select v-model="selectOption1" id="document" name="document" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option selected disabled>Select Type ID</option>
                    <option value="Help Seminar">
                      Help Seminar
                    </option>
                    <option value="Valid ID (Spouse)">Valid Id (spouse)</option>
                    <option value="Payslip">Payslip</option>
                  </select>
                </div>
              </div>
              <div v-else class="mt-4">
                <p>Please input the correct reference code.</p>
              </div>
            </div>
          </div>
        </div>
        <div v-if="!isVerified" class="mt-5 sm:mt-6 flex items-center justify-center">
          <button type="button" class="inline-flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="verify"
          style="background: linear-gradient(268deg, #CC035C 7.47%, #FCB115 98.92%);"
          >
          <!-- {{ buttonText }} -->
          Verify
        </button>
        </div>
        <div v-if="isVerified" class="mt-5 sm:mt-6 flex items-center justify-center">
          <Link type="button"  href="/popuplanding" class="inline-flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="saveFile"
          style="background: linear-gradient(268deg, #CC035C 7.47%, #FCB115 98.92%);"
          >
          <!-- {{ buttonText }} -->
          Save File
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { ref } from 'vue'
import { Link } from '@inertiajs/vue3';
// import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
// import { CheckIcon } from '@heroicons/vue/24/outline'
// import eventBus from '../EventBus.js';
// import Dropzone from '../Components/Dropzone.vue';
// import Popup from '../Components/Popup.vue';

export default{
  components:{
    Link
  },
  props: {
    // fileName: String,
    fileObject: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    let selectOption1 = ref('');
    
    const selectedFile = ref(null);

    const isOpen = ref(true);

    const closeModal = () => {
      // console.log('Closing modal');
      isOpen.value = false;
    };
    const saveFile = (sfile) =>{
      selectedFile.value = sfile;
      console.log('file:', selectedFile.value);
      console.log('selection Option: ', selectOption1.value)
      const file = props.fileObject.value;
      
      const refCode = num1.value + num2.value + num3.value + num4.value + num5.value + num6.value + num7.value + num8.value;
      // selectedFile.value = sfile;
      // console.log('File selected in Popup:', selectedFile.value);
      // console.log(num1.value);
      // if (file) {
        
      //     const blob = new Blob([file]);

      //     const objectUrl = URL.createObjectURL(blob);
      //     // console.log(objectUrl)

      //     const formData = new FormData();
      //     formData.append('file',file);
      //     // formData.append('id_type',selectOption1.value);
      //     // formData.append('buyer_id',61);
      //     // formData.append('reservation_code',refCode);

      //     const jsonData = JSON.stringify({
      //       id_type: selectOption1.value,
      //       buyer_id: 61,
      //       reservation_code: refCode
      //     });
      //     formData.append('data',jsonData);
      //     formData.append('file', objectUrl);
      //     // const objectUrl = URL.createObjectURL(jsonData);
      //     // formData.append('file', objectUrl);

      //     // formData.append('data',objectUrl);


      //      // Convert JSON data to Blob
        
      //     console.log(formData)
      //     try {
              
      //         const response = await fetch('https://eos0oy7reaq3cyj.m.pipedream.net', {
      //         // const response = await fetch('https://eotf87r3xqjhbc.m.pipedream.net', {
      //             method: 'POST',
      //             body: formData
      //             // body: JSON.stringify({
      //             //   file:formData,
      //             //   data:{
      //             //     id_type:selectOption1.value,
      //             //     buyer_id: 61,
      //             //     reservation_code: refCode
      //             //   }
      //             // }),
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
          
      //     URL.revokeObjectURL(objectUrl);
      // }

      // console.log('asdasd123123');
      // console.log(fileName);
    };
    return { selectOption1, saveFile , isOpen, closeModal };
  },
  data(){
    return{
      num1: 'J',
      num2: 'N',
      num3: '0',
      num4: '0', 
      num5: '0',
      num6: '0',
      num7: '0',
      num8: '0',
      // selectOption: undefined,
      selectOption: 'Select ID Type',
      isVerified: false,
      progressBarWidth: 0,
      // buttonText: 'Verify',
      types:[
        {
          'name': "Help Seminar",
          "value": 'Help Serminar'
        },
        {
          'name': "Valid ID (Spouse)",
          'value': 'Valud ID (Spouse)'
        },
        {
          'name': "Payslip",
          'value': 'Payslip'
        }
      ]
      // selectedFileName: null
    }
  },
  methods: {
    verify() {
      // Add your verification logic here
      const isAllTrue =
        this.num1 === 'J' &&
        this.num2 === 'N' &&
        this.num3 === '0' &&
        this.num4 === '0' &&
        this.num5 === '0' &&
        this.num6 === '0' &&
        this.num7 === '0' &&
        this.num8 === '0';

      // Update the isVerified flag based on the verification result
      this.isVerified = isAllTrue;
      // const isVerificationSuccessful = true;
      // if (isVerificationSuccessful) {
      //   // Change the button text to 'Save File' if verification is successful
      //   this.buttonText = 'Save File';
      // }
    }
    // saveFile(){
    //   // console.log(e.target);
    //   console.log("selection Option:", this.selectOption);
    // }
  },

}
const open = ref(true)
// console.log(open);
</script>

<style scoped>
/* .progress-container {
  width: 100%;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  height: 14px;
  border-radius: 20px;
  position: relative;
}

.progress-bar {
  height: 50%;
  width: 0;
  background-color: #4caf50;
  text-align: center;
  line-height: 10px;
  color: white;
  font-size: 16px;
  position: absolute;
} */

.progress-container {
  width: 100%;
  background-color: #7192F6;
  border: 1px solid #7192F6;
  height: 14px;
  border-radius: 20px;
  position: relative;
}

.progress-bar {
  height: 50%;
  width: 0;
  text-align: center;
  line-height: 30px;
  color: #7192F6;
  font-size: 16px;
  position: absolute;
  transition: background-color 0.3s; /* Add transition for a smooth color change */
}
.progress-text {
  position: absolute;
  width: 100%;
}
</style>