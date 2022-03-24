import loading from './lottiesJson/loading.json'
import error from './lottiesJson/error.json'
import whatsapp from './lottiesJson/whatsapp.json'

const configLoading = {
    animationData: loading,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

const configError = {
    animationData: error,
    autoplay: true,
    loop: false,
    style: {
        width: '20%',
        margin: '0 auto'
    }
}

const configWhatsapp = {
    animationData: whatsapp,
    autoplay: true,
    loop: true,
    style: {
        width: '15%',
        margin: '0 auto'
    }
}

export { configLoading, configError, configWhatsapp}