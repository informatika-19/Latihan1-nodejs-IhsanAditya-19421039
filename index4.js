// array

const dataMahasiswa = [
    {
        nama : 'IhsanAditya',
        npm : '19421039',
        prodi : 'Dakwah'
    },
    {
        nama : 'AzizGhoffar',
        npm : '19421062',
        prodi : 'HukumTataNegara'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }