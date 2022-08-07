window.onload = function (){
    var test= document.querySelectorAll('.button')
    for(var i=0;i<test.length;i++){
        test[i].addEventListener("click", function(){
            fetch('./Textos/'+ this.id + '.txt')
            .then(response => response.text())
            .then(data => {
                Swal.fire({
                    title: this.id,
                    text: data,
                    imageUrl: './images/' + this.id + '.png',
                    imageWidth: 200,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    confirmButtonText: 
                        '<i class="fa-solid fa-thumbs-up"></i> Me gusta',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    confirmButtonColor: '#014ba0',
                    confirmButtonTextColor: '#fff'
                })
            });
        }); 
    }
}