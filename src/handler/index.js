const DEV_URL ='https://polluty-app-backend.vercel.app/api/v1' //import.meta.DEV_URL;
const QA_URL ='';// import.meta.QA_URL;
const PROD_URL = '';//import.meta.PROD_URL;
const LOCAL_URL='http://192.168.1.5:3000/api/v1'
const domain = 'local';//import.meta.DOMAIN;
export const getBaseDomain = () => {
    let baseDomain = DEV_URL;
    switch (domain) {
        case "dev":
            baseDomain = DEV_URL;
            break;
        case "qa":
            baseDomain = QA_URL;
            break;
        case "prod":
            baseDomain = PROD_URL
            break;
        case 'local':
            baseDomain=LOCAL_URL;
            break;

    }
    return baseDomain;
}