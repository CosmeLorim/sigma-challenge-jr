import TSEAPI from '../config/TSEAPI'

export const getPresident = () => fetch(TSEAPI.listPresident()).then(res => res.json())

export const getVicePresident = () => fetch(TSEAPI.listVicePresident()).then(res => res.json())

export const getGovernor = (config) => fetch(TSEAPI.listGovernor(config.state)).then(res => res.json())

export const getViceGovernor = (config) => fetch(TSEAPI.listViceGovernor(config.state)).then(res => res.json())

export const getSenator = (config) => fetch(TSEAPI.listSenator(config.state)).then(res => res.json())

export const getCongressman = (config) => fetch(TSEAPI.listCongressman(config.state)).then(res => res.json())

export const getStateDeputy = (config) => fetch(TSEAPI.listStateDeputy(config.state)).then(res => res.json())

export const getFirstAlternat = (config) => fetch(TSEAPI.listFirstAlternat(config.state)).then(res => res.json())

export const getSecondAlternat = (config) => fetch(TSEAPI.listSecondAlternat(config.state)).then(res => res.json())

export default {
  getPresident,
  getVicePresident,
  getGovernor,
  getViceGovernor,
  getSenator,
  getCongressman,
  getStateDeputy,
  getFirstAlternat,
  getSecondAlternat
}