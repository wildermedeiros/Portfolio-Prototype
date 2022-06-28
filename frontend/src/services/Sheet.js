import axios from 'axios'

export const save = (data) => {
    const config = {
        method: 'post',
        url: 'https://sheet.best/api/sheets/bcf8feb4-4e76-4396-a3a2-92519f7bebe7',
        headers: {
            "Content-Type": "application/json",
        },
        data
    };

    console.log("spreadsheet config", config)

    return axios(config)
        .then(res => {
            console.log("Dados da planilha", res)
            return true
        })
        .catch(err => {
            console.log(err)
            return false
        })
}
