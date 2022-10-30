import React from 'react'

function Form({visible, onClose}) {
    if (!visible) return null;

    const handleOnClose=(e)=>{
        if (e.target.id==="container")onClose()
    }

  return (
    <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-2 rounded w-150 md:w-[600px]'>
        <h1 className="font-semibold text-center text-xl mb-4  text-gray-700">
            Book with Us
        </h1>
        {/* <p className="text-center text-gray-700 mb-5">Sign in</p> */}

        <div className="p-2 justify-start grid md:grid-cols-2 gap-x-6 mx-5 ">

        <div className='flex items-center '>
            <label for="number" class="block text-xl font-medium text-gray-700">Card-No: </label>
            <div class="relative mt-2 rounded-md">
                {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span class="text-gray-500 sm:text-sm">$</span>
                </div> */}
                <input type="text" name="cardnumber" id="number" className="mb-4 py-1 pl-1 w-full rounded-md border-2  sm:text-sm pr-1" placeholder="********"/>               
            </div>
            </div>
            <div className='flex items-center justify-start'>
                <label for="number" class="block text-xl font-medium text-gray-700">Location: </label>
                <div class="relative mt-2 rounded-md">                  
                    <input type="text" name="cardnumber" id="number" className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm" placeholder="********"/>                   
                </div>
            </div>
            <div className='flex items-center justify-start'>
                <label for="number" class="block text-xl font-medium text-gray-700">Dealer: </label>
                <div class="relative mt-2 rounded-md">                   
                    <input type="text" name="cardnumber" id="number" className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm pr-[20px]" placeholder="********"/>                    
                </div>
            </div>
            <div className='flex items-center justify-start'>
                <label for="number" class="block text-xl font-medium text-gray-700">Weight: </label>
                <div class="relative mt-2 rounded-md">                   
                    <input type="text" name="cardnumber" id="number" className="mb-4 p-1 block w-full rounded-md border-2  sm:text-sm pr-[18px]" placeholder="**"/>                 
                </div>
            </div>
        </div>
        <div className="text-center flex justify-center">
          <button className="ml-5 mr-20 md:mx-auto w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto">
            Submit
          </button>
            <button onClick={onClose} className='w-[100px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto' >Cancel</button>
        </div>
        </div>
    </div>
  )
}

export default Form