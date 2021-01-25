<script>
    function validasi() {
        var nama = document.getElementById("nama").value;
        var jenis_wisata = document.getElementById("jenisWisata").value;
        var deskripsi = document.getElementById("deskripsi").value;
        var contact = document.getElementById("contact").value;
        var hp = document.getElementById("hp").value;
        var email = document.getElementById("email").value;
        var web = document.getElementById("web").value;
        var alamat = document.getElementById("alamat").value;
        var latlong = document.getElementById("latlong").value;
        if (nama != "" && jenis_wisata != "" && deskripsi != "" && contact != "" && hp != "" && email != "" && web != "" && alamat != "" && latlong != "") {
            return true;
        } else {
            alert('Harap Isi Data Dengan Lengkap!');
        }
    }
</script>