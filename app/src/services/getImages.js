const baseUrlImage = 'http://divulgacandcontas.tse.jus.br/divulga/images/'

export const getImageState = (state) => `${baseUrlImage}/${state}.png`

export default { getImageState }