var btnDownload = document.querySelector("#btnDownload");
var myGrid = document.querySelector("#Grid");

btnDownload.onclick = function() {
    html2canvas(myGrid).then((canvas) => {
        const base64image = canvas.toDataURL("image/jpeg");
        var a = document.createElement("a");
        a.href = base64image;
        a.download = "my-grid.jpg";
        a.click();
        a.remove();
    });
};