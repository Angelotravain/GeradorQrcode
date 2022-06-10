
function Gerarqrcode(){
    var inputUsuario = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl='
    var Conteudoqrcode = GoogleChartAPI + inputUsuario;
    document.querySelector('#exitqrcode').src = Conteudoqrcode;
}