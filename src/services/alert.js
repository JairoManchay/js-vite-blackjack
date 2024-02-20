export function mostrarAlert(title, text, icon){
    Swal.fire({
        title: title,
        text: text,
        icon: icon, 
        showClass: {
            popup: 'animate__animated animate__backInDown'
        }
    })
}