import { useTranslation } from "../i18n"


const useTransactionHook = async (lng) =>{
    const { t } = await useTranslation(lng)
    return t;
}

export default useTransactionHook;