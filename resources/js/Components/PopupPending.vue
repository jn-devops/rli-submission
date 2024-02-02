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
      <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all lg:my-8 lg:w-full lg:max-w-md lg:p-6 flex flex-col justify-center" style="height: 40vh;">
        <div>
          <!-- <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <svg class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div> -->
          <div class="mt-3 text-center lg:mt-5">
            <h3 class="text-base font-semibold leading-6 text-gray-900 text-left" id="modal-title">File Upload</h3>
            
            <div class="mt-2">
            <div class="text-left">
                <p class="font-bold text-sm">Valid ID (Spouse) </p>
                <p class="text-sm">Valid primary identification (ID) card (Photocopy, back-to-back)</p>
            </div>
              <!-- <div class="mt-4">
                <p>Please input the correct reference code.</p>
              </div> -->
              <!-- <div v-if="isVerified" class="mt-3 p-4 bg-green-100">
                Verification successful!
              </div> -->
              <div class="mt-3 p-4">
                <div v-if="fileName">
                  <p class="text-left">File: <span class="font-bold">{{ fileName }}</span></p>
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
                  <select v-model="selectOption" id="document" name="document" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option disabled selected>Select Type ID</option>
                    <option value="Help Seminar" >
                      Help Seminar
                    </option>
                    <option value="Valid ID (Spouse)">Valid Id (spouse)</option>
                    <option value="Payslip">Payslip</option>
                  </select>
                </div>
              </div>
              <!-- <div v-else class="mt-4">
                <p>Please input the correct reference code.</p>
              </div> -->
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6 flex items-center justify-center">
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

    export default{
        components:{
            Link
        },
        props: {
            fileName: String,
        },
        setup(){
            const isOpen = ref(true);
            const closeModal = () => {
            // console.log('Closing modal');
            isOpen.value = false;
            };

            const saveFile = (e) =>{
            // console.log(this.selectOption);
            console.log('asdasd123123');
            // console.log(fileName);
            };
            return { isOpen, closeModal, saveFile };
        },
        data(){
            return{
                // isVerified: false
                // selectOption: "",
                selectOption: 'Valid ID (Spouse)'
            }
        },
        methods: {
            saveFile(){
            // isVerified: false
            console.log("selection Option:", this.selectOption);
            // this.isVerified = true;
            }
        }
       
    }
    const open = ref(true);
</script>

<style>
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