document.addEventListener('DOMContentLoaded', function() {
    const inputMaxLengthOnLoad = document.getElementById('inputNama').maxLength;
    document.getElementById('sisaKarakter').innerText = inputMaxLengthOnLoad;

    //function meneerima inputan dari user
    document.getElementById('inputNama').addEventListener('input', function () {
        const jumlahKarakterDiketik = document.getElementById('inputNama').value.length;
        const jumlahKarakterMaksimal = document.getElementById('inputNama').maxLength;

        console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
        console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);
        const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
        document.getElementById('sisaKarakter').innerText = sisaKarakterUpdate.toString();

        if (sisaKarakterUpdate === 0) {
            document.getElementById('sisaKarakter').innerText = 'Batas maksimal tercapai!';
        } else if (sisaKarakterUpdate <= 5) {
            document.getElementById('notifikasiSisaKarakter').style.color = 'red';
        } else {
            document.getElementById('notifikasiSisaKarakter').style.color = 'black';
        }
    });

    //function untuk menampilkan notifikasi sisa karakter
    document.getElementById('inputNama').addEventListener('focus', function () {
        console.log('inputNama: focus');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
    });

    //function untuk menghapus notifikasi sisa karakter
    document.getElementById('inputNama').addEventListener('blur', function () {
        console.log('inputNama: blur');
        document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
    });

    //function untuk menerima inputan captcha dari user
    document.getElementById('inputCaptcha').addEventListener('change', function () {
        console.log('inputCaptcha: change');

        const inputCaptcha = document.getElementById('inputCaptcha').value;
        const submitButtonStatus = document.getElementById('submitButton');

        if (inputCaptcha === 'PRNU') {
            submitButtonStatus.removeAttribute('disabled');
        } else {
            submitButtonStatus.setAttribute('disabled', '');
        }
    });

    //function untuk mensubmit form
    document.getElementById('formDataDiri').addEventListener('submit', function (event) {
        const inputCaptcha = document.getElementById('inputCaptcha').value;

        if (inputCaptcha === 'PRNU') {
            alert('Selamat! Captcha Anda Lolos :D');
        } else {
            alert('Captcha Anda belum tepat :(');
            document.getElementById('submitButton').setAttribute('disabled', '');
        }
        event.preventDefault();
    });

    //function untuk menampilkan alert apakah sedang mencopy sesuatu
    document.getElementById('inputCopy').addEventListener('copy', function () {
        alert('Anda telah men-copy sesuatu...');
    });

    //function untuk menampilkan alert apakah sedang menpaste sesuatu
    document.getElementById('inputPaste').addEventListener('paste', function () {
        alert('Anda telah men-paste sebuah teks...');
    })
});