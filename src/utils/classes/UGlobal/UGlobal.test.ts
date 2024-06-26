import UGlobal from './UGlobal'

describe('Defined Module', () => {
  it('is undefined not defined', () => {
    expect(UGlobal.isDefined(undefined)).toBeFalsy()
  })

  it('is null not defined', () => {
    expect(UGlobal.isDefined(null)).toBeFalsy()
  })

  it('is {} defined', () => {
    expect(UGlobal.isDefined({})).toBeTruthy()
  })

  it('is [] defined', () => {
    expect(UGlobal.isDefined([])).toBeTruthy()
  })

  it('is 0 defined', () => {
    expect(UGlobal.isDefined(0)).toBeTruthy()
  })

  it('is empty string defined', () => {
    expect(UGlobal.isDefined('')).toBeTruthy()
  })
})
