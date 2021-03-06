function format() {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;

    document.getElementById("result").innerHTML = "Ngày sau khi format: " + day + "-" + month + "-" + year;
}