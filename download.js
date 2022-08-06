var btnDownload = document.querySelector("#btnDownload");
var myGrid = document.querySelector(".grid");

btnDownload.onclick = function() {
    html2canvas(myGrid).then((canvas) => {
        var a = document.createElement("a");
        const base64image = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
        a.href = base64image;
        a.download = "my-grid.png";
        a.click();
    });
};
