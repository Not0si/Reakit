import { describe, expect, it } from '@jest/globals'

import UForm from './UForm'

describe('Defined Module', () => {
  it('is undefined not defined', () => {
    expect(UForm.isValidEmail(undefined)).toBeFalsy()
  })

  it('is null not defined', () => {
    expect(UForm.isValidEmail(null)).toBeFalsy()
  })

  it('5', () => {
    expect(UForm.isValidEmail('test@example.com')).toBeTruthy()
  })

  it('6', () => {
    expect(UForm.isValidEmail('invalid-email')).toBeFalsy()
  })

  it('7', () => {
    expect(UForm.isValidEmail('testexample.com')).toBeFalsy()
  })

  it('8', () => {
    expect(UForm.isValidEmail('test@')).toBeFalsy()
  })

  it('9', () => {
    expect(UForm.isValidEmail('est @ example.com')).toBeFalsy()
  })

  it('10', () => {
    expect(UForm.isValidEmail(' ')).toBeFalsy()
  })

  it('11.1', () => {
    expect(UForm.isValidEmail('user!name@example.com')).toBeFalsy()
  })

  it('11.2', () => {
    expect(UForm.isValidEmail('user^name@example.com')).toBeFalsy()
  })

  it('11.3', () => {
    expect(UForm.isValidEmail('user&name@example.com')).toBeFalsy()
  })

  it('12.1', () => {
    expect(UForm.isValidEmail('test@domain@net')).toBeFalsy()
  })

  it('12.2', () => {
    expect(UForm.isValidEmail('test @ example.com')).toBeFalsy()
  })

  it('12.3', () => {
    expect(UForm.isValidEmail(' test@example.com')).toBeFalsy()
  })

  it('12.4', () => {
    expect(UForm.isValidEmail('test@example.com ')).toBeFalsy()
  })

  it('14.1', () => {
    expect(UForm.isValidEmail('user.üñîçødë@example.com')).toBeFalsy()
  })

  it('14.2', () => {
    expect(
      UForm.isValidEmail('ser@very-long-domain-name-example.com'),
    ).toBeTruthy()
  })
})
