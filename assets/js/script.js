document.addEventListener('DOMContentLoaded', (event) => {

    maskedinput.mask(document.querySelectorAll('.form-mask-card'), '9999-9999-9999-9999', { autoclear: false });

    var link = document.getElementById('form_copy');

    if (undefined != link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var copy = document.getElementById('form_to_copy');
            navigator.clipboard.writeText(copy.value)
                .then(() => {
                    //alert(copy.value);
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        });
    }

    var link2 = document.getElementById('form_copy_val');

    if (undefined != link2) {
        link2.addEventListener('click', function (e) {
            e.preventDefault();
            var copy = document.getElementById('form_to_copy_val');
            navigator.clipboard.writeText(copy.innerText)
                .then(() => {
                    //alert(copy.value);
                })
                .catch(err => {
                    console.log('Something went wrong', err);
                });
        });
    }
});

function open_file(){
    document.getElementById('form-file').click();
}