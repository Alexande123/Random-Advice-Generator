const generator = document.querySelector('.generator')
generator.addEventListener('click', ()=>{
 fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(function(data){
 const {id, advice} = data.slip
 
 document.querySelector('.advice-id').innerHTML = `Advice #${id}`
 document.querySelector('.advice-text').innerHTML = `" ${advice} "`
}) 
.catch(err => {})
 
})
