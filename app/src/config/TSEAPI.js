const urlBaseListCandidate = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018'
const urlBaseQueryDataCandidate = 'http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/buscar/2018'
const numElection = 2022802018


export const listPresident = () => `${urlBaseListCandidate}/BR/${numElection}/1/candidatos`

export const listVicePresident = () => `${urlBaseListCandidate}/BR/${numElection}/2/candidatos`

export const listGovernor = state => `${urlBaseListCandidate}/${state}/${numElection}/3/candidatos`

export const listViceGovernor = state => `${urlBaseListCandidate}/${state}/${numElection}/4/candidatos`

export const listSenator = state => `${urlBaseListCandidate}/${state}/${numElection}/5/candidatos`

export const listCongressman = state => `${urlBaseListCandidate}/${state}/${numElection}/6/candidatos`

export const listStateDeputy = state => `${urlBaseListCandidate}/${state}/${numElection}/7/candidatos`

export const listFirstAlternat = state => `${urlBaseListCandidate}/${state}/${numElection}/9/candidatos`

export const listSecondAlternat = state => `${urlBaseListCandidate}/${state}/${numElection}/10/candidatos`

export const queryDataCandidate = config => `${urlBaseQueryDataCandidate}/${config.state}/${numElection}/candidato/${config.id}`

export default {
  listPresident,
  listVicePresident,
  listGovernor,
  listViceGovernor,
  listSenator,
  listCongressman,
  listStateDeputy,
  listFirstAlternat,
  listSecondAlternat,
  queryDataCandidate
}
