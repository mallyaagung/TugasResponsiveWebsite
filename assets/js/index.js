var dataSize = 0;
document.getElementById("size").innerText = dataSize;
function decrementSize() {
    dataSize = dataSize - 1;
    document.getElementById("size").innerText = dataSize;
}
function incrementSize() {
    dataSize = dataSize + 1;
    document.getElementById("size").innerText = dataSize;
}

var dataJumlah = 0;
document.getElementById("jumlah").innerText = dataJumlah;
function decrementJumlah() {
    dataJumlah = dataJumlah - 1;
    document.getElementById("jumlah").innerText = dataJumlah;
}
function incrementJumlah() {
    dataJumlah = dataJumlah + 1;
    document.getElementById("jumlah").innerText = dataJumlah;
}