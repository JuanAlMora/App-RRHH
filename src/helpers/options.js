module.exports = {
    formate: 'A4',
    orientation: 'portrait',
    border: '10mm',
    header:{
        height: '15mm',
        contents: '<h4 style= "font-size:20;text-align=center;">CERTIFICADO</h4>'
    },
    footer:{
        height: '20mm',
        contents:{
            first: 'Cover page',
            2: 'Second page',
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
            last: 'Last Page'
        }
    }
}