const urlBase = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018'

export const listPresident = () => urlBase + '/BR/2022802018/1/candidatos'

export const listVicePresident = () => urlBase + '/BR/2022802018/2/candidatos'

export const listGovernor = state => `${urlBase}/${state}/2022802018/3/candidatos`

export const listViceGovernor = state => `${urlBase}/${state}/2022802018/4/candidatos`

export const listSenator = state => `${urlBase}/${state}/2022802018/5/candidatos`

export const listCongressman = state => `${urlBase}/${state}/2022802018/6/candidatos`

export const listStateDeputy = state => `${urlBase}/${state}/2022802018/7/candidatos`

export const listFirstAlternat = state => `${urlBase}/${state}/2022802018/9/candidatos`

export const listSecondAlternat = state => `${urlBase}/${state}/2022802018/10/candidatos`

export default {
  listPresident,
  listVicePresident,
  listGovernor,
  listViceGovernor,
  listSenator,
  listCongressman,
  listStateDeputy,
  listFirstAlternat,
listSecondAlternat}
