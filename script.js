
function Gerarqrcode() {
    if (document.querySelector('#optionsDensity').value === '1') {
        var inputUsuario = document.querySelector('textarea').value;
        var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=M&chl='
        var Conteudoqrcode = GoogleChartAPI + encodeURI(inputUsuario);
        document.querySelector('#exitqrcode').src = Conteudoqrcode;
    } else if (document.querySelector('#optionsDensity').value === '2') {
        var inputUsuario = document.querySelector('textarea').value;
        var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=Q&chl='
        var Conteudoqrcode = GoogleChartAPI + encodeURI(inputUsuario);
        document.querySelector('#exitqrcode').src = Conteudoqrcode;
    } else if (document.querySelector('#optionsDensity').value === '3') {
        var inputUsuario = document.querySelector('textarea').value;
        var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=H&chl='
        var Conteudoqrcode = GoogleChartAPI + encodeURI(inputUsuario);
        document.querySelector('#exitqrcode').src = Conteudoqrcode;
    }
    else if (document.querySelector('#optionsDensity').value === '4') {
        var inputUsuario = document.querySelector('textarea').value;
        var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=200x200&chld=L&chl='
        var Conteudoqrcode = GoogleChartAPI + encodeURI(inputUsuario);
        document.querySelector('#exitqrcode').src = Conteudoqrcode;
    }
}