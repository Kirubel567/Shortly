const input = document.getElementById('link-input'); 
const linkForm = document.getElementById('link-form'); 
const errMsg = document.getElementById('err-msg'); 


// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

linkForm.addEventListener('submit',(event)=>{
    event.preventDefault(); 
    if(input.value === ''){
        errMsg.innerHTML='please enter something'
        input.classList.add('border-red-500')
    }else if(!validURL(input.value)){
         errMsg.innerHTML='please enter a valid URL'
        input.classList.add('border-red-500')
    }else{
        errMsg.innerHTML=''
        errMsg.classList.add('text-green-400')
        alert('success')
    }
})