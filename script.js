var link = document.querySelector('.link')
var myModal = document.getElementById('myModal')
var video_modal = document.getElementById('video_modal')
var videoSrc

videoBtn.addEventListener('click',function(e){
    videoSrc = videoBtn.getAttribute('data-bs-src')
})

videoModal.addEventListener('shown.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})