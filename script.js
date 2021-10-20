var mobNumIp = document.querySelector('.mobNumIp');
var fnameIp = document.querySelector('.fnameIp');
var inputForm = document.querySelector('.inputForm')
var mobCode = mobNumIp.value;

inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Submitted")
    if(mobNumIp.value.length == mobCode.length){
        alert("Mobile Num Empty")
    }
})

mobNumIp.addEventListener('keyup', function(e){
    var mobNum = this.value.slice(mobCode.length).replace(/[^\d]/,'');
    this.value = mobCode+mobNum;
})
fnameIp.addEventListener('keyup', function(e){
   this.value = this.value.replace(/[^a-zA-Z]/,'');
})